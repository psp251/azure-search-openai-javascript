# Create Order

**Group:** Real Money Gaming

**Description:** Creates a new order for a real money gaming transaction using the provided amount, currency, and payment gateway name.

**Route:** /v2/client/rmg/create-order

**Method:** POST

## Parameters

- **amount**: The order amount to be processed. Must be provided as an integer.
- **currencyId**: The identifier for the currency used in the order. Must be provided as a string.
- **gatewayName**: The name of the external payment gateway to be used for processing the order.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

create order, order, rmg, real money, transaction, payment, gateway
