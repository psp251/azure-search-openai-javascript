# Enter Competition

**Group:** Competitions

**Description:** Allows a user to enter a competition with a unique competition ID, optional instance ID, entry ID, and custom parameters.

**Route:** /v2/client/competitions/enter

**Method:** POST

## Parameters

- **competitionId**: The unique identifier for the competition.
- **competitionInstanceId**: Optional instance ID for a specific competition instance.
- **customParams**: Additional custom parameters for the competition entry.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competitions, enter, entry, matches, tournaments, esports, leaderboards, ranking, player
