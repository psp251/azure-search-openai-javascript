# Get Progression Systems

**Group:** App

**Description:** Retrieves data for the progression systems and markers that drive in-game progression in your app. Filter by progression system IDs, progression marker IDs, or search keywords.

**Route:** /v2/client/app/get-progression-systems

**Method:** POST

## Parameters

- **progressionSystemIds**: An array of progression system IDs to fetch specific progression systems.
- **progressionMarkerIds**: An array of progression marker IDs to filter the master data by specific markers.
- **search**: A search keyword to filter progression systems by name.
- **includeTags**: An array of tags to further filter the progression systems.
- **limit**: Maximum number of progression system records to return.
- **offset**: Number of progression system records to skip for pagination.

## Attributes

- **levels** (array): An array of level definitions. Each level includes a unique identifier, level number, display name, incremental and cumulative parameter values, and reward details for that level.
- **meta** (object): Additional metadata for the level set
- **tags** (array): An array of tags to help categorize the progression systems
- **levels.rewardDetails** (object): An object containing reward information for achieving each level within the progression system (e.g., bonus XP, virtual currency, items awarded upon reaching any level). Will only take effect if 'levels' is included in requested attributes.

## Examples

### Retrieve All Progression Systems with Basic Information

In this example, we retrieve all progression systems with their basic information. This is useful for displaying an overview of all advancement paths available to players.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all progression systems across the different realms, such as "Character Level," "Fire Mastery," "Nature Attunement," and "Tech Level." Players can see the basic structure of each progression system and the markers used to advance within them.

#### Request

```
POST /v2/client/app/get-progression-systems
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
  "status": "Success",
  "code": 200,
  "message": "Get Progression System Data",
  "errors": [],
  "data": {
    "progressionSystems": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "character_level",
        "name": "Character Level",
        "description": "Your overall character level in Arcadia Nexus, determining your base abilities and access to content",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/character_level.png",
        "progressionMarker": {
          "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
          "id": "experience_points",
          "name": "Experience Points",
          "description": "Universal progression points earned through activities across all realms of Arcadia Nexus",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/experience_points.png"
        },
        "totalLevels": 50
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "fire_mastery",
        "name": "Fire Mastery",
        "description": "Your ability to control and resist fire in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_mastery.png",
        "progressionMarker": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "fire_essence",
          "name": "Fire Essence",
          "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
        },
        "totalLevels": 30
      },
      {
        "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
        "id": "nature_attunement",
        "name": "Nature Attunement",
        "description": "Your connection to the natural forces in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nature_attunement.png",
        "progressionMarker": {
          "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
          "id": "forest_spirit",
          "name": "Forest Spirit",
          "description": "Mystical energy gathered in the Forest of Whispers, enhancing nature-based powers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_spirit.png"
        },
        "totalLevels": 25
      },
      {
        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
        "id": "tech_level",
        "name": "Tech Level",
        "description": "Your technological expertise in the Cyber District",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/tech_level.png",
        "progressionMarker": {
          "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
          "id": "cyber_credits",
          "name": "Cyber Credits",
          "description": "Digital progression units earned in the Cyber District, used to upgrade tech-based equipment",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png"
        },
        "totalLevels": 40
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Retrieve a Specific Progression System with Levels and Rewards

In this example, we retrieve a specific progression system along with its level structure and rewards. This is useful for showing players detailed information about a particular advancement path.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return the "Character Level" progression system with detailed information about each level, including the experience points required to reach each level and the rewards granted upon leveling up. This helps players understand what they're working toward and what benefits they'll receive as they advance.

#### Request

```
POST /v2/client/app/get-progression-systems
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "progressionSystemIds": ["character_level"],
  "attributes": ["levels", "levels.rewardDetails"]
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
  "status": "Success",
  "code": 200,
  "message": "Get Progression System Data",
  "errors": [],
  "data": {
    "progressionSystems": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "character_level",
        "name": "Character Level",
        "description": "Your overall character level in Arcadia Nexus, determining your base abilities and access to content",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/character_level.png",
        "progressionMarker": {
          "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
          "id": "experience_points",
          "name": "Experience Points",
          "description": "Universal progression points earned through activities across all realms of Arcadia Nexus",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/experience_points.png"
        },
        "levels": [
          {
            "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
            "id": "character_level_1",
            "levelNo": 1,
            "name": "Novice Explorer",
            "incrementalParameterValue": 0,
            "cumulativeParameterValue": 0,
            "rewardDetails": {
              "items": [
                {
                  "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
                  "id": "explorer_bag",
                  "name": "Explorer's Bag",
                  "description": "A basic bag for carrying your adventures",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/explorer_bag.png",
                  "quantity": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                  "id": "nexus_gems",
                  "name": "Nexus Gems",
                  "description": "Universal currency used throughout Arcadia Nexus",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
                  "code": "NG",
                  "type": "virtual",
                  "amount": 500
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
            "id": "character_level_2",
            "levelNo": 2,
            "name": "Adventurer",
            "incrementalParameterValue": 1000,
            "cumulativeParameterValue": 1000,
            "rewardDetails": {
              "items": [
                {
                  "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                  "id": "basic_sword",
                  "name": "Basic Sword",
                  "description": "A standard sword for beginners",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/basic_sword.png",
                  "quantity": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                  "id": "nexus_gems",
                  "name": "Nexus Gems",
                  "description": "Universal currency used throughout Arcadia Nexus",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
                  "code": "NG",
                  "type": "virtual",
                  "amount": 1000
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
            "id": "character_level_3",
            "levelNo": 3,
            "name": "Skilled Explorer",
            "incrementalParameterValue": 2000,
            "cumulativeParameterValue": 3000,
            "rewardDetails": {
              "items": [],
              "bundles": [
                {
                  "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
                  "id": "adventurer_essentials",
                  "name": "Adventurer's Essentials",
                  "description": "A bundle of essential items for your journey",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/adventurer_essentials.png",
                  "quantity": 1
                }
              ],
              "currencies": [
                {
                  "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                  "id": "nexus_gems",
                  "name": "Nexus Gems",
                  "description": "Universal currency used throughout Arcadia Nexus",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
                  "code": "NG",
                  "type": "virtual",
                  "amount": 1500
                }
              ],
              "progressionMarkers": []
            }
          }
        ],
        "totalLevels": 50
      }
    ],
    "totalCount": 1,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Filter Progression Systems by Marker

In this example, we filter progression systems by a specific marker type. This is useful when you want to show players all the ways they can use a particular resource to advance.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all progression systems that use "Fire Essence" as their marker, such as "Fire Mastery," "Flame Weapon Proficiency," and "Volcano Explorer." This helps players understand the different ways they can utilize Fire Essence to progress in various aspects of the Realm of Fire.

#### Request

```
POST /v2/client/app/get-progression-systems
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "progressionMarkerIds": ["fire_essence"],
  "attributes": ["tags"]
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}
Body: {
  "status": "Success",
  "code": 200,
  "message": "Get Progression System Data",
  "errors": [],
  "data": {
    "progressionSystems": [
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "fire_mastery",
        "name": "Fire Mastery",
        "description": "Your ability to control and resist fire in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_mastery.png",
        "progressionMarker": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "fire_essence",
          "name": "Fire Essence",
          "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
        },
        "tags": [
          "fire_realm",
          "elemental",
          "combat"
        ],
        "totalLevels": 30
      },
      {
        "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
        "id": "flame_weapon_proficiency",
        "name": "Flame Weapon Proficiency",
        "description": "Your skill with fire-imbued weapons in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_weapon_proficiency.png",
        "progressionMarker": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "fire_essence",
          "name": "Fire Essence",
          "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
        },
        "tags": [
          "fire_realm",
          "weapons",
          "combat"
        ],
        "totalLevels": 20
      },
      {
        "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
        "id": "volcano_explorer",
        "name": "Volcano Explorer",
        "description": "Your exploration progress in the volcanic regions of the Fire Realm",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/volcano_explorer.png",
        "progressionMarker": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "fire_essence",
          "name": "Fire Essence",
          "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
        },
        "tags": [
          "fire_realm",
          "exploration",
          "discovery"
        ],
        "totalLevels": 15
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

## Additional Information

Retrieves data for the progression systems and markers that drive in-game progression in your app. Progression systems define how players advance through levels, gain abilities, and unlock content based on accumulated progression markers (such as XP, points, or specialized resources). Use this endpoint to fetch detailed information about progression systems, including their structure, levels, and rewards.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

progressionSystemIds

 

 

array of strings

 

 

An array of progression system IDs to fetch specific progression systems.

 

 

progressionMarkerIds

 

 

array of strings

 

 

An array of progression marker IDs to filter the master data by specific markers.

 

 

search

 

 

string

 

 

A search keyword to filter progression systems by name.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to further filter the progression systems.

 

 

limit

 

 

number

 

 

Maximum number of progression system records to return.

 

 

offset

 

 

number

 

 

Number of progression system records to skip for pagination.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each progression system.

 

 

Available Attributes:

levels: An array of level definitions for each progression system.

meta: Additional metadata about the progression system.

tags: Tags associated with the progression system.

levels.rewardDetails: Reward information for achieving each level (only applies if 'levels' is included).

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

 

 

Contains the progression systems information.

 

 

Data Object Structure

Field
Type
Description

progressionSystems

 

 

array

 

 

An array of progression system objects.

 

 

totalCount

 

 

integer

 

 

Total number of progression systems available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Progression System Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the progression system in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the progression system.

 

 

name

 

 

string

 

 

Name of the progression system.

 

 

description

 

 

string

 

 

Description of the progression system.

 

 

iconUrl

 

 

string

 

 

URL to the progression system's icon.

 

 

progressionMarker

 

 

object

 

 

Details of the marker used for this progression system.

 

 

totalLevels

 

 

number

 

 

The total number of levels in this progression system.

 

 

Progression Marker Object:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the marker in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the marker.

 

 

name

 

 

string

 

 

Name of the marker.

 

 

description

 

 

string

 

 

Description of the marker.

 

 

iconUrl

 

 

string

 

 

URL to the marker's icon.

 

 

Levels Array (if requested):
Each level object includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the level in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the level.

 

 

levelNo

 

 

number

 

 

The numeric level identifier (e.g., 1, 2, 3).

 

 

name

 

 

string

 

 

Display name of the level.

 

 

incrementalParameterValue

 

 

number

 

 

Amount of the marker needed to advance from the previous level to this level.

 

 

cumulativeParameterValue

 

 

number

 

 

Total amount of the marker needed from level 1 to reach this level.

 

 

rewardDetails

 

 

object

 

 

Rewards granted upon reaching this level (if levels.rewardDetails attribute is requested).

 

 

Reward Details Object (if requested):

Field
Type
Description

items

 

 

array

 

 

Array of items awarded at this level.

 

 

bundles

 

 

array

 

 

Array of bundles awarded at this level.

 

 

currencies

 

 

array

 

 

Array of currencies awarded at this level.

 

 

progressionMarkers

 

 

array

 

 

Array of progression markers awarded at this level.

 

 

Each currency object includes:

Field
Type
Description

uuid

 

 

string/number

 

 

Unique identifier of the currency in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the currency.

 

 

name

 

 

string

 

 

Name of the currency.

 

 

description

 

 

string

 

 

Description of the currency.

 

 

iconUrl

 

 

string

 

 

URL to the currency's icon.

 

 

code

 

 

string

 

 

Currency code (e.g., "SK", "FC").

 

 

type

 

 

string

 

 

Type of currency (e.g., "virtual").

 

 

amount

 

 

number

 

 

Amount of currency awarded.

 

 

Meta Object (if requested):
The meta object contains additional, system-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation.
Tags Array (if requested):
An array of strings representing tags associated with the progression system. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each progression system.

Filtering by IDs: Use the progressionSystemIds or progressionMarkerIds parameters to retrieve specific systems or systems using specific markers.

Level Structure: The levels attribute provides detailed information about each level in a progression system, including the requirements to reach that level and rewards (if requested).

Incremental vs. Cumulative: The incrementalParameterValue shows how much of the marker is needed to advance from the previous level, while cumulativeParameterValue shows the total amount needed from the beginning.

Rewards Visualization: Use the rewardDetails to show players what they'll earn at each level, creating incentives for continued progression.

Pagination: Use limit and offset parameters to paginate through results when dealing with many progression systems.

Integration Tips

Visual Progression Paths: Create visual representations of progression systems, such as level trees or progress bars, to help players understand their advancement options.

Next Level Preview: Show players what they'll earn at their next level and how much more of the progression marker they need to advance.

Multi-system Dashboard: Create a dashboard that displays progress across multiple progression systems, helping players track their advancement in different areas of the game.

Realm-specific Grouping: Group progression systems by realm or theme to help players focus on specific areas of interest.

Reward Highlights: Emphasize particularly valuable rewards at certain levels to motivate players to reach those milestones.

The Get Progression Systems endpoint is essential for implementing comprehensive progression mechanics in your game, allowing players to understand how they can advance, what they'll earn, and what goals they should work toward. By effectively utilizing this endpoint, you can create engaging progression loops that keep players motivated and invested in your game world.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

progression-systems, xp, progression-markers, level-systems, skill-divisions
