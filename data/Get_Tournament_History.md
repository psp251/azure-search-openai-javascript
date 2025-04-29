# Get Tournament History

**Group:** Player/Others

**Description:** Fetches tournament history of another player.

**Route:** /v2/client/player/get-tournament-history

**Method:** POST

## Parameters

- **userId**: ID of the player to retrieve tournament history for.
- **competitionIds**: An array of competition IDs to fetch tournaments.
- **scheduleStatuses**: An array of schedule statuses to filter tournaments.
- **limit**: The maximum number of tournaments to return in the response.
- **offset**: The number of tournaments to skip for pagination.

## Attributes

- **match** (object): Info about the match that the tournament is created around
- **sourceType** (object): The source of the tournament's scores
- **config** (object): The configuration of the tournament
- **rankingMethod** (object): The ranching mechanism for the tournament
- **type** (string): Type of the competition

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, tournaments, competitions, history, leaderboards, stats, esports
