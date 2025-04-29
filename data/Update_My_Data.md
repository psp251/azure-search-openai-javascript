# Update My Data

**Group:** Player/Me

**Description:** Updates or adds custom data fields for the player.

**Route:** /v2/client/player/me/update-data

**Method:** POST

## Parameters

- **playerData**: Array of key-value pairs representing player data to be updated or added.
- **permission**: Optional permission level for the data being updated.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, data, update, profile, custom-fields, metadata, personal-info, analytics
