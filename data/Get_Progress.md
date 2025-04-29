# Get Progress

**Group:** Player/Others

**Description:** Retrieves the progression marker data for a specified user.

**Route:** /v2/client/player/get-progress

**Method:** POST

## Parameters

- **userId**: The ID of the target user.
- **progressionMarkerIds**: Array of progression marker IDs to retrieve.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, progress, xp, leveling, rank, statistics, progression-markers, achievements
