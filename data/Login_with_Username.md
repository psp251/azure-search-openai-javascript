# Login with Username

**Group:** Auth

**Description:** Authenticates a user using username and password.

**Route:** /v2/client/auth/login-username

**Method:** POST

## Parameters

- **username**: Username for the account.
- **password**: Password for the account.
- **createAccount**: Flag to create an account if it doesn't exist.
- **customParams**: Additional custom parameters for the user (optional).

## Additional Information

Authenticates a user using their username and password. This endpoint allows returning players to access their accounts, resume gameplay, and retrieve their personalized data and progress within the application using their unique username.
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

 

 

Username for the account.

 

 

password

 

 

string

 

 

Password for the account.

 

 

createAccount

 

 

boolean

 

 

If set to true, a new account will be created if the provided username doesn't exist in the system. If false, the login will fail for non-existent accounts.

 

 

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

 

 

User details including UUID, ID, username, and other profile information.

 

 

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

 

 

User's email address (typically null for username-based accounts).

 

 

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

Authentication Flow: This endpoint should be part of your regular authentication flow, allowing returning users to log in with their username and password.

Password Security: Passwords are never returned in the response. The system only validates if the provided password matches the stored hash.

Failed Login Attempts: Consider implementing rate limiting on the client side to prevent brute force attacks on user accounts.

Access Token Usage: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time (typically visible in the JWT payload). Use the Refresh Token endpoint to obtain a new token when needed.

Combined Registration/Login: The createAccount parameter allows this endpoint to function as both a login and registration endpoint, simplifying authentication flows for some applications.

Username Case Sensitivity: Be aware of the case sensitivity requirements for usernames in your application and communicate this clearly to users.

 
Integration Tips

Remember Me Functionality: Implement a "Remember Me" option that securely stores the refresh token (not the access token) for automatic re-authentication.

Username Recovery: Since these accounts may not have associated email addresses, consider implementing alternative account recovery methods, such as security questions or backup codes.

Username Case Handling: Be clear about whether usernames are case-sensitive during login, and consider implementing case-insensitive matching if appropriate for your user base.

Error Messaging: Provide clear, user-friendly error messages for common issues like incorrect passwords or non-existent usernames, without revealing whether a username exists in the system (to prevent enumeration attacks).

Login History: Consider tracking and displaying login history to users so they can verify recent account activity and detect any unauthorized access.

Device Management: Allow users to view and manage devices that have logged into their account, with the ability to revoke access to specific devices if needed.

Progressive Security: For accounts that gain substantial in-game value or currency, consider implementing additional security measures over time, such as two-factor authentication.

The Login with Username endpoint provides a familiar and gaming-friendly authentication method for Arcadia Nexus, allowing players to use their unique gaming identities to access their accounts across multiple sessions. By implementing secure and user-friendly login processes, you ensure that players can easily return to their adventures in the metaverse while maintaining their established personas.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, login, username, credentials, users, authentication, security, session, account
