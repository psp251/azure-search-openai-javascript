# Force Complete Task

**Group:** Achievements

**Description:** Forces the completion of a specified task, with an option to retrieve reward data in the response.

**Route:** /v2/client/achievements/force-complete

**Method:** POST

## Parameters

- **taskIds**: Array containing a single task ID to force completion. Must contain exactly one ID.
- **getRewardDataInResponse**: Flag to include reward data in the response if set to true.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

achievements, tasks, force-complete, rewards, player, progress, objectives, admin, debug
