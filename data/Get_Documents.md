# Get Documents

**Group:** App

**Description:** Retrieves metadata (uuid, id, name) for documents stored in the Specter platform, allowing you to list all available documents or look up a specific document's information.

**Route:** /v2/client/app/get-documents

**Method:** POST

## Parameters

- **documentId**: The unique identifier for the document to retrieve.

## Examples

### Retrieve All Available Documents

In this example, we retrieve a list of all available documents. This is useful when populating a help center or resource library within your application.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available documents, which might include the Terms of Service, Privacy Policy, Game Rules, and realm-specific guides like "Navigating the Fire Realm" or "Cyber District Security Protocols." This list would allow players to browse available resources and select specific documents to view in detail. The client application could display these as a menu of help topics, with each entry linking to a detailed view that retrieves the full document content using the Get Document Content endpoint.

#### Request

```
POST /v2/client/app/get-documents
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "success",
  "code": 200,
  "message": "Documents list",
  "data": [
    {
      "uuid": "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
      "id": "arcadia_nexus_terms",
      "name": "Arcadia Nexus Terms of Service"
    },
    {
      "uuid": "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
      "id": "privacy_policy",
      "name": "Privacy Policy"
    },
    {
      "uuid": "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
      "id": "fire_realm_guide",
      "name": "Navigating the Fire Realm"
    },
    {
      "uuid": "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
      "id": "cyber_district_guide",
      "name": "Cyber District Security Protocols"
    }
  ],
  "errors": []
}
```

## Additional Information

Retrieves metadata for client documents stored in the Specter platform. These documents can contain important information such as terms of service, privacy policies, game rules, or how-to guides. You can retrieve metadata for a specific document by providing its ID, or fetch a list of all available documents.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint has an optional parameter that can be included in the request body.
Optional Parameters

Parameter
Type
Description

documentId

 

 

string

 

 

The unique identifier for a specific document to retrieve metadata for. If omitted, metadata for all available documents will be returned.

 

 

Response Details
Main Response Structure

Field
Type
Description

status

 

 

string

 

 

Indicates the success or failure of the API call.

 

 

code

 

 

integer

 

 

HTTP status code of the response.

 

 

message

 

 

string

 

 

A message detailing the result of the API call.

 

 

errors

 

 

array

 

 

An array of error messages, if any occurred.

 

 

data

 

 

array

 

 

Contains the document metadata information. Always returns an array, even when requesting a specific document.

 

 

Document Object Structure
Each document object in the array includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the document in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the document.

 

 

name

 

 

string

 

 

Name of the document.

 

 

Notes

Content Retrieval: This endpoint only returns document metadata (uuid, id, name). To retrieve the actual content of a document, use the separate Get Document Content endpoint.

Document Types: Common types of documents include terms of service, privacy policies, game rules, how-to guides, and other informational content relevant to your application.

Two-Step Access Pattern: A common pattern is to first use this endpoint to retrieve a list of available documents, then use the Get Document Content endpoint to fetch the content for a specific document when a user selects it.

Cache Management: Consider implementing client-side caching for document metadata that doesn't change frequently to reduce API calls and improve performance.

Integration Tips

Contextual Access: Provide context-sensitive access to relevant documents based on where the player is in the game. For example, suggest realm-specific guides when a player enters a new realm for the first time.

Two-Step Document Access: Implement a two-step approach where you first display a list of available documents using this endpoint, then retrieve the full content only when a player selects a specific document using the Get Document Content endpoint.

Document Caching: Cache document metadata locally to reduce API calls and improve response times.

Localization: Consider using different document IDs for localized versions of the same content if your game supports multiple languages.

The Get Documents endpoint provides a way to discover available documentation for your players, serving as the entry point to the documentation system within Arcadia Nexus.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

documents, file-management, client-data, terms-and-conditions, privacy-policy, game-rules, how-to-guides
