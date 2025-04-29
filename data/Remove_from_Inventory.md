# Remove from Inventory

**Group:** Inventory

**Description:** Removes specified items or bundles from the user's inventory.

**Route:** /v2/client/inventory/remove

**Method:** POST

## Parameters

- **items**: Array of items to be removed from the inventory.
- **bundles**: Array of bundles to be removed from the inventory.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

inventory, remove-items, virtual-goods, bundles, player, economy, store, consumables, items
