# Change Password

**Group:** Account

**Description:** Allows the user to change their password by providing the current and new passwords.

**Route:** /v2/client/account/change-password

**Method:** POST

## Parameters

- **currentPassword**: The user's current password.
- **newPassword**: The new password the user wants to set.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

account, password, security, authentication, credentials, users, protection
