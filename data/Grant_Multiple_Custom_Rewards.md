# Grant Multiple Custom Rewards

**Group:** Achievements

**Description:** Grants rewards directly without reference to a source. Supports batch operations for multiple reward types.

**Route:** /v2/client/achievements/grant-reward-batch

**Method:** POST

## Parameters

- **rewards**: Object containing rewards grouped by type.
- **bypassLockCondition**: Flag to bypass lock condition.
- **bypassLimitedEdition**: Flag to bypass limited edition restriction.
- **customParams**: Custom parameters for processing.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

achievements, rewards, multiple, batch, custom, loot, player, economy, progress, bulk
