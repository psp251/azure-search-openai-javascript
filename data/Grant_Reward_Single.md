# Grant Reward Single

**Group:** Achievements

**Description:** Grants a single reward directly for simpler use cases.

**Route:** /v2/client/achievements/grant-reward-single

**Method:** POST

## Parameters

- **type**: Type of the reward (e.g., item, bundle).
- **id**: Unique identifier of the reward.
- **amount**: Quantity of the reward to grant.
- **bypassLockCondition**: Flag to bypass lock condition.
- **bypassLimitedEdition**: Flag to bypass limited edition restriction.
- **customParams**: Custom parameters for processing.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

achievements, rewards, single-reward, loot, player, economy, progress, grant, manual
