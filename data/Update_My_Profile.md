# Update My Profile

**Group:** Player/Me

**Description:** Updates profile information for the player, including personal and custom parameters.

**Route:** /v2/client/player/me/update-profile

**Method:** POST

## Parameters

- **firstName**: Player's first name.
- **lastName**: Player's last name.
- **username**: Unique username of the player.
- **displayName**: Display name for the player.
- **thumbUrl**: URL to the player's profile picture or avatar.
- **isKycComplete**: Boolean indicating if the player's KYC is complete.
- **birthdate**: Player's birthdate in string format.
- **tags**: Array of tags associated with the player.
- **customParams**: Custom parameters for player profile.

## Examples

### Update Basic Profile Information

In this example, we update the player's display name and avatar URL to reflect their new identity in the game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would update how the player appears to others across all realms in the metaverse. The new display name "FireLord42" would reflect the player's recent achievements in the Fire Realm, while the updated avatar shows their character wearing ceremonial Fire Realm attire. These changes would be visible in the social hub, player listings, and during multiplayer interactions, allowing the player to showcase their newly earned status as a master of the Fire Realm.

#### Request

```
POST /v2/client/player/me/update-profile
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json",
  "Authorization": "Bearer your-player-token"
}
Body: {
  "displayName": "FireLord42",
  "thumbUrl": "https://cdn.arcadianexus.com/avatars/firelord.png"
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
  "code": 201,
  "message": "User updated successfully",
  "errors": [],
  "data": {}
}
```

### Update Player Tags with Context

In this example, we update the player's tags and include custom parameters to provide context about the reason for this specific update.
Context for Arcadia Nexus:
For Arcadia Nexus, this update would add tags that reflect the player's progression through different realms after they completed a significant quest. The custom parameters provide valuable context about why this update is happening - in this case, because the player completed the "Fire Master Trial" quest. This information can be useful for audit trails, analytics, or triggering additional game events. The tags themselves would help with matchmaking, content recommendations, and displaying the player's accomplishments to other players in the metaverse.

#### Request

```
POST /v2/client/player/me/update-profile
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json",
  "Authorization": "Bearer your-player-token"
}
Body: {
  "tags": ["fire_realm_master", "forest_explorer", "cyber_rookie"],
  "customParams": {
    "updateReason": "quest_completion",
    "questId": "fire_master_trial",
    "updateInitiator": "game_system"
  }
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
  "code": 201,
  "message": "User updated successfully",
  "errors": [],
  "data": {}
}
```

## Additional Information

Updates profile information for the currently authenticated player, including personal details and custom parameters. This endpoint allows players to modify their profile data such as name, username, display name, avatar, and additional custom fields.
Request Headers

Content-Type: application/json
Api Key: Your API key provided by Specter
Authorization: Bearer token for the player's session

Request Body Parameters
This endpoint accepts various parameters that you can include in the request body to update different aspects of the player's profile. All parameters are optional - only include the fields you want to update.
Optional Parameters

Parameter
Type
Description

firstName
string
Player's first name.

lastName
string
Player's last name.

username
string
Unique username of the player.

displayName
string
Display name or nickname for the player.

thumbUrl
string
URL to the player's profile picture or avatar.

isKycComplete
boolean
Indicates if the player's Know Your Customer verification is complete.

birthdate
string
Player's birthdate in string format.

tags
array of strings
Array of tags associated with the player.

customParams
object
Custom parameters related to the specific update operation, such as tracking the context, reason, or verification details.

Response Details
Main Response Structure

Field
Type
Description

status
string
Indicates the success or failure of the API call. Will be "success" for successful updates.

code
integer
HTTP status code of the response. Typically 201 for successful updates.

message
string
A message detailing the result of the API call.

errors
array
An array of error messages, if any occurred.

data
object
An empty object for successful updates.

Notes

Authorization: This endpoint requires a valid player token in the Authorization header to identify which player's profile to update.
Partial Updates: You only need to include the fields you want to update. Any fields not included will remain unchanged.
Username Uniqueness: If you're updating the username, ensure it's unique within your application as this may be used for player identification.
Custom Parameters: The customParams object is used to provide context about the specific update operation, such as tracking update reasons, verification details, or other metadata related to this particular profile change.
Rate Limiting: Consider implementing rate limiting for profile updates to prevent abuse.
Data Validation: Implement client-side validation before sending updates to ensure data integrity (e.g., validating email formats, username conventions).

Integration Tips

Progressive Profile Building: Allow players to update their profiles incrementally rather than requiring all information at once, improving the onboarding experience.
Visual Feedback: Provide immediate visual feedback when profile updates are successful, such as displaying the new avatar or display name.
Form Validation: Implement client-side validation for field formats (e.g., ensuring appropriate username length or character restrictions).
Default Values: Consider providing default or suggested values for fields like display names or avatars to make the process easier for new players.
Privacy Controls: Clearly communicate which profile information will be visible to other players versus information that remains private.
Cached Updates: After successful profile updates, update any cached player data in your client application to reflect the changes immediately.
Audit Tracking: Use customParams to track why and when profile changes occurred for debugging and analytics purposes.

The Update My Profile endpoint provides the flexibility to personalize and enhance the player's identity within Arcadia Nexus, enabling them to express themselves and maintain an up-to-date representation across the diverse realms of the metaverse.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, profile, update, personal-info, account, customization, avatar, user-data
