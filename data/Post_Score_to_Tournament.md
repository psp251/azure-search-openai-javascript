# Post Score to Tournament

**Group:** Competitions

**Description:** Submits a score to a tournament for a specified entry and competition ID.

**Route:** /v2/client/competitions/post-score-to-tournament

**Method:** POST

## Parameters

- **competitionId**: The unique identifier of the competition (optional).
- **entryId**: The unique identifier of the entry to which the score belongs.
- **score**: The score to submit for the entry.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competitions, tournaments, score, ranking, leaderboards, submission, player, progress, esports
