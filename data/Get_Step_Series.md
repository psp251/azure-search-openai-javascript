# Get Step Series

**Group:** App

**Description:** Retrieves ordered sequences (step series) of tasks that form a ladder of challenges. This endpoint is ideal for progressive sequences where each task must be completed in order.

**Route:** /v2/client/app/get-step-series

**Method:** POST

## Parameters

- **taskGroupIds**: An array of task group IDs that identify the step series.
- **includeInactiveTasks**: If true, the response includes tasks that are not currently active in the series.
- **limit**: Maximum number of step series tasks to return.
- **offset**: Number of tasks to skip for pagination in the series.
- **includeTags**: An array of tags to further filter or categorize the step series.
- **scheduleStatuses**: An array of schedule statuses to filter the step series tasks.

## Attributes

- **tasks.rewardDetails** (object): An object containing reward information for completion of each task within the step series group (e.g., bonus XP, virtual currency, items awarded upon completion of any task). Will only take effect if 'tasks' is included in requested attributes.
- **tasks** (array): Additional Details about the tasks in the step series
- **unlockConditions** (array): An array of conditions required to unlock the step series
- **schedule** (object): An object specifying the timing details for the step series (e.g., start time, end time, recurrence pattern).
- **meta** (object): Additional metadata about the step series
- **tags** (array): An array of tags used to categorize and search for the step series
- **tasks.linkedRewardDetails** (object): An object containing reward details that link individual task completion within the group to another player (e.g., referral rewards) so that both players receive a bonus. Will only take effect if 'tasks' is included in requested attributes.

## Examples

### Retrieve All Step Series with Default Information

In this example, we retrieve all step series with minimal default information. This is suitable when you need basic information about available progression paths in your game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available step series progression paths, such as the "Cyber District Initiation" sequence that introduces players to the digital realm, or the "Fire Walker's Path" that guides players through mastering the challenges of the Fire Realm. This basic information allows players to browse through available progressions before deciding which journey to embark on.

 

#### Request

```
POST /v2/client/app/get-step-series
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
  "status": "success",
  "code": 200,
  "message": "Get Step Series List",
  "errors": [],
  "data": {
    "stepSeries": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "cyber_district_initiation",
        "name": "Cyber District Initiation",
        "description": "Begin your journey into the digital realm of Arcadia Nexus by completing these sequential challenges.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_initiation.png",
        "taskGroupType": "step_series"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_walkers_path",
        "name": "Fire Walker's Path",
        "description": "Master the challenges of the Fire Realm by completing these sequential trials of flame and courage.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_walkers.png",
        "taskGroupType": "step_series"
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_whispers_journey",
        "name": "Forest Whispers Journey",
        "description": "Discover the secrets of the Forest of Whispers through this progressive sequence of mystical tasks.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_journey.png",
        "taskGroupType": "step_series"
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

### Retrieve Active Step Series with Task Details and Rewards

In this example, we retrieve only step series that are currently active, including their constituent tasks and rewards. This is useful for displaying current progression paths and their potential rewards to players.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return active progression sequences like the "Forest Whispers Journey," showing each sequential task such as "Discover the Ancient Grove," "Communicate with Forest Spirits," and "Retrieve the Whisperwood Artifact," along with the rewards players will earn at each step. This detailed view helps players understand the path ahead and the valuable items, currencies, or abilities they can gain by completing each task in sequence, encouraging them to progress through the narrative journey of the Forest of Whispers realm.

#### Request

```
POST /v2/client/app/get-step-series
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "scheduleStatuses": ["in progress"],
  "attributes": ["tasks", "tasks.rewardDetails"]
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "success",
  "code": 200,
  "message": "Get Step Series List",
  "errors": [],
  "data": {
    "stepSeries": [
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_whispers_journey",
        "name": "Forest Whispers Journey",
        "description": "Discover the secrets of the Forest of Whispers through this progressive sequence of mystical tasks.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_journey.png",
        "taskGroupType": "step_series",
        "tasks": [
          {
            "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
            "id": "discover_ancient_grove",
            "type": "static",
            "name": "Discover the Ancient Grove",
            "description": "Find the hidden Ancient Grove at the heart of the Forest of Whispers.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ancient_grove.png",
            "event": {
              "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
              "name": "player_logged_in_with_custom_id"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                  "id": "forest_map",
                  "name": "Detailed Forest Map",
                  "description": "A magical map that reveals hidden paths in the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_map.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Magical energy collected from the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 50
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
            "id": "communicate_forest_spirits",
            "type": "static",
            "name": "Communicate with Forest Spirits",
            "description": "Learn to speak with the ancient spirits that dwell within the Forest of Whispers.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_spirits.png",
            "event": {
              "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
              "name": "wallet_balance_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
                  "id": "spirit_whistle",
                  "name": "Spirit Whistle",
                  "description": "A whistle carved from ancient wood that can summon friendly forest spirits.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/spirit_whistle.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Magical energy collected from the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 100
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
            "id": "retrieve_whisperwood_artifact",
            "type": "static",
            "name": "Retrieve the Whisperwood Artifact",
            "description": "Find and recover the ancient Whisperwood Artifact from the deepest part of the forest.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/whisperwood_artifact.png",
            "event": {
              "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
              "name": "progression_marker_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
                  "id": "whisperwood_artifact",
                  "name": "Whisperwood Artifact",
                  "description": "An ancient relic that grants the bearer the ability to understand all languages of the forest.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/whisperwood_artifact.png",
                  "amount": 1
                }
              ],
              "bundles": [
                {
                  "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                  "id": "forest_explorer_kit",
                  "name": "Forest Explorer Kit",
                  "description": "Collection of essential tools for exploring the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_explorer_kit.png",
                  "amount": 1
                }
              ],
              "currencies": [
                {
                  "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Magical energy collected from the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 250
                }
              ],
              "progressionMarkers": [
                {
                  "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
                  "id": "forest_realm_rank",
                  "name": "Forest Realm Rank",
                  "description": "Your standing and influence within the Forest of Whispers.",
                  "amount": 50
                }
              ]
            }
          }
        ]
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_walkers_path",
        "name": "Fire Walker's Path",
        "description": "Master the challenges of the Fire Realm by completing these sequential trials of flame and courage.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_walkers.png",
        "taskGroupType": "step_series",
        "tasks": [
          {
            "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
            "id": "withstand_heat",
            "type": "static",
            "name": "Withstand the Heat",
            "description": "Prove your resilience by enduring the scorching heat of the Fire Realm's outer ring.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/withstand_heat.png",
            "event": {
              "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
              "name": "player_logged_in_with_custom_id"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
                  "id": "heat_resistant_cloak",
                  "name": "Heat-Resistant Cloak",
                  "description": "A cloak woven with special fibers that provide protection against extreme heat.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/heat_cloak.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
                  "id": "fire_coins",
                  "name": "Fire Coins",
                  "description": "Currency used in the Realm of Fire.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                  "amount": 50
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
            "id": "cross_lava_river",
            "type": "static",
            "name": "Cross the Lava River",
            "description": "Find a way to safely cross the flowing river of lava that separates the outer and inner regions.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_river.png",
            "event": {
              "id": "11abc61d-9e31-4f26-9796-604ee6d1bd00",
              "name": "player_profile_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                  "id": "lava_boots",
                  "name": "Lava Boots",
                  "description": "Special boots that allow brief walks on lava surfaces.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_boots.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
                  "id": "fire_coins",
                  "name": "Fire Coins",
                  "description": "Currency used in the Realm of Fire.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                  "amount": 100
                }
              ],
              "progressionMarkers": []
            }
          }
        ]
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

### Retrieve a Specific Step Series with Complete Details

In this example, we retrieve a specific step series by its ID with all available attributes to get complete information about this progression path.
Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch the complete details for the "Cyber District Initiation" sequence, revealing the full journey a player must take to become integrated into the digital realm. The response would include the sequence of tasks from "Creating a Digital Identity" to "Accessing the Central Data Core," along with unlock requirements (like having reached level 5 in general progression), schedule information showing when this initiation path is available, metadata like difficulty and narrative significance, tags categorizing it as a "beginner" and "story" sequence, and detailed reward information for each step. This comprehensive information allows players to fully understand what's required to begin their journey in the Cyber District, what rewards they'll earn at each step, and how this progression path fits into the broader Arcadia Nexus experience.

#### Request

```
POST /v2/client/app/get-step-series
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "taskGroupIds": ["cyber_district_initiation"],
  "attributes": ["tasks", "unlockConditions", "schedule", "meta", "tags", "tasks.rewardDetails", "tasks.linkedRewardDetails"]
}
```

#### Response

```
200
Headers: {
  "Content-Type": "application/json"
}

Body: {
  "status": "success",
  "code": 200,
  "message": "Get Step Series List",
  "errors": [],
  "data": {
    "stepSeries": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "cyber_district_initiation",
        "name": "Cyber District Initiation",
        "description": "Begin your journey into the digital realm of Arcadia Nexus by completing these sequential challenges.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_initiation.png",
        "taskGroupType": "step_series",
        "meta": {
          "difficulty": "beginner",
          "estimatedTime": "45 minutes",
          "narrativeImportance": "high",
          "requiredLevel": 5
        },
        "tags": [
          "beginner",
          "cyber_district",
          "story",
          "digital",
          "tutorial"
        ],
        "tasks": [
          {
            "uuid": "r8s9t0u1-v2w3-4567-r8s9-t0u1v2w34567",
            "id": "create_digital_identity",
            "type": "static",
            "name": "Create a Digital Identity",
            "description": "Establish your presence in the Cyber District by creating a unique digital identity.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/digital_identity.png",
            "event": {
              "id": "a958649a-d278-4287-8d31-fd7d893723ca",
              "name": "player_signed_up_with_custom_id"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                  "id": "identity_chip",
                  "name": "Identity Chip",
                  "description": "A digital chip that stores your identity credentials in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/identity_chip.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                  "id": "cyber_credits",
                  "name": "Cyber Credits",
                  "description": "Digital currency used in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                  "amount": 50
                }
              ],
              "progressionMarkers": []
            },
            "linkedRewardDetails": {
              "items": [],
              "bundles": [],
              "progressionMarkers": [],
              "currencies": []
            }
          },
          {
            "uuid": "u1v2w3x4-y5z6-7890-u1v2-w3x4y5z67890",
            "id": "hack_security_gate",
            "type": "static",
            "name": "Hack the Security Gate",
            "description": "Break through the first security gate to access the main district hub.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/security_gate.png",
            "event": {
              "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
              "name": "wallet_balance_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "v2w3x4y5-z6a7-8901-v2w3-x4y5z6a78901",
                  "id": "hacking_tool",
                  "name": "Basic Hacking Tool",
                  "description": "A simple device for bypassing basic security systems in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/hacking_tool.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                  "id": "cyber_credits",
                  "name": "Cyber Credits",
                  "description": "Digital currency used in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                  "amount": 100
                }
              ],
              "progressionMarkers": []
            },
            "linkedRewardDetails": {
              "items": [],
              "bundles": [],
              "progressionMarkers": [],
              "currencies": []
            }
          },
          {
            "uuid": "w3x4y5z6-a7b8-9012-w3x4-y5z6a7b89012",
            "id": "access_data_core",
            "type": "static",
            "name": "Access the Central Data Core",
            "description": "Navigate to the heart of the Cyber District and establish a connection with the Central Data Core.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/data_core.png",
            "event": {
              "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
              "name": "progression_marker_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "x4y5z6a7-b8c9-0123-x4y5-z6a7b8c90123",
                  "id": "data_access_key",
                  "name": "Data Access Key",
                  "description": "A cryptographic key that grants access to secure areas of the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/access_key.png",
                  "amount": 1
                }
              ],
              "bundles": [
                {
                  "uuid": "y5z6a7b8-c9d0-1234-y5z6-a7b8c9d01234",
                  "id": "cyber_starter_pack",
                  "name": "Cyber Starter Pack",
                  "description": "A collection of essential tools for navigating and surviving in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_pack.png",
                  "amount": 1
                }
              ],
              "currencies": [
                {
                  "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                  "id": "cyber_credits",
                  "name": "Cyber Credits",
                  "description": "Digital currency used in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                  "amount": 250
                }
              ],
              "progressionMarkers": [
                {
                  "uuid": "z6a7b8c9-d0e1-2345-z6a7-b8c9d0e12345",
                  "id": "cyber_district_rank",
                  "name": "Cyber District Rank",
                  "description": "Your standing and influence within the Cyber District.",
                  "amount": 50
                }
              ]
            },
            "linkedRewardDetails": {
              "items": [],
              "bundles": [],
              "progressionMarkers": [],
              "currencies": []
            }
          }
        ],
        "schedule": {
          "firstInstanceStartDate": "2025-03-01T00:00:00+00:00",
          "firstInstanceEndDate": null,
          "isRecurring": false,
          "intervalUnit": "custom",
          "intervalLength": 1,
          "occurrences": 1,
          "currentInstanceSchedule": {
            "instanceStartDate": "2025-03-01T00:00:00+00:00",
            "instanceEndDate": null,
            "status": "in progress"
          }
        },
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 5,
              "unlockProgressionSystem": {
                "uuid": "a7b8c9d0-e1f2-3456-a7b8-c9d0e1f23456",
                "id": "general_progression",
                "name": "Arcadia Nexus Level"
              }
            }
          ]
        }
      }
    ],
    "totalCount": 1,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

## Additional Information

Retrieves ordered sequences (step series) of tasks that form a ladder of challenges. This endpoint is ideal for progressive sequences where each task must be completed in order, allowing you to create multi-stage journeys, storylines, or achievement paths for players to follow.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

taskGroupIds

 

 

array of strings

 

 

An array of task group IDs that identify the specific step series to retrieve.

 

 

includeInactiveTasks

 

 

boolean

 

 

If true, the response includes tasks that are not currently active in the series.

 

 

limit

 

 

number

 

 

Maximum number of step series to return in a single response.

 

 

offset

 

 

number

 

 

Number of step series to skip for pagination.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to filter step series by specific categories or themes.

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule statuses to filter step series. Possible values: "yet to start", "in progress", "stopped", "expired".

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each step series.

 

 

Available Attributes:

tasks: Additional details about the tasks in the step series.

unlockConditions: An array of conditions required to unlock the step series.

schedule: An object specifying the timing details for the step series.

meta: Additional metadata about the step series.

tags: An array of tags used to categorize and search for the step series.

tasks.rewardDetails: An object containing reward information for completion of each task within the step series. Will only take effect if 'tasks' is included in requested attributes.

tasks.linkedRewardDetails: An object containing reward details that link individual task completion to another player. Will only take effect if 'tasks' is included in requested attributes.

Default Response Fields
By default, the following fields are returned for each step series:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the step series in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the step series.

 

 

name

 

 

string

 

 

Name of the step series.

 

 

description

 

 

string

 

 

Description of the step series.

 

 

iconUrl

 

 

string

 

 

URL to the step series' icon. Can be null.

 

 

taskGroupType

 

 

string

 

 

Type of the task group (always "step_series" for this endpoint).

 

 

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

 

 

Contains the step series information.

 

 

Data Object Structure

Field
Type
Description

stepSeries

 

 

array

 

 

An array of step series objects.

 

 

totalCount

 

 

integer

 

 

Total number of step series available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Step Series Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the step series in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the step series.

 

 

name

 

 

string

 

 

Name of the step series.

 

 

description

 

 

string

 

 

Description of the step series.

 

 

iconUrl

 

 

string

 

 

URL to the step series' icon. Can be null.

 

 

taskGroupType

 

 

string

 

 

Type of the task group (always "step_series").

 

 

Tasks Array (if requested):
Each task in the tasks array includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the task in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the task.

 

 

type

 

 

string

 

 

Type of the task (e.g., "static").

 

 

name

 

 

string

 

 

Name of the task.

 

 

description

 

 

string

 

 

Description of the task. Can be null.

 

 

iconUrl

 

 

string

 

 

URL to the task's icon. Can be null.

 

 

event

 

 

object

 

 

Event that triggers this task. Includes id and name.

 

 

Task Reward Details (if requested):
If tasks.rewardDetails is requested, each task will include:

Field
Type
Description

rewardDetails

 

 

object

 

 

Object containing the rewards for completing the task.

 

 

rewardDetails.items

 

 

array

 

 

Array of item rewards.

 

 

rewardDetails.bundles

 

 

array

 

 

Array of bundle rewards.

 

 

rewardDetails.currencies

 

 

array

 

 

Array of currency rewards.

 

 

rewardDetails.progressionMarkers

 

 

array

 

 

Array of progression marker rewards.

 

 

Task Linked Reward Details (if requested):
If tasks.linkedRewardDetails is requested, each task will include:

Field
Type
Description

linkedRewardDetails

 

 

object

 

 

Object containing linked rewards for completing the task.

 

 

linkedRewardDetails.items

 

 

array

 

 

Array of linked item rewards.

 

 

linkedRewardDetails.bundles

 

 

array

 

 

Array of linked bundle rewards.

 

 

linkedRewardDetails.currencies

 

 

array

 

 

Array of linked currency rewards.

 

 

linkedRewardDetails.progressionMarkers

 

 

array

 

 

Array of linked progression marker rewards.

 

 

Schedule Object (if requested):

Field
Type
Description

firstInstanceStartDate

 

 

string

 

 

The start date of the first instance of this step series.

 

 

firstInstanceEndDate

 

 

string

 

 

The end date of the first instance of this step series. Can be null for open-ended series.

 

 

intervalUnit

 

 

string

 

 

The unit for recurring intervals (e.g., "minutes", "days", "custom").

 

 

intervalLength

 

 

number

 

 

The length of each recurring interval.

 

 

occurrences

 

 

number

 

 

The number of times this step series will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether this step series repeats on a schedule.

 

 

currentInstanceSchedule

 

 

object

 

 

Details about the current active instance of the step series.

 

 

Unlock Conditions Object (if requested):
The unlockConditions object defines what is required to access this step series, which may include progression levels, completion of other tasks, or possession of specific items.
Meta Object (if requested):
The meta object contains additional, step series-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the step series. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each step series.

Filtering by Tags: Use the includeTags parameter to retrieve step series that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of step series.

Schedule Status Filtering: Filter step series by their current schedule status to show only relevant series to players.

Inactive Tasks: By default, inactive tasks are excluded from the response. Set includeInactiveTasks to true to include them.

Task Details: Request the tasks attribute to get detailed information about the individual tasks within each step series.

Ordered Progression: Unlike regular task groups, step series are designed for sequential progression, where tasks must be completed in the order they are presented.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

 
Integration Tips

Visual Progression: Implement a visual path or journey map in your UI to show players their progress through step series, highlighting completed tasks and upcoming challenges.

Reward Previews: Display the cumulative rewards for completing the entire step series to motivate players to progress through all tasks.

Narrative Flow: Use step series to create compelling storylines where each task builds upon the previous one to tell a cohesive narrative about a realm or character.

Guided Tutorials: Implement step series as tutorial sequences that gradually introduce game mechanics and features in a structured, sequential manner.

Achievement Paths: Create achievement paths where completing one task unlocks access to the next, more challenging task, with increasingly valuable rewards.

Cross-Realm Journeys: Design step series that guide players across multiple realms of Arcadia Nexus, encouraging exploration of the entire metaverse.

The Get Step Series endpoint provides the foundation for creating sequential, narrative-driven progression paths in your game. By effectively utilizing this structured approach to ordered task completion, you can create engaging storylines and clear progression paths that guide players through the diverse realms of Arcadia Nexus while providing regular rewards and a sense of accomplishment at each step.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

tasks, objectives, challenges, rewards, sequence, goals, story-progression
