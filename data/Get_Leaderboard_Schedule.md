# Get Leaderboard Schedule

**Group:** Live Ops

**Description:** Fetches the schedule history for specified leaderboards, with optional pagination.

**Route:** /v2/client/liveops/get-leaderboard-schedule-history

**Method:** POST

## Parameters

- **leaderboardIds**: Array of leaderboard IDs for which to retrieve schedule history.
- **limit**: Pagination limit for the number of results to retrieve.
- **offset**: Pagination offset for the results.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

liveops, leaderboards, schedule, history, timing, events, rotation, competitive-play, time-window
