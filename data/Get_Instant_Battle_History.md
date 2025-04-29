# Get Instant Battle History

**Group:** Player/Me

**Description:** Retrieves the player's history of instant battles.

**Route:** /v2/client/player/me/get-instant-battle-history

**Method:** POST

## Parameters

- **competitionIds**: An array of competition IDs to fetch instant battles.
- **scheduleStatuses**: An array of schedule statuses to filter instant battles
- **limit**: The maximum number of instant battles to return in the response.
- **offset**: The number of instant battles to skip for pagination.

## Attributes

- **match** (object): Details of the instant battle match.
- **config** (object): Configuration of the instant battle.
- **type** (string): Type of instant battle.
- **sourceType** (string): Source type for the battle data.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, instant-battles, history, competitions, rewards, matches, leaderboards, stats
