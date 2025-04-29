# Get Leaderboard Rankings

**Group:** Leaderboards

**Description:** Retrieves ranking data for a specific leaderboard, filtered by attributes, with pagination options.

**Route:** /v2/client/leaderboards/get-rankings

**Method:** POST

## Parameters

- **leaderboardId**: The unique identifier for the leaderboard to retrieve rankings from.
- **instanceId**: The unique instance identifier for the leaderboard session.
- **limit**: Pagination limit for the number of rankings to retrieve.
- **offset**: Pagination offset for rankings.

## Attributes

- **rankings** (array): Array of participant ranks, scores, and positions within the leaderboard.
- **totalRanks** (number): Total number of ranks in the leaderboard, indicating participant count.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

leaderboards, ranking, filters, pagination, scores, player, competitions, standings, stats
