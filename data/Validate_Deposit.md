# Validate Deposit

**Group:** Real Money Gaming

**Description:** Validates a deposit transaction by checking deposit policies to ensure the deposit amount and currency are acceptable.

**Route:** /v2/client/rmg/validate-deposit

**Method:** POST

## Parameters

- **amount**: The deposit amount to be validated. Must be provided as an integer.
- **currencyId**: The identifier for the currency used in the deposit transaction. Must be provided as a string.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

validate deposit, deposit, validation, deposit policy, real money, gaming, transaction, rmg, cash, payment
