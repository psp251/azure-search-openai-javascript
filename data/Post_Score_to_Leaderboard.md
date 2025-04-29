# Post Score to Leaderboard

**Group:** Leaderboards

**Description:** Submits a score to multiple leaderboards for a specified competition slot and leaderboard IDs.

**Route:** /v2/client/leaderboards/post-score

**Method:** POST

## Parameters

- **leaderboardIds**: Array of leaderboard IDs where the score will be posted.
- **score**: The score to submit to the leaderboard(s).

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

leaderboards, score-submission, player, ranking, competitions, matches, points, standings, progress
