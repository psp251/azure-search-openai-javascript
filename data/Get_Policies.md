# Get Policies

**Group:** Real Money Gaming

**Description:** Fetches policies for a given RMG currency, covering all wallet types such as deposit, withdrawal, bonus wallets, as well as additional policies like taxation and priority.

**Route:** /v2/client/rmg/get-policy

**Method:** POST

## Parameters

- **currencyId**: The identifier of the RMG currency for which the policies will be fetched.
- **entityType**: Optional type of entity to filter policies (e.g., deposit, withdrawal, bonus).
- **entitySubType**: Optional subtype for further filtering policies if required.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

rmg, policy, wallet, deposit, withdrawal, bonus, taxation, priority, configuration, real money, GST, TDS, VAT
