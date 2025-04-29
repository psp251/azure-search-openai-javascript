# Get Match Session Details

**Group:** Matches

**Description:** Retrieves details for specific match sessions or, if no match session IDs are specified, returns match sessions filtered by competition IDs, game IDs, match IDs, or a combination of these filters. Supports optional pagination.

**Route:** /v2/client/matches/get-session-details

**Method:** POST

## Parameters

- **matchSessionIds**: Array of match session IDs to retrieve specific match session details. If provided, other filters are ignored.
- **competitionIds**: Array of competition IDs to filter match sessions by competition.
- **matchIds**: Array of match IDs to filter match sessions by specific matches.
- **gameIds**: Array of game IDs to filter match sessions by specific games.
- **offset**: Pagination offset for the query to skip a specified number of results.
- **limit**: Pagination limit for the number of match session details to retrieve.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

matches, session-details, multiplayer, participants, scores, leaderboards, competitions, history
