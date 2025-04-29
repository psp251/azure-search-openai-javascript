# Add in Inventory

**Group:** Inventory

**Description:** Adds specified items or bundles to the user's inventory.

**Route:** /v2/client/inventory/add

**Method:** POST

## Parameters

- **items**: Array of items to be added to the inventory.
- **bundles**: Array of bundles to be added to the inventory.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

inventory, add-items, virtual-goods, bundles, player, economy, store, collections, items
