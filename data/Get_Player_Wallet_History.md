# Get Player Wallet History

**Group:** Player/Others

**Description:** Retrieves the transaction history for the player's wallet.

**Route:** /v2/client/player/get-wallet-history

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, wallet, transactions, history, economy, purchases, credits, virtual-currency
