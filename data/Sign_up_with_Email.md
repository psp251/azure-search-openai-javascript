# Sign up with Email

**Group:** Auth

**Description:** Registers a new user with an email and password.

**Route:** /v2/client/auth/signup-email

**Method:** POST

## Parameters

- **email**: User's email address.
- **password**: Password for the account.
- **referralCode**: Referral code for sign-up (optional).
- **customParams**: Additional custom parameters for the user (optional).

## Examples

### Basic Email Registration

In this example, a new player registers with just their email and password to get started quickly in Arcadia Nexus.
Context for Arcadia Nexus:
For Arcadia Nexus, this represents a new player creating an account to begin their adventure in the metaverse. After successful registration, they'll receive their access token, which allows them to explore the different realms, create a character, and save their progress as they journey through the game. The basic registration process ensures a low barrier to entry, encouraging more players to join the Arcadia Nexus community.

#### Request

```
POST /v2/client/auth/signup-email
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "email": "player@example.com",
  "password": "SecurePassword123!"
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
  "status": "success",
  "code": 201,
  "message": "User Signed Up Successfully",
  "errors": [],
  "data": {
    "user": {
      "uuid": "12ba2768-f0e8-4c10-b067-428c5642d9fc",
      "id": "12ba2768-f0e8-4c10-b067-428c5642d9fc",
      "email": "player@example.com",
      "displayName": null,
      "firstName": null,
      "lastName": null,
      "hash": "#2093",
      "username": null,
      "birthdate": null,
      "thumbUrl": null,
      "meta": null,
      "tags": [],
      "linkedAccounts": [
        {
          "authProvider": "Custom",
          "userId": null
        },
        {
          "authProvider": "Google",
          "userId": null
        },
        {
          "authProvider": "Facebook",
          "userId": null
        }
      ],
      "isKycComplete": null,
      "playerData": {}
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMmJhMjc2OC1mMGU4LTRjMTAtYjA2Ny00MjhjNTY0MmQ5ZmMiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjMyODksImV4cCI6MTc0ODE1NTI4OX0.hPu2V3pnxseyla97uO5rICz9gR5J0_gq6da6sJrE3g8",
    "entityToken": "be104320b26897c7609875105e00d6ea",
    "createdAccount": true
  }
}
```

### Registration with Referral Code

In this example, a player registers with a referral code from an existing player, which might provide benefits to both the new player and the referrer.
Context for Arcadia Nexus:
For Arcadia Nexus, this represents a player who has been invited by an existing community member. The referral system encourages existing players to bring friends into the game by offering rewards to both parties. The new player might receive bonus Nexus Gems or special starter items, while the referrer could earn unique cosmetics or currency for successfully bringing new adventurers into the metaverse. This helps grow the player base through community connections.

#### Request

```
POST /v2/client/auth/signup-email
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "email": "newplayer@example.com",
  "password": "StrongPassword456!",
  "referralCode": "NEXUS-FRIEND-7591"
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
    "status": "success",
    "code": 201,
    "message": "User Signed Up Successfully",
    "errors": [],
    "data": {
        "user": {
            "uuid": "38ef7c21-a495-4d78-b913-56da42e8f01d",
            "id": "38ef7c21-a495-4d78-b913-56da42e8f01d",
            "email": "newplayer@example.com",
            "displayName": null,
            "firstName": null,
            "lastName": null,
            "hash": "#4781",
            "username": null,
            "birthdate": null,
            "thumbUrl": null,
            "meta": null,
            "tags": [],
            "linkedAccounts": [
                {
                    "authProvider": "Custom",
                    "userId": null
                },
                {
                    "authProvider": "Google",
                    "userId": null
                },
                {
                    "authProvider": "Facebook",
                    "userId": null
                }
            ],
            "isKycComplete": null,
            "playerData": {}
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzOGVmN2MyMS1hNDk1LTRkNzgtYjkxMy01NmRhNDJlOGYwMWQiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjM0NTIsImV4cCI6MTc0ODE1NTQ1Mn0.jF8XmqZ2c6K9sT5DfLp8v3YzP7rQkL9tM8Bn2GhV4wY",
        "entityToken": "a5c93b07e48d12f6350982c716fd3e47",
        "createdAccount": true
    }
}
```

### Registration with Custom Parameters

In this example, a player registers with additional custom parameters that provide extra context about their preferences and device information.
Context for Arcadia Nexus:
For Arcadia Nexus, this registration includes valuable information that helps personalize the player's experience from the start. The custom parameters indicate that the player is particularly interested in the Cyber District realm, so the game might prioritize content and quests from that area during onboarding. The marketing opt-in allows Arcadia Nexus to send notifications about special events and updates. The device information helps with troubleshooting and optimizing performance for that specific platform. All of this creates a more tailored experience that increases player satisfaction and retention.

#### Request

```
POST /v2/client/auth/signup-email
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "email": "adventurer@example.com",
  "password": "ComplexPassword789!",
  "customParams": {
    "preferredRealm": "cyber_district",
    "marketingOptIn": true,
    "platform": "mobile",
    "deviceModel": "iPhone 15 Pro",
    "operatingSystem": "iOS 18.2",
    "initialLanguage": "en"
  }
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
  "status": "success",
  "code": 201,
  "message": "User Signed Up Successfully",
  "errors": [],
  "data": {
    "user": {
      "uuid": "94a1d7b3-5c8e-42f6-9b50-3e17d8c24a09",
      "id": "94a1d7b3-5c8e-42f6-9b50-3e17d8c24a09",
      "email": "adventurer@example.com",
      "displayName": null,
      "firstName": null,
      "lastName": null,
      "hash": "#3567",
      "username": null,
      "birthdate": null,
      "thumbUrl": null,
      "meta": null,
      "tags": [],
      "linkedAccounts": [
        {
          "authProvider": "Custom",
          "userId": null
        },
        {
          "authProvider": "Google",
          "userId": null
        },
        {
          "authProvider": "Facebook",
          "userId": null
        }
      ],
      "isKycComplete": null,
      "playerData": {
        "preferredRealm": "cyber_district",
        "marketingOptIn": true,
        "platform": "mobile",
        "deviceModel": "iPhone 15 Pro",
        "operatingSystem": "iOS 18.2",
        "initialLanguage": "en"
      }
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NGExZDdiMy01YzhlLTQyZjYtOWI1MC0zZTE3ZDhjMjRhMDkiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjM2MTUsImV4cCI6MTc0ODE1NTYxNX0.Ks9JQzNdLm7MpRcV8gXt5oR2DfpLq3bHwYk9P2sR4jE",
    "entityToken": "7d9f2e3a1b8c5067f4e1d209a3c85b46",
    "createdAccount": true
  }
}
```

## Additional Information

Registers a new user account with an email address and password. This endpoint allows players to create an account in your game or application, establishing their identity and enabling them to access personalized features, save their progress, and engage with other players.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint accepts the following parameters in the request body.
Required Parameters

Parameter
Type
Description

email

 

 

string

 

 

User's email address.

 

 

password

 

 

string

 

 

Password for the account. Should follow security best practices (e.g., minimum length, complexity requirements).

 

 

Optional Parameters

Parameter
Type
Description

referralCode

 

 

string

 

 

Referral code provided by an existing user. Can be used for tracking referrals and providing rewards.

 

 

customParams

 

 

object

 

 

Additional custom parameters for the user, such as platform information, marketing preferences, or other user-specific data.

 

 

Response Details
Main Response Structure

Field
Type
Description

status

 

 

string

 

 

Indicates the success or failure of the API call.

 

 

code

 

 

integer

 

 

HTTP status code of the response.

 

 

message

 

 

string

 

 

A message detailing the result of the API call.

 

 

errors

 

 

array

 

 

An array of error messages, if any occurred.

 

 

data

 

 

object

 

 

Contains user information and authentication tokens.

 

 

Data Object Structure

Field
Type
Description

user

 

 

object

 

 

User details including UUID, ID, email, and other profile information.

 

 

accessToken

 

 

string

 

 

JWT token used for authenticating subsequent API requests.

 

 

entityToken

 

 

string

 

 

A secondary token that may be used for specific entity operations.

 

 

createdAccount

 

 

boolean

 

 

Indicates whether a new account was created (true) or an existing account was retrieved.

 

 

User Object Structure

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier for the user in UUID format.

 

 

id

 

 

string

 

 

Client-defined identifier for the user (usually matches the UUID).

 

 

email

 

 

string

 

 

User's email address.

 

 

displayName

 

 

string

 

 

User's display name (can be null if not provided).

 

 

firstName

 

 

string

 

 

User's first name (can be null if not provided).

 

 

lastName

 

 

string

 

 

User's last name (can be null if not provided).

 

 

hash

 

 

string

 

 

A unique discriminator that can be used alongside a username.

 

 

username

 

 

string

 

 

User's username (can be null if not provided).

 

 

birthdate

 

 

string

 

 

User's date of birth in ISO 8601 format (can be null if not provided).

 

 

thumbUrl

 

 

string

 

 

URL to the user's thumbnail or avatar (can be null if not provided).

 

 

meta

 

 

object

 

 

Additional metadata for the user (can be null).

 

 

tags

 

 

array

 

 

Array of tags associated with the user.

 

 

linkedAccounts

 

 

array

 

 

Array of authentication providers linked to this account.

 

 

isKycComplete

 

 

boolean

 

 

Indicates whether Know Your Customer verification is complete (can be null).

 

 

playerData

 

 

object

 

 

Custom player data associated with the user.

 

 

Notes

Email Verification: Depending on your app's configuration in the Specter dashboard, users may receive a verification email after registration.

Password Security: Passwords are securely hashed and stored. Neither the API nor the dashboard can retrieve the original password.

Access Token: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time. Use the Refresh Token endpoint to obtain a new token when needed.

Linked Accounts: The response includes placeholders for different authentication providers that can be linked to the account later.

Custom Parameters: The customParams field can be used to store additional registration information that isn't covered by the standard fields.

 
Integration Tips

User Onboarding: Design a smooth onboarding flow that guides new players through the initial steps after registration, such as character creation, tutorial, and basic game mechanics.

Email Verification: Consider implementing email verification to reduce fake accounts and improve security, especially if your game includes features like trading or chat.

Password Requirements: Communicate password requirements clearly to users before submission to reduce failed registration attempts.

Error Handling: Implement client-side validation and clear error messages, especially for common issues like already-registered emails or password complexity requirements.

Referral System: If using referral codes, create a visible and rewarding referral program that incentivizes players to invite friends.

Progressive Profiling: Instead of collecting all user information at signup, consider gathering additional profile details gradually as players engage with the game.

Welcome Communication: Send a welcome email or in-game message to new players with helpful tips and next steps to engage them immediately after registration.

The Sign up with Email endpoint is the gateway to your player's journey in Arcadia Nexus. By implementing a smooth, secure, and user-friendly registration process, you create a positive first impression that sets the stage for long-term player engagement across the diverse realms of your metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, signup, email, registration, credentials, account-creation, security, login, users
