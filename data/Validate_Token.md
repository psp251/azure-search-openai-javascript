# Validate Token

**Group:** Auth

**Description:** Validates a token to check its authenticity.

**Route:** /v2/client/auth/validate-token

**Method:** POST

## Parameters

- **entityToken**: Token identifying the entity (optional).
- **accessToken**: Access token to validate.

## Additional Information

Validates an access token to check its authenticity and expiration status. This endpoint allows applications to verify if a token is still valid for making authenticated API requests.
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

accessToken

 

 

string

 

 

The access token to validate. This is typically the JWT token received during login or signup.

 

 

entityToken

 

 

string

 

 

Token identifying the entity. This is provided during authentication and is required for validation.

 

 

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

 

 

Contains validation information about the token.

 

 

Data Object Structure

Field
Type
Description

accessToken

 

 

string

 

 

The validated access token.

 

 

expires

 

 

integer

 

 

Unix timestamp indicating when the token will expire.

 

 

Notes

Token Validation: This endpoint allows you to verify if an access token is valid without attempting to use it for an authenticated request, which can be useful for preemptively checking token status.

Token Expiration: The response includes the expiration timestamp, which allows your application to determine how long the token will remain valid.

Security Considerations: This endpoint requires the API key and the player's session token in the headers for security purposes.

Refresh Logic: You can use this endpoint to determine if a token needs to be refreshed before making important API calls.

Client-Side Caching: Consider implementing client-side caching of the token validation result to reduce unnecessary validation requests.

Session Management: This endpoint can be part of a session management strategy, allowing you to maintain and verify user sessions effectively.

 
Integration Tips

Preemptive Validation: Validate tokens before attempting high-value operations or transactions to prevent failed requests and improve user experience.

Expiration Handling: Use the expires timestamp to implement countdown logic for session timeouts or to schedule token refreshes.

Error Graceful Degradation: Implement graceful handling of invalid tokens by automatically redirecting to login flows or offering guest mode options.

Validation Frequency: Balance security needs with server load by strategically choosing when to validate tokens rather than validating before every API call.

Security Layers: Consider combining token validation with other security measures for high-value operations, such as requiring re-authentication for purchases above certain thresholds.

Offline Handling: For mobile games, implement strategies for handling token validation when the device temporarily loses connection.

User Feedback: When a token is about to expire, consider providing unobtrusive visual indicators to users, allowing them to save their progress or extend their session.

The Validate Token endpoint is a crucial component for maintaining secure and uninterrupted sessions in Arcadia Nexus. By implementing thoughtful token validation strategies, you can enhance security while providing a seamless experience that allows players to remain immersed in their adventures across the metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

auth, validate, token, security, sessions, authentication, users, verification
