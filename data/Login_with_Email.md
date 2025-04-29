# Login with Email

**Group:** Auth

**Description:** Authenticates a user using email and password.

**Route:** /v2/client/auth/login-email

**Method:** POST

## Parameters

- **email**: User's email address.
- **password**: Password for the account.
- **createAccount**: Flag to create an account if it doesn't exist.
- **customParams**: Additional custom parameters for the user (optional).

## Additional Information

Authenticates a user using their email address and password. This endpoint allows returning players to access their accounts, resume gameplay, and retrieve their personalized data and progress within the application.
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

 

 

Password for the account.

 

 

createAccount

 

 

boolean

 

 

If set to true, a new account will be created if the provided email doesn't exist in the system. If false, the login will fail for non-existent accounts.

 

 

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

 

 

User details including UUID, ID, email, and other profile information.

 

 

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

Authentication Flow: This endpoint should be part of your regular authentication flow, allowing returning users to log in with their credentials.

Password Security: Passwords are never returned in the response. The system only validates if the provided password matches the stored hash.

Failed Login Attempts: Consider implementing rate limiting on the client side to prevent brute force attacks on user accounts.

Access Token Usage: The access token returned in the response should be stored securely and included in the Authorization header for subsequent API calls.

Token Expiration: The access token has an expiration time (typically visible in the JWT payload). Use the Refresh Token endpoint to obtain a new token when needed.

Combined Registration/Login: The createAccount parameter allows this endpoint to function as both a login and registration endpoint, simplifying authentication flows for some applications.

Session Management: Consider implementing proper session management on the client side, including secure token storage and automatic token refresh.

Integration Tips

Remember Me Functionality: Implement a "Remember Me" option that securely stores the refresh token (not the access token) for automatic re-authentication.

Seamless Experience: Minimize the need for repeated logins by implementing proper token management and refresh mechanisms.

Cross-Device Support: Design your authentication flow to work smoothly across different devices, allowing players to continue their adventure from any platform.

Error Messaging: Provide clear, user-friendly error messages for common issues like incorrect passwords or unverified email addresses.

Security Enhancements: Consider implementing additional security features like two-factor authentication for high-value accounts or transactions.

Login Analytics: Track login patterns to detect potential security issues and understand player engagement cycles.

Automatic Retry: If a login fails due to network issues, implement automatic retry logic with appropriate backoff to improve the user experience in unreliable network conditions.

The Login with Email endpoint is a critical gateway for returning players to re-enter the world of Arcadia Nexus. By implementing a secure, reliable, and user-friendly login process, you ensure that players can easily return to their adventures across the multiple realms of the metaverse, maintaining engagement and player retention over time.

 

## Required Headers

- **api-key**: The environment-specific API key

## Tags

auth, login, email, credentials, users, authentication, security, session, account
