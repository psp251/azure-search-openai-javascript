# Link Account

**Group:** Account

**Description:** Links a new account to a user's profile, allowing the user to log in through various providers.

**Route:** /v2/client/account/link

**Method:** POST

## Parameters

- **type**: Specifies the type of account to link, such as a custom ID, Google, or Facebook account.
- **id**: The unique identifier of the account to be linked, specific to the account type

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

account, linking, authentication, users, merge, credentials, social
