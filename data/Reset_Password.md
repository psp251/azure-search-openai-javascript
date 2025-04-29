# Reset Password

**Group:** Account

**Description:** Allows the user to reset their password using a reset token.

**Route:** /v2/client/account/reset-password

**Method:** POST

## Parameters

- **id**: User's identifier, either email or username, depending on the 'type' provided.
- **type**: Specifies if 'id' refers to an email or username.
- **resetPasswordToken**: The token provided to the user for resetting their password.
- **password**: The new password the user wants to set.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

account, password, security, authentication, credentials, reset, users, recovery
