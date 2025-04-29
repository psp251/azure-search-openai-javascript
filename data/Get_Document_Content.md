# Get Document Content

**Group:** App

**Description:** Retrieves the full HTML content of a specific document stored in the Specter platform, enabling you to display formatted text and styling information to users.

**Route:** /v2/client/app/get-document-content

**Method:** POST

## Parameters

- **documentId**: The unique identifier for the document to retrieve.

## Examples

### Retrieve Terms of Service Document

In this example, we retrieve the full HTML content of the Arcadia Nexus Terms of Service document. This is essential for displaying legal information to players when they sign up or when they need to review the terms they've agreed to.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve the complete Terms of Service document containing detailed rules and legal terms for participating in the metaverse. The client application would render this HTML content in a formatted view, allowing players to read through comprehensive information about their rights and responsibilities, intellectual property considerations, code of conduct, and other legal aspects of using the platform.

#### Request

```
POST /v2/client/app/get-document-content
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "documentId": "arcadia_nexus_terms"
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}


Body: "<h1>Arcadia Nexus Terms of Service</h1>
<p>Welcome to Arcadia Nexus, a virtual metaverse where players explore multiple themed realms, each offering unique challenges and experiences. By accessing or using our service, you agree to be bound by these Terms of Service.</p>

<h2>1. Acceptance of Terms</h2>
<p>By creating an account and accessing Arcadia Nexus, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not access the service.</p>

<h2>2. Virtual Items and Currency</h2>
<p>Arcadia Nexus features virtual items, currencies, and properties that can be acquired through gameplay or purchased. You understand that these items remain the property of Arcadia Nexus, and you are granted a limited, non-transferable license to use them within the game.</p>

<h2>3. Player Conduct</h2>
<p>When traveling between realms and interacting with other players, you agree to follow our community guidelines. Harassment, cheating, exploitation of bugs, or any form of disruptive behavior may result in penalties including temporary or permanent account suspension.</p>

<h2>4. Privacy</h2>
<p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of Arcadia Nexus, to understand our practices regarding the collection and use of your personal information.</p>

<h2>5. Modifications to Service</h2>
<p>We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You agree that we shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.</p>

<style type=\"text/css\">
h1 { color: #ff6600; font-size: 24px; margin-bottom: 20px; }
h2 { color: #ff9933; font-size: 20px; margin-top: 25px; }
p { line-height: 1.6; margin-bottom: 15px; }
</style>"
```

### Retrieve Fire Realm Guide

In this example, we retrieve a detailed guide for navigating one of the realms in Arcadia Nexus. This provides players with valuable information about gameplay mechanics, challenges, and strategies specific to that realm.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve a comprehensive guide to the Fire Realm, containing detailed information about its environments, challenges, creatures, and rewards. The guide might include formatted sections with headings, lists of items needed for survival, explanations of realm-specific mechanics like heat resistance, and perhaps even embedded imagery through HTML. The client application would display this content in a readable, well-formatted way to help players prepare for and navigate the unique challenges of the Fire Realm.

#### Request

```
POST /v2/client/app/get-document-content
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "documentId": "fire_realm_guide"
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: "<h1>Navigating the Realm of Fire</h1>
<p>Welcome, brave explorer, to the scorching Realm of Fire. This guide will help you understand the unique challenges, opportunities, and secrets of this volcanic domain.</p>

<h2>Survival Basics</h2>
<p>The Realm of Fire is characterized by extreme heat, lava flows, and fire-based creatures. Before entering, ensure you have:</p>
<ul>
  <li>Fire-resistant clothing or potions</li>
  <li>A supply of cooling potions</li>
  <li>Heat-resistant containers for collecting Fire Essence</li>
</ul>

<h2>Key Locations</h2>
<h3>The Obsidian Forge</h3>
<p>Located at the heart of the Volcano, the Obsidian Forge is where master crafters can create powerful fire-infused weapons and armor. To access it, you'll need to complete the 'Flame Touched' quest from Ember, the forge master.</p>

<h3>Lava Falls</h3>
<p>The spectacular Lava Falls contain rare mineral deposits that can be harvested for crafting. Approach with caution - the heat intensity here is at its highest, and Fire Salamanders patrol the area.</p>

<h2>Fire Essence Collection</h2>
<p>Fire Essence is the realm-specific currency used to purchase items and upgrades within the Fire Realm. It can be collected from:</p>
<ul>
  <li>Defeating fire elementals</li>
  <li>Harvesting flame blossoms that grow near lava pools</li>
  <li>Completing daily challenges from the Flame Keepers</li>
</ul>

<h2>Unique Challenges</h2>
<p>The 'Flame Runner' challenge requires players to navigate a course across moving platforms over lava within a time limit. Completing this challenge is necessary to unlock the Fire Dash ability.</p>

<style type=\"text/css\">
h1 { color: #ff3300; font-size: 28px; margin-bottom: 20px; }
h2 { color: #ff6600; font-size: 22px; margin-top: 25px; }
h3 { color: #ff9933; font-size: 18px; margin-top: 15px; }
p { line-height: 1.6; margin-bottom: 15px; }
ul { margin-left: 20px; margin-bottom: 20px; }
li { margin-bottom: 8px; }
</style>"
```

## Additional Information

Retrieves the full HTML content of a specific document stored in the Specter platform. This endpoint is used to fetch the complete content of documents such as terms of service, privacy policies, game rules, or how-to guides that can be displayed in your application.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint requires the following parameter in the request body.
Required Parameters

Parameter
Type
Description

documentId

 

 

string

 

 

The unique identifier for the document to retrieve.

 

 

Response Details
Response Structure
The response is a string containing the HTML content of the requested document. This HTML content can include formatting elements like paragraphs, headings, lists, and even CSS styling.
Notes

HTML Rendering: The response contains raw HTML that should be rendered appropriately in your client application to maintain the intended formatting and styling.

CSS Styling: The HTML content may include inline CSS or style tags that define how the content should be displayed.

Content Types: This endpoint is particularly useful for retrieving longer, formatted documents such as terms of service, privacy policies, game guides, tutorials, or any other text-heavy content that benefits from HTML formatting.

Error Handling: If the requested document doesn't exist, the API will return an appropriate error message. Ensure your application handles these cases gracefully.

Caching: Consider implementing client-side caching for document content that doesn't change frequently to reduce API calls and improve performance.

Integration Tips

HTML Rendering Component: Implement a robust HTML rendering component in your client application that can handle various HTML elements and CSS styling to display the document content as intended.

Loading States: Show appropriate loading indicators while fetching document content, especially for longer documents that might take more time to retrieve.

Error Handling: Implement proper error handling for cases where a document ID might not exist or when network issues occur.

Scrollable Container: Display longer documents in a scrollable container with proper padding and line spacing for readability.

Print Functionality: For important documents like terms of service, consider adding a print option that allows players to create a physical or PDF copy for their records.

Text Size Controls: Provide accessibility options such as text size controls to make documents readable for all players.

Contextual Display: Consider when and where to display specific documents - for example, showing realm guides when players enter a new realm for the first time, or displaying terms updates when terms have changed.

The Get Document Content endpoint is essential for providing players with the detailed information they need to understand both the legal framework and gameplay mechanics of Arcadia Nexus. By effectively rendering the HTML content returned by this endpoint, you can ensure players have access to well-formatted, comprehensive documentation about all aspects of the metaverse.

 

## Required Headers

- **Api-Key**: The environment-specific API key

## Tags

documents, file-management, client-data, html, terms-and-conditions, privacy-policy, game-rules, how-to-guides
