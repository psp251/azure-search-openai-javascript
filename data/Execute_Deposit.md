# Execute Deposit

**Group:** Real Money Gaming

**Description:** Processes a deposit transaction by executing the deposit with the provided amount, currency, and external payment reference.

**Route:** /v2/client/rmg/execute-deposit

**Method:** POST

## Parameters

- **amount**: The deposit amount to be processed. Must be provided as an integer.
- **currencyId**: The identifier for the currency used in the deposit transaction. Must be provided as a string.
- **referenceId**: The unique reference identifier received from the external payment gateway when an order is placed.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

execute deposit, deposit, transaction, real money, gaming, payment, cash, rmg, execute, reference
