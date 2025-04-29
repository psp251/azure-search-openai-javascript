# Get Player Data (Other)

**Group:** Player/Others

**Description:** Fetches additional data for another player.

**Route:** /v2/client/player/get-data

**Method:** POST

## Parameters

- **userId**: ID of the player to retrieve data for.
- **keys**: Keys of the player to retrieve data for.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, data, user-data, public-stats, metadata, profile, custom-fields
