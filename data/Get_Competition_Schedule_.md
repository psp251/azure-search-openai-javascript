# Get Competition Schedule

**Group:** Live Ops

**Description:** Retrieves the schedule history for specified competitions, with optional pagination.

**Route:** /v2/client/liveops/get-competition-schedule-history

**Method:** POST

## Parameters

- **competitionIds**: Array of competition IDs for which to retrieve schedule history.
- **limit**: Pagination limit for the number of results to retrieve.
- **offset**: Pagination offset for the results.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

liveops, competitions, schedule, history, timing, events, rotation, esports, time-window
