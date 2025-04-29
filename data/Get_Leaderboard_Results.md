# Get Leaderboard Results

**Group:** Leaderboards

**Description:** Fetches results from a specific leaderboard, with options to filter by attributes and paginate results.

**Route:** /v2/client/leaderboards/get-results

**Method:** POST

## Parameters

- **leaderboardId**: The unique identifier for the leaderboard to retrieve results from.
- **instanceId**: The unique instance identifier for the leaderboard session.
- **limit**: Pagination limit for the number of results to retrieve.
- **offset**: Pagination offset for results.

## Attributes

- **rankings** (array): Array of participant ranks, scores, and positions within the leaderboard.
- **totalRanks** (number): Total number of ranks in the leaderboard, indicating participant count.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

leaderboards, results, filters, pagination, scores, player, competitions, stats, history
