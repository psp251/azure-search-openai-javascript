# Update Account

**Group:** Account

**Description:** Updates information for an existing linked account, allowing for account type adjustments or re-linking.

**Route:** /v2/client/account/update

**Method:** POST

## Parameters

- **type**: Specifies the type of account to update, such as a custom ID, Google, or Facebook account.
- **id**: The unique identifier of the account to be updated, specific to the account type.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

account, linking, re-linking, profile, authentication, update, credentials, users
