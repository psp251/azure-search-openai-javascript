# Open Bundle

**Group:** Inventory

**Description:** Opens a specified bundle in the user's inventory.

**Route:** /v2/client/inventory/open-bundle

**Method:** POST

## Parameters

- **instanceId**: Instance ID of the bundle to be opened.
- **id**: Unique identifier for the bundle.
- **collectionId**: Collection ID if applicable.
- **stackId**: Stack ID associated with the bundle.
- **customParams**: Any additional custom parameters associated with the bundle.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

inventory, bundles, items, loot-box, player, economy, store, virtual-goods, unpacking
