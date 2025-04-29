# Remove My Data

**Group:** Player/Me

**Description:** Removes specified player data keys from the user's profile.

**Route:** /v2/client/player/me/remove-data

**Method:** POST

## Parameters

- **keysToRemove**: Array of keys representing the data fields to be removed from the player's profile.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, data, privacy, removal, gdpr, personal-data, account, cleanup
