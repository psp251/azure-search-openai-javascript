# Create Match Session

**Group:** Matches

**Description:** Creates a new match session, allowing participants to join and engage in the specified match.

**Route:** /v2/client/matches/create-session

**Method:** POST

## Parameters

- **matchId**: The unique identifier of the match for which the session is being created.
- **competitionId**: Identifier for the competition associated with the match session, linking the match to a specific competition event.
- **userInfo**: An array containing details of users participating in the session, each with essential user information.

## Additional Information

Creates a new match session, allowing participants to join and engage in the specified match. This endpoint is essential for initiating gameplay sessions, competitions, or multiplayer experiences within your game.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
Required Parameters

Parameter
Type
Description

matchId

 

 

string

 

 

The unique identifier of the match for which the session is being created.

 

 

Optional Parameters

Parameter
Type
Description

competitionId

 

 

string

 

 

Identifier for the competition associated with the match session, linking the match to a specific competition event.

 

 

userInfo

 

 

array of objects

 

 

An array containing details of users participating in the session, each with essential user information.

 

 

User Info Object Structure:

Field
Type
Description

id

 

 

string

 

 

Unique identifier for each user participating in the match session.

 

 

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

 

 

Contains information about the created match session.

 

 

Data Object Structure

Field
Type
Description

matchSessionId

 

 

string

 

 

The unique identifier for the newly created match session.

 

 

Notes

Authorization: This endpoint requires authorization with a valid player token, as it involves creating a gameplay session.

Match Configuration: The match configuration (rules, win conditions, etc.) is determined by the match template referenced by the matchId.

Competition Context: When provided, the competitionId links the match session to a specific competition, allowing the results to affect leaderboards or tournament standings.

Participant Information: The userInfo array allows you to specify which users are participating in the match session, which is essential for multiplayer matches.

Session Lifecycle: After creating a match session, you'll need to use additional endpoints to start the session, report outcomes, and end the session to complete the match lifecycle.

Session Reference: The matchSessionId returned in the response is required for all subsequent API calls related to this specific match instance.

Integration Tips

Session Management: Implement a robust system to track active match sessions and their states to ensure proper progression through the match lifecycle.

Player Invitations: For multiplayer matches, create a UI that allows players to invite friends or select participants before calling this endpoint.

Match Types: Offer a variety of match types with different configurations to keep gameplay fresh and engaging.

Competition Integration: Integrate match sessions with broader competition structures to create engaging tournament experiences.

Session Recovery: Implement mechanisms to handle unexpected disconnections or errors, allowing players to rejoin ongoing match sessions.

Analytics Tracking: Use match session data to track player engagement, popular match types, and performance metrics.

The Create Match Session endpoint is fundamental to implementing gameplay interactions in Arcadia Nexus. By creating structured sessions for different match types, you enable players to engage in challenges, competitions, and cooperative adventures across the various realms of the metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

matches, session, creation, multiplayer, matchmaking, competitions, esports, gameplay, start
