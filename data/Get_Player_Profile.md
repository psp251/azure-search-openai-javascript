# Get Player Profile

**Group:** Player/Me

**Description:** Retrieves the profile of the player, including linked accounts and equipped items.

**Route:** /v2/client/player/me/get-profile

**Method:** POST

## Parameters

- **id**: The unique ID of the user.
- **username**: The username of the user.
- **email**: The email address of the user.

## Attributes

- **linkedAccounts** (array): Linked accounts of the player.
- **equippedItems** (array): Currently equipped items of the player.

## Examples

### Retrieve Basic Player Profile

In this example, we retrieve only the basic profile information of the currently authenticated player without requesting any additional attributes.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve just the essential player information such as their display name, username, and profile image URL. This basic information is sufficient for showing the player's identity in chat interfaces, friend lists, or other areas where detailed character information isn't necessary. Since no additional attributes are requested, the response won't include information about linked accounts or equipped items, keeping the data transfer minimal and efficient.

#### Request

```
POST /v2/client/player/me/get-profile
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json",
  "Authorization": "Bearer your-player-token"
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
  "errors": [],
  "message": "My Profile data",
  "data": {
    "user": {
      "uuid": "fe10d133-b8fe-47d0-8ef5-fdc6534eb681",
      "id": "fe10d133-b8fe-47d0-8ef5-fdc6534eb681",
      "email": null,
      "displayName": "FireWalker92",
      "firstName": "Alex",
      "lastName": "Morgan",
      "username": "alexm",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/avatars/firewalker.png",
      "referralCode": "L5X3C0"
    }
  }
}
```

### Retrieve Profile with Linked Accounts and Equipped Items

In this example, we retrieve the profile of the currently authenticated player, including their linked accounts and equipped items to display a complete profile in the game interface.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve complete player profile information, including linked authentication methods and equipped items from different realms. This information is crucial for displaying the player's character with the correct appearance and abilities across the metaverse. For example, with these attributes, the game can show that the player has a "Flame Shield" from the Fire Realm equipped, granting fire resistance, and a "Neural Interface" from the Cyber District, allowing access to secured digital areas. The linked accounts information helps the game recognize the player across different login methods, ensuring continuity of their progression and inventory.

 

#### Request

```
POST /v2/client/player/me/get-profile
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json",
  "Authorization": "Bearer your-player-token"
}
Body: {
  "attributes": ["linkedAccounts", "equippedItems"]
}
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
  "errors": [],
  "message": "My Profile data",
  "data": {
    "user": {
      "uuid": "fe10d133-b8fe-47d0-8ef5-fdc6534eb681",
      "id": "fe10d133-b8fe-47d0-8ef5-fdc6534eb681",
      "email": null,
      "displayName": "FireWalker92",
      "firstName": "Alex",
      "lastName": "Morgan",
      "username": "alexm",
      "thumbUrl": "https://cdn.specterapp.xyz/org-123456/avatars/firewalker.png",
      "referralCode": "L5X3C0",
      "linkedAccounts": [
        {
          "authProvider": "Custom",
          "userId": "my_custom_id"
        },
        {
          "authProvider": "Google",
          "userId": null
        },
        {
          "authProvider": "Facebook",
          "userId": null
        }
      ]
    },
    "equippedItems": [
      {
        "uuid": "7d251c87-50a9-4337-9258-3670962b63a0",
        "id": "flame_shield",
        "name": "Flame Shield",
        "description": "A shield forged in the heart of the Volcano that grants fire resistance.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_shield.png"
      },
      {
        "uuid": "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        "id": "forest_boots",
        "name": "Forest Strider Boots",
        "description": "Lightweight boots that increase movement speed in forested areas.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_boots.png"
      }
    ]
  }
}
```

## Additional Information

Retrieves the basic profile information of the currently authenticated player. Additional data such as linked accounts and equipped items can be requested using the attributes parameter.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
This endpoint accepts optional parameters that you can include in the request body.
Optional Parameters

Parameter
Type
Description

id

 

 

string

 

 

The unique ID of the player.

 

 

username

 

 

string

 

 

The username of the player.

 

 

email

 

 

string

 

 

The email address of the player.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve. These details are only included when specifically requested.

 

 

Available Attributes

linkedAccounts: Array of external accounts linked to this player profile.

equippedItems: List of items currently equipped by the player.

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

 

 

object

 

 

Contains the player profile information.

 

 

Data Object Structure

Field
Type
Description

user

 

 

object

 

 

The player's basic profile information.

 

 

When specific attributes are requested, the corresponding fields will be included in the response:

Attribute
Response Field
Type
Description

linkedAccounts

 

 

data.user.linkedAccounts

 

 

array

 

 

List of external accounts linked to this player profile.

 

 

equippedItems

 

 

data.equippedItems

 

 

array

 

 

List of items currently equipped by the player.

 

 

User Object Structure

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the player in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the player (often same as uuid).

 

 

email

 

 

string

 

 

Email address of the player. Can be null.

 

 

displayName

 

 

string

 

 

Display name or nickname of the player. Can be null.

 

 

firstName

 

 

string

 

 

First name of the player. Can be null.

 

 

lastName

 

 

string

 

 

Last name of the player. Can be null.

 

 

username

 

 

string

 

 

Username of the player. Can be null.

 

 

thumbUrl

 

 

string

 

 

URL to the player's profile picture or avatar. Can be null.

 

 

referralCode

 

 

string

 

 

Unique code used for referring other players.

 

 

Linked Account Object Structure
When the linkedAccounts attribute is requested, each linked account object includes:

Field
Type
Description

authProvider

 

 

string

 

 

The authentication provider (e.g., "Custom", "Google", "Facebook").

 

 

userId

 

 

string

 

 

ID associated with this account on the provider's platform. Can be null.

 

 

Equipped Item Object Structure
When the equippedItems attribute is requested, each equipped item in the equippedItems array includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the equipped item in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the item.

 

 

name

 

 

string

 

 

Name of the item.

 

 

description

 

 

string

 

 

Description of the item.

 

 

iconUrl

 

 

string

 

 

URL to the item's icon.

 

 

Notes

Authorization: This endpoint requires a valid player token in the Authorization header to identify which player's profile to retrieve.

Profile Completeness: Some fields may be null depending on how the player created their account and what information they've provided.

Attributes: The attributes parameter is essential for retrieving linked accounts and equipped items. These fields are only included in the response when specifically requested.

Performance Optimization: Only request the attributes you need to improve response times and reduce data transfer.

Referral Code: The referralCode can be used in referral programs to track which players have invited others.

Integration Tips

Profile Displays: Use this endpoint with no attributes for basic profile information, and add attributes when you need to display equipment or authentication options.

Login Options: When authenticating returning players, request the linkedAccounts attribute to display appropriate login options.

Equipment Visualization: When displaying the player's character, request the equippedItems attribute to update the player's in-game avatar with the appropriate visual elements.

Identity Management: Allow players to update incomplete profile fields through your UI, especially displayName and thumbUrl which affect how others see them.

Referral Systems: Implement referral systems using the referralCode to track and reward players who invite others to the game.

Cache Management: Consider caching profile data with a reasonable expiration time to reduce API calls for frequently accessed information.

Attribute Optimization: Only request the attributes you need for the current context to optimize performance.

The Get Player Profile endpoint provides the foundation for personalizing the player's experience throughout Arcadia Nexus, ensuring they maintain a consistent identity across the different realms while displaying their achievements through equipped items and customizations when those attributes are requested.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, profile, linked-accounts, equipped-items, inventory, user-data, social-profiles, email, avatar, icon
