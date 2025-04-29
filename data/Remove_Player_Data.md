# Remove Player Data

**Group:** Player/Others

**Description:** Removes specified player data keys from the user's profile.

**Route:** /v2/client/player/remove-data

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **keysToRemove**: Array of keys to remove from player data.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, data, privacy, removal, gdpr, personal-data, account, cleanup
