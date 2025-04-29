# Sign up with Username

**Group:** Auth

**Description:** Registers a new user with a username and password.

**Route:** /v2/client/auth/signup-username

**Method:** POST

## Parameters

- **username**: Username for the account.
- **password**: Password for the account.
- **referralCode**: Referral code for sign-up (optional).
- **customParams**: Additional custom parameters for the user (optional).

## Examples

### Basic Username Registration

In this example, a new player registers with just a username and password to get started quickly in Arcadia Nexus.
Context for Arcadia Nexus:
For Arcadia Nexus, this represents a new player creating an account using a gaming handle that reflects their intended character persona. The username "FireWalker" suggests an affinity for the Realm of Fire and creates an immediate identity within the game world. This registration method is popular among players who prefer to maintain anonymity while establishing a recognizable presence in the game. After successful registration, they'll receive their access token, which allows them to begin their adventure in the metaverse using their chosen identity.

#### Request

```
POST /v2/client/auth/signup-username
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}



Body: {
  "username": "FireWalker",
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
      "uuid": "950ef24f-f93a-4001-a6ae-c11c9c48a60f",
      "id": "950ef24f-f93a-4001-a6ae-c11c9c48a60f",
      "email": null,
      "displayName": null,
      "firstName": null,
      "lastName": null,
      "hash": "#198",
      "username": "FireWalker",
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTBlZjI0Zi1mOTNhLTQwMDEtYTZhZS1jMTFjOWM0OGE2MGYiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjQzMDEsImV4cCI6MTc0ODE1NjMwMX0.ggEJ4_IBjkxHbYgMunF8wcXHXNDOpkGD9e55xt4cscs",
    "entityToken": "20bcf7ba57a2c36f9758c94df92546d5",
    "createdAccount": true
  }
}
```

### Registration with Referral Code

In this example, a player registers with a username and includes a referral code from an existing player, which might provide benefits to both the new player and the referrer.
Context for Arcadia Nexus:
For Arcadia Nexus, this represents a player who has been invited by an existing community member. By choosing the username "ForestGuardian," they signal their interest in the Forest of Whispers realm. The referral system encourages existing players to bring friends into the game by offering rewards to both parties. The new player might receive a special Forest-themed starter pack with unique items useful in their preferred realm, while the referrer could earn Whisper Seeds or special permissions within the Forest realm. This strengthens community bonds while helping new players find their place in the vast Arcadia Nexus world.

#### Request

```
POST /v2/client/auth/signup-username
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "username": "ForestGuardian",
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
      "uuid": "a67b8c90-d12e-4f34-5678-9012g3h4i56j",
      "id": "a67b8c90-d12e-4f34-5678-9012g3h4i56j",
      "email": null,
      "displayName": null,
      "firstName": null,
      "lastName": null,
      "hash": "#427",
      "username": "ForestGuardian",
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNjdiOGM5MC1kMTJlLTRmMzQtNTY3OC05MDEyZzNoNGk1NmoiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjQ1MTIsImV4cCI6MTc0ODE1NjUxMn0.Abc1Def2Ghi3Jkl4Mno5Pqr6Stu7Vwx8Yz91Ab2Cd3",
    "entityToken": "b6c7d8e9f0a1b2c3d4e5f6g7h8i9j0k1",
    "createdAccount": true
  }
}
```

### Registration with Custom Parameters

In this example, a player registers with a username and includes additional custom parameters that provide extra context about their preferences and playing style.
Context for Arcadia Nexus:
For Arcadia Nexus, this registration includes valuable information that helps personalize the player's experience from the start. The username "CyberHunter42" immediately places them in the cyber-punk aesthetic of the Cyber District realm. The custom parameters indicate not only their preferred realm but also their desired playstyle (stealth) and difficulty level (expert), allowing the game to tailor challenges appropriately. Their gaming history suggests experience with similar games, which might influence tutorial recommendations or initial gameplay tips. All of this creates a more tailored experience that increases player satisfaction and retention, making them feel like the game understands their preferences from the moment they first log in.

#### Request

```
POST /v2/client/auth/signup-username
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}


Body: {
  "username": "CyberHunter42",
  "password": "ComplexPassword789!",
  "customParams": {
    "preferredRealm": "cyber_district",
    "playstyle": "stealth",
    "difficulty": "expert",
    "marketingOptIn": true,
    "platform": "pc",
    "previousGames": ["NeonShadows", "QuantumBreak", "CyberDrift"]
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
      "uuid": "c7d8e9f0-a1b2-3c4d-e5f6-7g8h9i0j1k2l",
      "id": "c7d8e9f0-a1b2-3c4d-e5f6-7g8h9i0j1k2l",
      "email": null,
      "displayName": null,
      "firstName": null,
      "lastName": null,
      "hash": "#631",
      "username": "CyberHunter42",
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
        "playstyle": "stealth",
        "difficulty": "expert",
        "marketingOptIn": true,
        "platform": "pc",
        "previousGames": ["NeonShadows", "QuantumBreak", "CyberDrift"]
      }
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjN2Q4ZTlmMC1hMWIyLTNjNGQtZTVmNi03ZzhoOWkwajFrMmwiLCJwcm9qZWN0SWQiOiIwNDUzYzk2Zi0yMmQ4LTQwNmYtYTk0Yi1lYjQzZWRiZWE2ZWEiLCJpYXQiOjE3NDU1NjQ2MzIsImV4cCI6MTc0ODE1NjYzMn0.Lmn3Opq7Rst8Uvw9Xyz1Abc2Def3Ghi4Jkl5Mnop6Q",
    "entityToken": "d8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m3",
    "createdAccount": true
  }
}
```

## Additional Information

Registers a new user account with a username and password. This endpoint allows players to create an account using a username rather than an email address, which can be preferable for gaming applications where users may want to maintain anonymity or use a gaming handle.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint accepts the following parameters in the request body.
Required Parameters

Parameter
Type
Description

username

 

 

string

 

 

Username for the account. Should be unique across all users.

 

 

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

 

 

User details including UUID, ID, username, and other profile information.

 

 

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

 

 

User's email address (null when signing up with username).

 

 

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

 

 

User's username as provided during signup.

 

 

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

Username Requirements: Usernames are unique within your application. Consider implementing client-side validation for username format and availability.

Password Security: Passwords are securely hashed and stored. Neither the API nor the dashboard can retrieve the original password.

Access Token: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time. Use the Refresh Token endpoint to obtain a new token when needed.

Email vs. Username: This endpoint creates accounts without email addresses. If email communication is important for your application, consider using the Sign up with Email endpoint instead, or collect email information in a separate step.

Custom Parameters: The customParams field can be used to store additional registration information that isn't covered by the standard fields.

Integration Tips

Username Availability Check: Implement a real-time username availability checker before submission to reduce failed registration attempts.

Username Guidelines: Clearly communicate username requirements and restrictions (length, allowed characters, prohibited terms) to users before they attempt to register.

Anonymous Registration Flow: Consider allowing users to start playing with a temporary username and then choose a permanent one after experiencing some gameplay.

Username Recovery: Since email is not collected with this method, implement robust username recovery options in case users forget their credentials.

Display Name vs. Username: Consider allowing users to have both a unique username (for login) and a separate display name (for social interactions) that can be changed more freely.

Profile Completion: Encourage users to complete their profiles with additional information after registration through in-game incentives.

Identity Verification: For games with chat features or player-to-player interactions, consider implementing additional verification steps to prevent abuse while preserving anonymity.

The Sign up with Username endpoint provides a gaming-friendly approach to registration in Arcadia Nexus, allowing players to create identities that match their in-game personas without necessarily sharing personal information like email addresses. This approach can lower the barrier to entry while still establishing a unique identity for each player in your metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, signup, username, registration, credentials, account-creation, security, login, users
