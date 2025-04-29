# Login with Custom Id

**Group:** Auth

**Description:** Authenticates a user using a custom ID and optional parameters.

**Route:** /v2/client/auth/login-custom

**Method:** POST

## Parameters

- **customId**: Custom ID for the account.
- **createAccount**: Flag to create an account if it doesn't exist.
- **customParams**: Additional custom parameters for the user (optional).

## Additional Information

Authenticates a user using a custom identifier. This endpoint allows returning players who registered with a custom ID to access their accounts, resume gameplay, and retrieve their personalized data and progress within the application.
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

 

 

Custom identifier for the account.

 

 

createAccount

 

 

boolean

 

 

If set to true, a new account will be created if the provided custom ID doesn't exist in the system. If false, the login will fail for non-existent custom IDs.

 

 

Optional Parameters

Parameter
Type
Description

customParams

 

 

object

 

 

Additional custom parameters for the user, such as device information, login context, or other user-specific data.

 

 

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

 

 

Indicates whether a new account was created (true) or an existing account was accessed (false).

 

 

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

 

 

User's email address (typically null for custom ID-based accounts).

 

 

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

 

 

User's username (typically null for custom ID-based accounts).

 

 

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

Authentication Flow: This endpoint should be part of your regular authentication flow, allowing returning users to log in with their custom identifier.

Password-less Authentication: Unlike email and username login, custom ID login doesn't require a password. Authentication relies solely on the possession of the custom ID.

Access Token Usage: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time (typically visible in the JWT payload). Use the Refresh Token endpoint to obtain a new token when needed.

Combined Registration/Login: The createAccount parameter allows this endpoint to function as both a login and registration endpoint, simplifying authentication flows for some applications.

Security Considerations: Since custom ID authentication doesn't require a password, ensure that the custom ID itself is appropriately secured and not easily guessable.

Custom ID Persistence: For device-based custom IDs, implement appropriate storage mechanisms to ensure the ID persists across app reinstalls or device resets.

 
Integration Tips

Seamless Cross-Platform Play: Use custom ID login to allow players to move between different platforms while maintaining a single game identity and progression.

Device Recognition: For mobile applications, implement secure storage of the custom ID to enable automatic authentication when the app is reopened.

Guest-to-Permanent Conversion: Create smooth upgrade paths to convert guest accounts (using custom IDs) to permanent accounts with email or username authentication.

Fallback Authentication: Implement multiple authentication methods to provide backup options if one method fails (e.g., device ID changes).

Session Context: Use customParams to pass relevant information about the player's current context, enabling better person

Automatic Account Merging: When appropriate, offer to merge a custom ID account with other authentication methods if the same user creates multiple accounts.

Analytics Tracking: Use custom ID login patterns to understand player retention and return patterns across different platforms and device types.

The Login with Custom ID endpoint provides a flexible authentication method for Arcadia Nexus, especially valuable for platform integrations, guest accounts, or device-specific authentication flows. By implementing appropriate security measures and thoughtful UX around this authentication method, you can create seamless, low-friction experiences that maintain continuity across sessions while offering pathways to more robust account systems as player engagement deepens.alized data and progress within the application.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, login, custom-id, credentials, users, authentication, security, session, account
