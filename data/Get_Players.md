# Get Players

**Group:** App

**Description:** Retrieves a list of players using specified filters such as username, firstName, lastName, email, customId, or displayName. Supports pagination via limit and offset.

**Route:** /v2/client/app/get-players

**Method:** POST

## Parameters

- **filters**: An array of filter objects to query players. Each filter must specify a type (one of: username, firstName, lastName, email, customId, displayName) and a corresponding value.
- **limit**: Maximum number of player records to return.
- **offset**: Number of player records to skip for pagination.

## Examples

### Search Players by Username

In this example, we search for players by username. This is useful for implementing player search functionality or friend finding features.

 

Context for Arcadia Nexus:
For Arcadia Nexus, this would search for players whose usernames contain "Fire" (e.g., "FireMaster", "WildFire"). This type of search is commonly used in the social hub of Arcadia Nexus when players want to find friends or competitors to invite to challenges.

#### Request

```
POST /v2/client/app/get-players
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "filters": [
    {
      "type": "username",
      "value": "Fire"
    }
  ],
  "limit": 10,
  "offset": 0
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "Success",
  "code": 200,
  "message": "Players List",
  "errors": [],
  "data": [
    {
      "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
      "id": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
      "displayName": "FireMaster",
      "firstName": null,
      "lastName": null,
      "username": "FireMaster",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890/icons/profile.png",
      "customId": "player1@example.com",
      "email": null
    },
    {
      "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
      "id": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
      "displayName": "WildFire",
      "firstName": null,
      "lastName": null,
      "username": "WildFire",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901/icons/profile.png",
      "customId": "player2@example.com",
      "email": null
    },
    {
      "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
      "id": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
      "displayName": "Fire_Realm_Explorer",
      "firstName": null,
      "lastName": null,
      "username": "FireRealm",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012/icons/profile.png",
      "customId": "player3@example.com",
      "email": null
    }
  ]
}
```

### Retrieve Specific Player by Custom ID

In this example, we retrieve a specific player using their custom ID. This is useful when you have a unique identifier for a player from an external system.
Context for Arcadia Nexus:
For Arcadia Nexus, this might be used when a player logs in and you need to retrieve their player profile using their email address or another external identifier. This ensures that players maintain consistent profiles across sessions and devices.

#### Request

```
POST /v2/client/app/get-players
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "filters": [
    {
      "type": "customId",
      "value": "player123@example.com"
    }
  ]
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "Success",
  "code": 200,
  "message": "Players List",
  "errors": [],
  "data": [
    {
      "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
      "id": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
      "displayName": "ForestWalker",
      "firstName": null,
      "lastName": null,
      "username": "ForestWalker",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123/icons/profile.png",
      "customId": "player123@example.com",
      "email": null
    }
  ]
}
```

### Search Players by Display Name

In this example, we search for players by their display name. This is useful for finding players based on the names they've chosen to display publicly.
Context for Arcadia Nexus:
For Arcadia Nexus, this would search for players whose display names contain "Guardian" (e.g., "FireGuardian", "Guardian_of_the_Forest"). This functionality could be used in the community hub where players can discover others with similar interests or roles within the metaverse.

 

#### Request

```
POST /v2/client/app/get-players
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "filters": [
    {
      "type": "displayName",
      "value": "Guardian"
    }
  ],
  "limit": 20
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "Success",
  "code": 200,
  "message": "Players List",
  "errors": [],
  "data": [
    {
      "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
      "id": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
      "displayName": "FireGuardian",
      "firstName": null,
      "lastName": null,
      "username": "FireGuardian",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234/icons/profile.png",
      "customId": "player4@example.com",
      "email": null
    },
    {
      "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
      "id": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
      "displayName": "Guardian_of_the_Forest",
      "firstName": null,
      "lastName": null,
      "username": "ForestGuardian",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345/icons/profile.png",
      "customId": "player5@example.com",
      "email": null
    },
    {
      "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
      "id": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
      "displayName": "CyberGuardian",
      "firstName": null,
      "lastName": null,
      "username": "CyberGuardian",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/players/g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456/icons/profile.png",
      "customId": "player6@example.com",
      "email": null
    }
  ]
}
```

## Additional Information

Retrieves a list of players using specified filters. This endpoint allows you to search for players based on various identifiers such as username, name, email, custom ID, or display name. Use this endpoint to find specific players, implement player search functionality, or retrieve players for display in social features, leaderboards, or friend lists.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

filters

 

 

array of objects

 

 

An array of filter objects to query players. Each filter must specify a type and a corresponding value.

 

 

limit

 

 

number

 

 

Maximum number of player records to return.

 

 

offset

 

 

number

 

 

Number of player records to skip for pagination.

 

 

Filter Object Structure:

Field
Type
Description

type

 

 

string

 

 

The filter type. Allowed values: username, firstName, lastName, email, customId, displayName.

 

 

value

 

 

string

 

 

The value to search for with the specified filter type.

 

 

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

 

 

An array of player objects.

 

 

Player Object Structure

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the player in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the player (often the same as uuid).

 

 

displayName

 

 

string

 

 

The player's display name. Can be null if not set.

 

 

firstName

 

 

string

 

 

The player's first name. Can be null if not provided.

 

 

lastName

 

 

string

 

 

The player's last name. Can be null if not provided.

 

 

username

 

 

string

 

 

The player's username. Can be null if not set.

 

 

thumbUrl

 

 

string

 

 

URL to the player's profile picture/thumbnail. Can be null if not uploaded.

 

 

customId

 

 

string

 

 

A custom identifier for the player (e.g., email, phone number, external ID).

 

 

email

 

 

string

 

 

The player's email address. Generally null for privacy/security in client-side responses.

 

 

Notes

Privacy Considerations: The response typically masks sensitive information like email addresses, even if they're used as identifiers in the filters.

Multiple Filters: You can apply multiple filters simultaneously to narrow down your search for specific players.

Pagination: Use limit and offset parameters to implement pagination when dealing with large sets of player data.

Identifier Priority: If multiple identifiers are available for display, prioritize using displayName, then username, and finally customId as fallbacks.

Thumbnail Images: The thumbUrl provides the direct path to the player's profile image, which can be used to display avatars in your application.

 
Integration Tips

Player Search: Implement a search feature in your application allowing players to find friends or competitors by username or display name.

Player Profiles: Create player profile pages that display the retrieved information, including profile pictures and public identifiers.

Friend Lists: Use this endpoint to populate friend lists or to suggest potential friends based on similar identifiers.

Private Information: Be mindful of privacy when displaying player information. Always use the provided fields rather than sensitive identifiers in the UI.

Fallback Display Names: Implement a display hierarchy where you show displayName if available, otherwise username, and customId as a last resort.

The Get Players endpoint is essential for implementing social and competitive features in your game. By providing flexible search options and respecting player privacy, you can create engaging social experiences that connect players within the Arcadia Nexus metaverse.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

players, gamers, community-management
