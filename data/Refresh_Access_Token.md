# Refresh Access Token

**Group:** Auth

**Description:** Refreshes an access token using an entity token and an expiring token.

**Route:** /v2/client/auth/refresh-token

**Method:** POST

## Parameters

- **entityToken**: Token identifying the entity.
- **expiringAccessToken**: The access token that is about to expire.

## Additional Information

Refreshes an access token using an entity token and an expiring token. This endpoint allows applications to obtain a new access token before the current one expires, ensuring uninterrupted API access without requiring the user to re-authenticate.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
This endpoint accepts the following parameters in the request body.
Required Parameters

Parameter
Type
Description

entityToken

 

 

string

 

 

Token identifying the entity. This is provided during authentication and is required for token refresh.

 

 

expiringAccessToken

 

 

string

 

 

The access token that is about to expire. This is the current JWT token that will be replaced with a new one.

 

 

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

 

 

string

 

 

The new access token as a JWT string.

 

 

Notes

Token Refresh Strategy: Implement token refresh before the current token expires to ensure continuous access. The Validate Token endpoint can be used to check the expiration time.

Security Considerations: This endpoint requires the API key and the player's session token in the headers for security purposes.

Error Handling: If the refresh fails, your application should redirect the user to re-authenticate.

Background Refresh: Consider implementing token refresh in the background to avoid disrupting the user experience.

Token Storage: Store the new token securely, replacing the old one in your storage mechanism.

Entity Token: The entity token is typically more long-lived than the access token and acts as a form of refresh token in this system.

 
Integration Tips

Proactive Refresh: Instead of waiting until a token is nearly expired, consider refreshing tokens after a certain percentage (e.g., 75%) of their lifetime has elapsed.

Failure Handling: Implement robust error handling for token refresh failures, including graceful authentication redirects that preserve the user's context.

Background Processing: Perform token refreshes during natural pauses in gameplay or application use to minimize user impact.

Refresh Queuing: Implement a system to queue and deduplicate multiple refresh requests that might occur close together.

Token Validation: Before attempting a refresh, validate the current token to confirm it's still valid but approaching expiration.

Analytics: Consider tracking token refresh patterns to optimize your refresh strategy and detect potential security anomalies.

Offline Handling: For mobile applications, queue refresh requests that fail due to connectivity issues and retry when connection is restored.

The Refresh Access Token endpoint is a crucial component of a robust authentication system for Arcadia Nexus. By implementing intelligent token refresh strategies, you can provide a seamless authentication experience that enhances security while remaining invisible to players, allowing them to focus on their adventures across the metaverse without interruption.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

auth, token, refresh, security, sessions, authentication, users, credentials
