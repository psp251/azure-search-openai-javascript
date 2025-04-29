# Get Player Wallet Balance

**Group:** Player/Others

**Description:** Retrieves the balance of the player's wallet with options for pagination and sorting.

**Route:** /v2/client/player/get-wallet-balance

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user whose wallet balance is being retrieved.
- **offset**: Pagination offset for results, if applicable.
- **limit**: Pagination limit for results, if applicable.
- **currencyIds**: Filter to retrieve balances for specific currencies.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, wallet, balance, economy, credits, virtual-currency, finance, transactions
