# Get Match History

**Group:** Player/Me

**Description:** Fetches the match history of the player.

**Route:** /v2/client/player/me/get-match-history

**Method:** POST

## Parameters

- **matchSessionId**: The ID of the match session to fetch.
- **limit**: The maximum number of matches to return in the response.
- **offset**: The number of matches to skip for pagination.

## Attributes

- **competition** (object): Details of competitions in match history.
- **playerDetails** (object): Details of player in matches.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, matches, history, scores, competitions, leaderboards, performance, stats
