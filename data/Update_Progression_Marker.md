# Update Progression Marker

**Group:** Progression

**Description:** Updates a progression marker by a specified amount, with optional parameters for customization.

**Route:** /v2/client/progression/update-marker

**Method:** POST

## Parameters

- **progressionMarkerId**: Identifier for the progression marker to update.
- **amount**: The positive amount to adjust the progression marker.
- **operation**: Operation to apply to the progression marker.
- **customParams**: Custom parameters for further customization.

## Additional Information

Updates a progression marker by a specified amount. This endpoint allows you to increment or decrement a player's progression markers (such as XP, points, or specialized resources) to track their advancement through various progression systems in your game.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
Required Parameters

Parameter
Type
Description

progressionMarkerId

 

 

string

 

 

Identifier for the progression marker to update (e.g., "experience_points").

 

 

amount

 

 

number

 

 

The positive amount to adjust the progression marker.

 

 

operation

 

 

string

 

 

Operation to apply to the progression marker. Allowed values: "add", "subtract".

 

 

Optional Parameters

Parameter
Type
Description

customParams

 

 

object

 

 

Custom parameters for further customization.

 

 

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

 

 

Contains the updated progression marker information.

 

 

Data Object Structure

Field
Type
Description

uuid

 

 

number

 

 

Unique identifier of the progression marker in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the progression marker.

 

 

name

 

 

string

 

 

Name of the progression marker.

 

 

description

 

 

string

 

 

Description of the progression marker.

 

 

iconUrl

 

 

string

 

 

URL to the progression marker's icon.

 

 

progressionMarkerAmount

 

 

number

 

 

Current amount of the progression marker the player has after the update.

 

 

progressInfo

 

 

array

 

 

An array of objects containing information about the player's progress in associated progression systems.

 

 

Progress Info Object
Each object in the progressInfo array includes:

Field
Type
Description

progressionSystemId

 

 

string

 

 

Identifier of the progression system.

 

 

currentLevelNo

 

 

number

 

 

The player's current level in the progression system after the update.

 

 

previousLevelNo

 

 

number

 

 

The player's level in the progression system before the update.

 

 

amountToNextLevel

 

 

number

 

 

The amount of the progression marker needed to reach the next level.

 

 

isLevelUp

 

 

boolean

 

 

Indicates whether the player leveled up as a result of the update.

 

 

Notes

Authorization: This endpoint requires authorization with a valid player token, as it modifies a specific player's progression data.

Operation Types: Use "add" to increase a player's progression marker and "subtract" to decrease it.

Level-Up Detection: The response includes information about whether the player leveled up as a result of the update, which can be used to trigger level-up rewards or notifications.

Multiple Systems: A single progression marker may be used in multiple progression systems, which is why the progressInfo array can contain multiple entries.

Validation: The system will validate that the operation doesn't result in negative progression marker amounts when using the "subtract" operation.

Integration Tips

Progress Visualization: Update progress bars or level indicators immediately after successful progression updates to provide visual feedback to players.

Level-Up Celebrations: Check the isLevelUp flag in the response to trigger appropriate celebrations, rewards, or notifications when players reach new levels.

Multi-System Tracking: Keep track of how progression markers affect different progression systems to create a cohesive advancement experience.

Achievement Connection: Tie progression marker updates to achievement systems to reward players for reaching certain milestones.

Balanced Progression: Carefully balance the rate at which progression markers are awarded to ensure players feel a sense of accomplishment without progressing too quickly or slowly.

The Update Progression Marker endpoint is essential for implementing dynamic progression systems in Arcadia Nexus. By effectively managing progression markers, you can create engaging advancement mechanics that keep players motivated and rewarded as they explore and master the different realms of the metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

progression, xp, markers, leveling, ranking, achievement, player, stats, updates
