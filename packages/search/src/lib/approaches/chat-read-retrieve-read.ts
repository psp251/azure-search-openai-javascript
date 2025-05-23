import { type SearchClient } from '@azure/search-documents';
import { type OpenAiService } from '../../plugins/openai.js';
import {
  type ChatApproach,
  type ApproachResponse,
  type ChatApproachContext,
  type ApproachResponseChunk,
} from './approach.js';
import { ApproachBase } from './approach-base.js';
import { type Message, messagesToString } from '../message.js';
import { MessageBuilder } from '../message-builder.js';
import { getTokenLimit } from '../tokens.js';

const SYSTEM_MESSAGE_CHAT_CONVERSATION = `You are Specter's AI Assistant, a specialized chatbot for Specter's gaming backend-as-a-service platform. Your role is to help game developers understand and effectively use Specter's features, APIs, and dashboard.

Key responsibilities:
1. Provide clear, accurate information about Specter's features and capabilities
2. Guide users through the dashboard interface and explain its components
3. Offer detailed API documentation and code examples
4. Help with implementation guidance and best practices

Guidelines for responses:
- Be technical yet accessible, explaining complex concepts clearly
- Provide comprehensive, detailed answers that cover all aspects of the question
- Format code examples beautifully with proper syntax highlighting and indentation
- Include specific API endpoints, parameters, and response formats when relevant
- Reference official documentation and best practices
- For dashboard questions, explain the purpose and functionality of each component
- When discussing features, explain both what they do and how to implement them
- IMPORTANT: Throughout the documentation, "Arcadia Nexus" is used as a sample game to demonstrate features - it is just an example game used in documentation, NOT the actual platform. The platform is Specter.

Code formatting guidelines:
- Use proper markdown code blocks with language specification (e.g., \`\`\`javascript, \`\`\`http)
- Include comments in code examples to explain important parts
- Format JSON examples with proper indentation and line breaks
- Use consistent naming conventions in code examples
- Include error handling and best practices in code snippets

Response structure:
1. Start with a clear, concise overview
2. Provide detailed step-by-step explanations
3. Include relevant code examples with proper formatting
4. Add important notes, warnings, or best practices
5. Reference related APIs or features when relevant
6. End with next steps or additional resources

Answer ONLY with the facts listed in the sources below. If there isn't enough information, say you don't know. Do not generate answers that don't use the sources. If asking a clarifying question would help, ask it.

For tabular information return it as an html table. Do not return markdown format. If the question is not in English, answer in the language used in the question.

Each source has a name followed by colon and the actual information, always include the source name for each fact you use in the response. Use square brackets to reference the source, for example: [info1.txt]. Don't combine sources, list each source separately, for example: [info1.txt][info2.pdf].

{follow_up_questions_prompt}
{injected_prompt}
`;

const FOLLOW_UP_QUESTIONS_PROMPT_CONTENT = `Generate 3 very brief follow-up questions about Specter's gaming backend platform features.
Remember that while documentation may use "Arcadia Nexus" as an example game, Specter is the actual platform.
Enclose the follow-up questions in double angle brackets. Example:
<<How do I implement Specter's matchmaking system?>>
<<What are the limits on Specter's leaderboard entries?>>
<<Can I customize Specter's ranking algorithm?>>

Do not repeat questions that have already been asked.
Make sure the last question ends with ">>".`;

const QUERY_PROMPT_TEMPLATE = `Below is a history of the conversation so far, and a new question asked by the user that needs to be answered by searching in a knowledge base about Specter's gaming backend services.
Generate a search query based on the conversation and the new question.
Do not include cited source filenames and document names e.g info.txt or doc.pdf in the search query terms.
Do not include any text inside [] or <<>> in the search query terms.
Do not include any special characters like '+'.
If the question is not in English, translate the question to English before generating the search query.
If you cannot generate a search query, return just the number 0.

Remember: While documentation examples may reference "Arcadia Nexus" as a sample game, always treat Specter as the actual platform name in your responses.
`;

const QUERY_PROMPT_FEW_SHOTS: Message[] = [
  { role: 'user', content: 'How do I configure a new leaderboard in Specter?' },
  { role: 'assistant', content: 'specter leaderboard configuration setup' },
  { role: 'user', content: 'What happens if a player disconnects during a Specter matchmaking session?' },
  { role: 'assistant', content: 'specter handle player disconnect matchmaking system' },
  { role: 'user', content: 'How can I track achievements in my Specter game?' },
  { role: 'assistant', content: 'specter achievement tracking system implementation' },
];

/**
 * Simple retrieve-then-read implementation, using the AI Search and OpenAI APIs directly.
 * It first retrieves top documents from search, then constructs a prompt with them, and then uses
 * OpenAI to generate an completion (answer) with that prompt.
 */
export class ChatReadRetrieveRead extends ApproachBase implements ChatApproach {
  chatGptTokenLimit: number;

  constructor(
    search: SearchClient<any>,
    openai: OpenAiService,
    chatGptModel: string,
    embeddingModel: string,
    sourcePageField: string,
    contentField: string,
  ) {
    super(search, openai, chatGptModel, embeddingModel, sourcePageField, contentField);
    this.chatGptTokenLimit = getTokenLimit(chatGptModel);
  }

  async run(messages: Message[], context?: ChatApproachContext): Promise<ApproachResponse> {
    const { completionRequest, dataPoints, thoughts } = await this.baseRun(messages, context);
    const openAiChat = await this.openai.getChat();
    const chatCompletion = await openAiChat.completions.create(completionRequest);
    const chatContent = chatCompletion.choices[0].message.content ?? '';

    return {
      choices: [
        {
          index: 0,
          message: {
            content: chatContent,
            role: 'assistant',
            context: {
              data_points: {
                text: dataPoints,
              },
              thoughts: thoughts,
            },
          },
        },
      ],
      object: 'chat.completion',
    };
  }

  async *runWithStreaming(
    messages: Message[],
    context?: ChatApproachContext,
  ): AsyncGenerator<ApproachResponseChunk, void> {
    const { completionRequest, dataPoints, thoughts } = await this.baseRun(messages, context);
    const openAiChat = await this.openai.getChat();
    const chatCompletion = await openAiChat.completions.create({
      ...completionRequest,
      stream: true,
    });
    let id = 0;
    for await (const chunk of chatCompletion) {
      const responseChunk = {
        choices: [
          {
            index: 0,
            delta: {
              content: chunk.choices[0]?.delta.content ?? '',
              role: 'assistant' as const,
              context: {
                data_points: id === 0 ? { text: dataPoints } : undefined,
                thoughts: id === 0 ? thoughts : undefined,
              },
            },
            finish_reason: chunk.choices[0]?.finish_reason,
          },
        ],
        object: 'chat.completion.chunk' as const,
      };
      yield responseChunk;
      id++;
    }
  }

  private async baseRun(messages: Message[], context?: ChatApproachContext) {
    const userQuery = 'Generate search query for: ' + messages[messages.length - 1].content;

    // STEP 1: Generate an optimized keyword search query based on the chat history and the last question
    // -----------------------------------------------------------------------

    const initialMessages = this.getMessagesFromHistory(
      QUERY_PROMPT_TEMPLATE,
      this.chatGptModel,
      messages,
      userQuery,
      QUERY_PROMPT_FEW_SHOTS,
      this.chatGptTokenLimit - userQuery.length,
    );

    const openAiChat = await this.openai.getChat();
    const chatCompletion = await openAiChat.completions.create({
      model: this.chatGptModel,
      messages: initialMessages,
      temperature: 0,
      max_tokens: 32,
      n: 1,
    });

    let queryText = chatCompletion.choices[0].message.content?.trim();
    if (queryText === '0') {
      // Use the last user input if we failed to generate a better query
      queryText = messages[messages.length - 1].content;
    }

    // STEP 2: Retrieve relevant documents from the search index with the GPT optimized query
    // -----------------------------------------------------------------------

    const { query, results, content } = await this.searchDocuments(queryText, context);
    const followUpQuestionsPrompt = context?.suggest_followup_questions ? FOLLOW_UP_QUESTIONS_PROMPT_CONTENT : '';

    // STEP 3: Generate a contextual and content specific answer using the search results and chat history
    // -----------------------------------------------------------------------

    // Allow client to replace the entire prompt, or to inject into the exiting prompt using >>>
    const promptOverride = context?.prompt_template;
    let systemMessage: string;
    if (promptOverride?.startsWith('>>>')) {
      systemMessage = SYSTEM_MESSAGE_CHAT_CONVERSATION.replace(
        '{follow_up_questions_prompt}',
        followUpQuestionsPrompt,
      ).replace('{injected_prompt}', promptOverride.slice(3) + '\n');
    } else if (promptOverride) {
      systemMessage = SYSTEM_MESSAGE_CHAT_CONVERSATION.replace(
        '{follow_up_questions_prompt}',
        followUpQuestionsPrompt,
      ).replace('{injected_prompt}', promptOverride);
    } else {
      systemMessage = SYSTEM_MESSAGE_CHAT_CONVERSATION.replace(
        '{follow_up_questions_prompt}',
        followUpQuestionsPrompt,
      ).replace('{injected_prompt}', '');
    }

    const finalMessages = this.getMessagesFromHistory(
      systemMessage,
      this.chatGptModel,
      messages,
      // Model does not handle lengthy system messages well.
      // Moving sources to latest user conversation to solve follow up questions prompt.
      `${messages[messages.length - 1].content}\n\nSources:\n${content}`,
      [],
      this.chatGptTokenLimit,
    );

    const firstQuery = messagesToString(initialMessages);
    const secondQuery = messagesToString(finalMessages);
    const thoughts = `Search query:
${query}

Conversations:
${firstQuery}

${secondQuery}`.replaceAll('\n', '<br>');

    return {
      completionRequest: {
        model: this.chatGptModel,
        messages: finalMessages,
        temperature: Number(context?.temperature ?? 0.7),
        max_tokens: 2048,
        n: 1,
      },
      dataPoints: results,
      thoughts,
    };
  }

  private getMessagesFromHistory(
    systemPrompt: string,
    model: string,
    history: Message[],
    userContent: string,
    fewShots: Message[] = [],
    maxTokens = 4096,
  ): Message[] {
    const messageBuilder = new MessageBuilder(systemPrompt, model);

    // Add examples to show the chat what responses we want.
    // It will try to mimic any responses and make sure they match the rules laid out in the system message.
    for (const shot of fewShots.reverse()) {
      messageBuilder.appendMessage(shot.role, shot.content);
    }

    const appendIndex = fewShots.length + 1;
    messageBuilder.appendMessage('user', userContent, appendIndex);

    for (const historyMessage of history.slice(0, -1).reverse()) {
      if (messageBuilder.tokens > maxTokens) {
        break;
      }
      if (historyMessage.role === 'assistant' || historyMessage.role === 'user') {
        messageBuilder.appendMessage(historyMessage.role, historyMessage.content, appendIndex);
      }
    }

    return messageBuilder.messages;
  }
}
