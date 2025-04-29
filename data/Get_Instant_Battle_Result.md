# Get Instant Battle Result

**Group:** Competitions

**Description:** Retrieves the results of an Instant Battle for a specified competition and entry ID, with optional attributes and pagination options.

**Route:** /v2/client/competitions/get-instantbattle-results

**Method:** POST

## Parameters

- **competitionId**: The unique identifier for the instant battle competition.
- **entryId**: The unique identifier of the entry in the instant battle.
- **offset**: Pagination offset for the results.
- **limit**: Pagination limit for the number of results to retrieve.

## Attributes

- **rankings** (array): Array of participant ranks, scores, and positions within the instant battle.
- **totalRanks** (number): Total number of ranks in the instant battle

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competitions, instant-battle, results, leaderboards, filters, pagination, player, scores, esports
