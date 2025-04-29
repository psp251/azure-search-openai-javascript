# Consume Item from Inventory

**Group:** Inventory

**Description:** Consumes specified items from the user's inventory, reducing their amount.

**Route:** /v2/client/inventory/consume-item

**Method:** POST

## Parameters

- **items**: Array of items to be consumed from the inventory.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

inventory, consume-items, virtual-goods, player, economy, store, consumables, usage
