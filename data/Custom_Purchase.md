# Custom Purchase

**Group:** Stores

**Description:** Processes a custom purchase with specified items and bundles, allowing custom pricing.

**Route:** /v2/client/stores/custom-purchase

**Method:** POST

## Parameters

- **items**: List of items to be purchased with specified pricing.
- **bundles**: List of bundles to be purchased with specified pricing.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

purchase, custom, store, items, bundles, monetization, transaction, currency, economy
