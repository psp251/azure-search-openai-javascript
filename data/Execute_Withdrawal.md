# Execute Withdrawal

**Group:** Real Money Gaming

**Description:** Processes a withdrawal transaction by executing the withdrawal with the provided amount, currency, optional wallet type, and external payment reference.

**Route:** /v2/client/rmg/execute-withdrawal

**Method:** POST

## Parameters

- **amount**: The withdrawal amount to be processed. Must be provided as an integer.
- **currencyId**: The identifier for the currency used in the withdrawal transaction. Must be provided as a string.
- **walletType**: Optional wallet type for the withdrawal. Allowed value: 'deposit'.
- **referenceId**: The unique reference identifier received from the external payment gateway when a withdrawal order is placed.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

execute withdrawal, withdrawal, transaction, real money, gaming, payment, cash, rmg, wallet, execute, reference
