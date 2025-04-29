# Get Tournament Ranking

**Group:** Competitions

**Description:** Fetches the ranking data for a tournament, filtered by competition ID and optional attributes, with pagination options.

**Route:** /v2/client/competitions/get-tournament-rankings

**Method:** POST

## Parameters

- **competitionId**: The unique identifier for the tournament competition.
- **instanceId**: The unique instance identifier for the tournament.
- **offset**: Pagination offset for the results.
- **limit**: Pagination limit for the number of results to retrieve.

## Attributes

- **rankings** (array): Array of participant ranks, scores, and positions within the tournament leaderboard.
- **totalRanks** (number): Total number of ranks in the tournament leaderboard, showing the number of participants ranked.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competitions, tournaments, ranking, leaderboards, filters, pagination, scores, esports, player
