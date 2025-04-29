# Get Player Match History

**Group:** Player/Others

**Description:** Retrieves the player's match history, with optional attribute filtering.

**Route:** /v2/client/player/get-match-history

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **attributes**: Optional attributes to include in the match history.
- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.

## Attributes

- **competition** (object): Details of competitions in match history.
- **playerDetails** (object): Details about the participants in the match history

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, matches, history, scores, leaderboards, competitions, performance, stats
