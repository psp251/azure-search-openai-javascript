# Enter RMG Competition

**Group:** Competitions

**Description:** Enters a player into a RMG competition using the provided competition identifier, and optional instance, entry, and custom parameters.

**Route:** /v2/client/competitions/enter-rmg-competition

**Method:** POST

## Parameters

- **competitionId**: The unique identifier of the competition. This field is required.
- **competitionInstanceId**: Optional identifier for a specific instance of the competition.
- **entryId**: Optional identifier for the competition entry.
- **customParams**: Optional object containing additional custom parameters for the competition entry.

## Required Headers

- **Api-Key**: The environment-specific API key.
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

competition, enter competition, rmg, rmg competition, entry, player, custom params, cash, play-to-win
