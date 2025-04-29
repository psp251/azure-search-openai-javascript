# Get Reward History

**Group:** Player/Others

**Description:** Fetches the reward history for a specified user, with filters for tasks, task groups, and competitions.

**Route:** /v2/client/player/get-reward-history

**Method:** POST

## Parameters

- **userId**: The ID of the target user.
- **taskIds**: Array of task IDs to filter the reward history.
- **taskGroupIds**: Array of task group IDs to filter the reward history.
- **levelIds**: Array of level IDs to filter the reward history.
- **leaderboardIds**: Array of leaderboard IDs to filter the reward history.
- **competitionIds**: Array of competition IDs to filter the reward history.
- **status**: Status filter for the reward history.
- **rewardGrant**: Specific reward grant type to filter by.
- **limit**: Pagination limit for the reward history results.
- **offset**: Pagination offset for the reward history results.

## Attributes

- **rewardDetails** (object): Details of rewards received

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, rewards, history, loot, grants, economy, progress, prizes
