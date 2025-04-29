# Validate Withdrawal

**Group:** Real Money Gaming

**Description:** Validates a withdrawal transaction by checking withdrawal policies to ensure the amount, currency, and wallet type (if provided) are acceptable.

**Route:** /v2/client/rmg/validate-withdrawal

**Method:** POST

## Parameters

- **amount**: The withdrawal amount to be validated. Must be provided as an integer.
- **currencyId**: The identifier for the currency used in the withdrawal transaction. Must be provided as a string.
- **walletType**: Optional wallet type for the withdrawal. Allowed value: 'deposit'.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

validate withdrawal, withdrawal, transaction, real money, gaming, payment, cash, rmg, wallet, validation
