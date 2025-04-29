# Get Markers

**Group:** App

**Description:** Fetches progression markers (e.g., XP) from the application. Supports pagination, searching, and optional attribute/tags filtering.

**Route:** /v2/client/app/get-markers

**Method:** POST

## Parameters

- **progressionMarkerId**: An array of progression marker IDs to fetch specific markers.
- **offset**: The number of progression markers to skip (pagination).
- **limit**: The maximum number of progression markers to return (pagination).
- **search**: A string to search for progression markers by name.
- **includeTags**: A list of tags to filter or augment the progression marker data.

## Attributes

- **meta** (object): Additional metadata.
- **tags** (array): Tags associated with the app.
- **progressionSystems** (array): Progression Systems built using the marker.

## Examples

### Retrieve All Progression Markers

In this example, we retrieve all available progression markers in the application. This is useful for displaying a comprehensive view of all possible ways players can progress.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all progression markers across the different realms, such as "Experience Points," "Fire Essence," "Forest Spirit," and "Cyber Credits." These markers represent different forms of progression that players can earn and use in various progression systems throughout the metaverse.

#### Request

```
POST /v2/client/app/get-markers
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
  "message": "Progression Marker data",
  "errors": [],
  "data": {
    "markers": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "experience_points",
        "name": "Experience Points",
        "description": "Universal progression points earned through activities across all realms of Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/experience_points.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essence",
        "name": "Fire Essence",
        "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_spirit",
        "name": "Forest Spirit",
        "description": "Mystical energy gathered in the Forest of Whispers, enhancing nature-based powers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_spirit.png"
      },
      {
        "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
        "id": "cyber_credits",
        "name": "Cyber Credits",
        "description": "Digital progression units earned in the Cyber District, used to upgrade tech-based equipment",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png"
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Retrieve Specific Markers by IDs

In this example, we retrieve specific markers by providing their IDs. This is useful when you need details about particular progression types.

 

Context for Arcadia Nexus:
For Arcadia Nexus, this would return detailed information about two specific progression markers: "Experience Points" (the universal progression metric used across all realms) and "Fire Essence" (a specialized progression marker used specifically in the Realm of Fire). This allows you to display information about these specific progression types to players.

#### Request

```
POST /v2/client/app/get-markers
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "progressionMarkerId": ["experience_points", "fire_essence"]
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
  "message": "Progression Marker data",
  "errors": [],
  "data": {
    "markers": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "experience_points",
        "name": "Experience Points",
        "description": "Universal progression points earned through activities across all realms of Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/experience_points.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essence",
        "name": "Fire Essence",
        "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png"
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Retrieve Markers with Progression Systems

In this example, we retrieve markers along with the progression systems that use them. This provides a complete picture of how each marker is utilized within the game.

 

Context for Arcadia Nexus:
For Arcadia Nexus, this would provide not only the basic marker information but also metadata and associated progression systems. For example:

The "Experience Points" marker might be linked to the "Character Level" progression system, showing players how their XP contributes to overall character advancement.
The "Fire Essence" marker would be connected to the "Fire Mastery" progression system, illustrating how this realm-specific resource helps players advance within the Realm of Fire.

This comprehensive view helps players understand how different types of progression are interconnected within the metaverse.

#### Request

```
POST /v2/client/app/get-markers
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "attributes": ["meta", "progressionSystems"]
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
  "message": "Progression Marker data",
  "errors": [],
  "data": {
    "markers": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "experience_points",
        "name": "Experience Points",
        "description": "Universal progression points earned through activities across all realms of Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/experience_points.png",
        "meta": {
          "resourceFlag": 1,
          "info": "Earn <highlight>Experience Points</highlight> by completing quests, defeating enemies, and exploring new areas. These points are the primary measure of your advancement in Arcadia Nexus."
        },
        "progressionSystems": [
          {
            "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
            "id": "character_level",
            "name": "Character Level",
            "description": "Your overall character level in Arcadia Nexus, determining your base abilities and access to content",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/character_level.png"
          },
          {
            "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
            "id": "explorer_rank",
            "name": "Explorer Rank",
            "description": "Your standing among the explorers of Arcadia Nexus, unlocking special exploration perks",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/explorer_rank.png"
          }
        ]
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essence",
        "name": "Fire Essence",
        "description": "A magical essence collected in the Realm of Fire, used to unlock fire-based abilities and items",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png",
        "meta": {
          "resourceFlag": 2,
          "info": "Collect <highlight>Fire Essence</highlight> from flame creatures, volcanic vents, and special events in the Realm of Fire. This magical essence allows you to withstand heat and control fire."
        },
        "progressionSystems": [
          {
            "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
            "id": "fire_mastery",
            "name": "Fire Mastery",
            "description": "Your ability to control and resist fire in the Realm of Fire",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_mastery.png"
          }
        ]
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_spirit",
        "name": "Forest Spirit",
        "description": "Mystical energy gathered in the Forest of Whispers, enhancing nature-based powers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_spirit.png",
        "meta": {
          "resourceFlag": 2,
          "info": "Gather <highlight>Forest Spirit</highlight> by communing with ancient trees, helping woodland creatures, and completing nature-based rituals in the Forest of Whispers."
        },
        "progressionSystems": [
          {
            "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
            "id": "nature_attunement",
            "name": "Nature Attunement",
            "description": "Your connection to the natural forces in the Forest of Whispers",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nature_attunement.png"
          }
        ]
      },
      {
        "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
        "id": "cyber_credits",
        "name": "Cyber Credits",
        "description": "Digital progression units earned in the Cyber District, used to upgrade tech-based equipment",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
        "meta": {
          "resourceFlag": 2,
          "info": "Earn <highlight>Cyber Credits</highlight> by hacking terminals, completing digital challenges, and participating in tech competitions in the Cyber District."
        },
        "progressionSystems": [
          {
            "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
            "id": "tech_level",
            "name": "Tech Level",
            "description": "Your technological expertise in the Cyber District",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/tech_level.png"
          }
        ]
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

## Additional Information

Fetches progression markers (e.g., XP, points, energy) from the application. Progression markers are the basic units of measurement used to track player advancement within your game. Use this endpoint to retrieve information about various markers that players can earn or spend to progress through different systems in your game.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

progressionMarkerId

 

 

array of strings

 

 

An array of progression marker IDs to fetch specific markers.

 

 

limit

 

 

number

 

 

The maximum number of progression markers to return (pagination).

 

 

offset

 

 

number

 

 

The number of progression markers to skip (pagination).

 

 

search

 

 

string

 

 

A string to search for progression markers by name.

 

 

includeTags

 

 

array of strings

 

 

A list of tags to filter or augment the progression marker data.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each marker.

 

 

Available Attributes:

meta: Additional metadata about the marker.

tags: Tags associated with the marker.

progressionSystems: Progression systems built using the marker.

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

 

 

Contains the progression markers information.

 

 

Data Object Structure

Field
Type
Description

markers

 

 

array

 

 

An array of marker objects.

 

 

totalCount

 

 

integer

 

 

Total number of markers available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Marker Object Structure
Default Fields:

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

 

 

Meta Object (if requested):
The meta object contains additional, marker-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation.
Common fields might include:

resourceFlag: A flag indicating the type or role of the resource in the game.

info: Detailed information about how the marker works, often with formatting or highlighting.

Tags Array (if requested):
An array of strings representing tags associated with the marker. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization.
Progression Systems Array (if requested):
Each progression system object includes:

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

 

 

Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each marker.

Filtering by Tags: Use the includeTags parameter to retrieve markers that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of markers.

Searching: Use the search parameter to find markers by name.

Related Progression Systems: Markers are often used in one or more progression systems, which can be retrieved using the progressionSystems attribute.

Marker Visualization: The iconUrl provides the direct path to the marker's image, which can be used in your application to visually represent the progression marker.

 
Integration Tips

Progress Visualization: Create visual representations of markers, such as progress bars or resource counters, to help players track their advancement.

Contextual Information: Use the marker descriptions and metadata to provide helpful explanations about how each type of progression works within your game.

Related Systems: Show players which progression systems are associated with each marker, helping them understand the purpose and value of collecting different types of progression.

Resource Management: For markers that function as spendable resources, provide information about how and where they can be spent.

Achievement Tracking: Connect markers to achievements or milestones to motivate players to earn specific types of progression.

The Get Markers endpoint is fundamental to implementing progression mechanics in your game, allowing players to understand and track their advancement through different systems and realms. By utilizing this endpoint effectively, you can create engaging progression loops that keep players motivated and rewarded as they explore the various aspects of your game world.

 

## Required Headers

- **api-key**: This header should contain the environment-specific API key. Use the key corresponding to the current environment (e.g., development,qa, production) for authentication.

## Tags

progression, xp, leveling
