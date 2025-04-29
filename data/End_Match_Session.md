# End Match Session

**Group:** Matches

**Description:** Ends an active match session, finalizing user participation and session details.

**Route:** /v2/client/matches/end-session

**Method:** POST

## Parameters

- **matchSessionId**: The unique identifier for the match session to be ended.
- **userInfo**: An array of user objects involved in the session, detailing their individual outcomes.

## Additional Information

Ends an active match session, finalizing user participation and session details. This endpoint marks the conclusion of gameplay, records final outcomes, and processes match results for leaderboards, achievements, or rewards.
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

 

 

The unique identifier for the match session to be ended.

 

 

Optional Parameters

Parameter
Type
Description

userInfo

 

 

array of objects

 

 

An array of user objects involved in the session, detailing their individual outcomes.

 

 

User Info Object Structure:

Field
Type
Description

id

 

 

string

 

 

Unique identifier for each user participating in the match session.

 

 

outcome

 

 

number

 

 

Outcome status or score associated with the user at the end of the session.

 

 

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

 

 

Contains information about the ended match session.

 

 

Data Object Structure

Field
Type
Description

matchSessionId

 

 

string

 

 

The unique identifier for the ended match session.

 

 

Notes

Authorization: This endpoint requires authorization with a valid player token, as it involves finalizing a gameplay session.

Match Lifecycle: A match session must have been previously created and started before it can be ended.

Outcome Records: The outcome values provided for each user are used to determine rankings, winners, and losers.

Leaderboard Integration: When the match session is ended, results may be automatically applied to relevant leaderboards, especially if the match is part of a competition.

Resource Release: Ending a match session releases associated server resources and completes any pending processes related to the session.

Match History: Ended match sessions contribute to players' match history and statistics.

Rewarding Systems: After ending a match, any associated rewards, progression, or achievements may be processed based on the outcomes.

Integration Tips

Result Verification: Implement client-side verification to ensure match results are accurately recorded before ending the session.

Match Summary: Display a match summary screen to players after calling this endpoint, highlighting key statistics and outcomes.

Reward Animations: Create engaging visual and audio feedback for any rewards earned as a result of the match completion.

Rematch Options: Offer players the option to rematch or play again with the same participants after a match has ended.

Post-Match Analysis: Provide players with insights or analysis of their performance to help them improve for future matches.

Error Handling: Implement robust error handling for cases where the end session call fails, ensuring match data isn't lost.

The End Match Session endpoint completes the match lifecycle in Arcadia Nexus, recording the final outcomes of gameplay and processing the results for leaderboards, rewards, and player statistics. This creates a satisfying conclusion to the player's competitive or cooperative experiences across the various realms of the metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

matches, session, end, finalize, results, scores, multiplayer, matchmaking, esports
