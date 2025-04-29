# Get Competition Entries

**Group:** Competitions

**Description:** Fetches entries for specific competitions, with options to filter by competition IDs, format types, match IDs, game IDs, and attributes.

**Route:** /v2/client/competition/get-entries

**Method:** POST

## Parameters

- **competitionIds**: Array of competition IDs to filter entries.
- **formatTypes**: Array of format types to filter entries.
- **matchIds**: Array of match IDs to filter entries.
- **gameIds**: Array of game IDs to filter entries.
- **offset**: Pagination offset for results.
- **limit**: Pagination limit for the number of results to retrieve.
- **instanceId**: InstanceId of competition to filter entries.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competitions, entries, match-ids, game-ids, leaderboards, filters, participants, ranking, stats
