# Unlink Account

**Group:** Account

**Description:** Removes a linked account from a user's profile based on the specified account type.

**Route:** /v2/client/account/unlink

**Method:** POST

## Parameters

- **type**: Specifies the type of account to unlink, such as a custom ID, Google, or Facebook account.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

account, unlink, authentication, users, removal, security, social
