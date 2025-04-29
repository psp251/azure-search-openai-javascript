# Get Inventory

**Group:** Player/Others

**Description:** Retrieves the inventory of a specified user, with options for filtering, searching, and sorting.

**Route:** /v2/client/player/get-inventory

**Method:** POST

## Parameters

- **userId**: The ID of the target user.
- **offset**: Pagination offset for the inventory results.
- **limit**: Pagination limit for the inventory results.
- **search**: Search keyword to filter inventory items.
- **collectionId**: Filter inventory by a specific collection ID.
- **itemIds**: Array of specific item IDs to retrieve.
- **bundleIds**: Array of specific bundle IDs to retrieve.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, inventory, items, ownership, virtual-goods, search, pagination, customization
