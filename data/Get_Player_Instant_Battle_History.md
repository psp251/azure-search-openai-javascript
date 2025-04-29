# Get Player Instant Battle History

**Group:** Player/Others

**Description:** Fetches the history of instant battles participated in by the specified user.

**Route:** /v2/client/player/get-instant-battle-history

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **competitionIds**: Array of competition IDs to retrieve history for specific battles.
- **scheduleStatuses**: Array of schedule statuses to filter battles.
- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.

## Attributes

- **match** (object): Details about the match the Instant Battle is mapped to.
- **config** (object): Details about the Instant Battle configuration
- **sourceType** (object): Details about the Instant Battle score source.
- **type** (string): The type of the competition.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, instant-battles, history, competitions, esports, leaderboards, matches, stats
