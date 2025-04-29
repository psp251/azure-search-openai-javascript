# Update Player Data

**Group:** Player/Others

**Description:** Updates or adds custom data fields for the player.

**Route:** /v2/client/player/update-data

**Method:** POST

## Parameters

- **userId**: Unique ID of the player whose data is to be updated.
- **playerData**: Array of player data objects containing update key and associated value.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, data, update, profile, custom-fields, metadata, analytics
