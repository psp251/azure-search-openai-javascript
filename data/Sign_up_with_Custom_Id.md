# Sign up with Custom Id

**Group:** Auth

**Description:** Registers a new user with a custom ID.

**Route:** /v2/client/auth/signup-custom

**Method:** POST

## Parameters

- **customId**: Custom ID for the account.
- **referralCode**: Referral code for sign-up (optional).
- **customParams**: Additional custom parameters for the user (optional).

## Additional Information

Registers a new user account with a custom identifier. This endpoint is particularly useful for integrating external authentication systems, creating accounts based on platform-specific identifiers, or implementing custom authentication flows that don't require email addresses or usernames.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint accepts the following parameters in the request body.
Required Parameters

Parameter
Type
Description

customId

 

 

string

 

 

Custom identifier for the account. Should be unique across all users.

 

 

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

 

 

User details including UUID, ID, and other profile information.

 

 

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

 

 

User's email address (null when signing up with custom ID).

 

 

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

 

 

User's username (null when signing up with custom ID).

 

 

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

 

 

Array of authentication providers linked to this account. Contains the custom ID under the Custom authProvider.

 

 

isKycComplete

 

 

boolean

 

 

Indicates whether Know Your Customer verification is complete (can be null).

 

 

playerData

 

 

object

 

 

Custom player data associated with the user.

 

 

Notes

Custom ID Format: The custom ID can be any unique string. Common formats include device IDs, third-party platform user IDs, or proprietary identification systems.

Security Considerations: Custom IDs should be appropriately secured, especially if they're derived from external sources. Consider hashing or encrypting sensitive identifiers before using them as custom IDs.

Password-less Authentication: Unlike email and username registration, custom ID registration doesn't require a password. Authentication relies solely on the possession of the custom ID.

Access Token: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time. Use the Refresh Token endpoint to obtain a new token when needed.

Linked Accounts: The custom ID is stored in the linkedAccounts array under the "Custom" authProvider.

Profile Completion: Since this method provides minimal user information, consider implementing steps to collect additional profile data after registration.

 

Context for Arcadia Nexus:
For Arcadia Nexus, this represents a specialized onboarding flow for players recruited through in-person events or promotional campaigns. The custom ID is generated as a guest account (timestamped for uniqueness), while the referral code tracks that they were invited by a Realm Ambassador, a player who promotes the game at events. The custom parameters indicate that they joined via a QR code at an event and have expressed interest in exploring the Fire Realm. This contextual information allows the game to customize their initial experience, perhaps by starting them in the Fire Realm with a special welcome message from their referrer. The game can also track conversion metrics to measure the effectiveness of different recruitment channels and referral programs.
Integration Tips

Anonymous Gameplay: Use custom IDs to enable anonymous "try before you sign up" experiences, allowing players to engage with your game without commitment.

Platform Integration: Leverage existing player identities from platforms like Steam, Epic Games, Apple Game Center, or Google Play Games to reduce sign-up friction.

Device Synchronization: For multi-device users, consider implementing a system to link custom ID accounts across devices later in the user journey.

Progressive Identity: Start with a custom ID for quick access, then encourage users to upgrade to email or username accounts for additional features and security.

Conversion Tracking: Use custom parameters to track which channels or campaigns lead to successful player acquisition and retention.

Automatic Account Merging: Implement systems to detect and offer merging when a player creates an email/username account after previously playing with a custom ID.

Privacy Considerations: If using device IDs or other potentially identifiable information, ensure compliance with privacy regulations and implement appropriate data protection measures.

The Sign up with Custom ID endpoint provides a flexible foundation for implementing various authentication strategies in Arcadia Nexus, particularly those that prioritize low-friction onboarding, platform integrations, or anonymous play. By thoughtfully implementing custom ID registration, you can create personalized entry points that cater to different player preferences and acquisition channels, while maintaining the ability to build more robust user profiles over time.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, signup, custom-id, registration, credentials, account-creation, security, login, users
