# Start Match Session

**Group:** Matches

**Description:** Initiates a new session for a specified match, enabling participants to engage and interact within the match environment.

**Route:** /v2/client/matches/start-session

**Method:** POST

## Parameters

- **matchSessionId**: A unique identifier for the match session.
- **matchId**: The identifier of the match to start the session for. Links the session to its corresponding match details.
- **userInfo**: An array of user objects participating in the session. Contains essential information for each user involved.
- **competitionId**: Identifier for the competition associated with the match session, linking the match to a specific competition event.

## Additional Information

Initiates a previously created match session, or starts a new one, enabling participants to engage and interact within the match environment. This endpoint marks the formal beginning of gameplay, starting timers, recording statistics, and activating match mechanics.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
Required Parameters

Parameter
Type
Description

matchSessionId

 

 

string

 

 

A unique identifier for the match session obtained from a previous call to Create Match Session.

 

 

Optional Parameters

Parameter
Type
Description

matchId

 

 

string

 

 

The identifier of the match to start the session for. Links the session to its corresponding match details.

 

 

competitionId

 

 

string

 

 

Identifier for the competition associated with the match session, linking the match to a specific competition event.

 

 

userInfo

 

 

array of objects

 

 

An array of user objects participating in the session. Contains essential information for each user involved.

 

 

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

 

 

Contains information about the started match session.

 

 

Data Object Structure

Field
Type
Description

matchSessionId

 

 

string

 

 

The unique identifier for the started match session.

 

 

Notes

Authorization: This endpoint requires authorization with a valid player token, as it involves starting a gameplay session.

Session Creation: A match session must first be created using the Create Match Session endpoint before it can be started.

Match Flow: Starting a match session represents the transition from setup to active gameplay.

Timing Records: When a match session is started, the system begins recording timing information, which may be important for time-based matches or scoring.

Participant Validation: The system validates that all participants are ready before starting the session.

Competition Integration: If a competitionId is provided, the match results will contribute to the specified competition's standings or leaderboards.

Session Reference: The matchSessionId is essential for all subsequent API calls related to this match instance, such as reporting outcomes or ending the session.

 
Integration Tips

Ready State Confirmation: Before starting a match session, implement a mechanism to confirm that all participants are ready to begin.

Loading Screens: Use the time between creating and starting a match session to display loading screens, match information, or tips for players.

Session Timeouts: Consider implementing timeouts for sessions that are created but not started within a reasonable timeframe.

Match Countdown: For multiplayer matches, consider implementing a countdown after starting the session before actual gameplay begins, giving players a moment to prepare.

Session Recovery: Implement mechanisms to handle cases where a session is started but players disconnect immediately, allowing for graceful recovery or match cancellation.

Tutorial Integration: For new players, consider integrating tutorials or help systems that activate when a match session starts.

The Start Match Session endpoint represents a crucial transition point in the match lifecycle, moving from setup to active gameplay. It's the moment when timers begin, challenges activate, and players fully engage with the game mechanics of Arcadia Nexus across its various realms.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

matches, session, start, multiplayer, game-session, competitions, esports, matchmaking
