# Default Purchase

**Group:** Stores

**Description:** Processes a default purchase with specified items and bundles from a store.

**Route:** /v2/client/stores/default-purchase

**Method:** POST

## Parameters

- **items**: List of items to be purchased.
- **bundles**: List of bundles to be purchased.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

purchase, default, store, items, bundles, monetization, transaction, currency, economy
