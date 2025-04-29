# Get Wallet Balance

**Group:** Player/Me

**Description:** Retrieves the current balance in the player's wallet.

**Route:** /v2/client/player/me/get-wallet-balance

**Method:** POST

## Parameters

- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.
- **currencyIds**: Filter to fetch balances of specific currencies.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, wallet, balance, currencies, economy, credits, virtual-currency, finance
