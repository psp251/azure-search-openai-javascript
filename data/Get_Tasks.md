# Get Tasks

**Group:** App

**Description:** Fetches a list of tasks (e.g., quests) used in the game. Supports filtering by task IDs, schedule statuses, and tags, and optionally includes tasks from task groups.

**Route:** /v2/client/app/get-tasks

**Method:** POST

## Parameters

- **taskIds**: An array of task IDs to fetch specific tasks.
- **includeTaskGroupTasks**: If true, include tasks that belong to a task group.
- **offset**: Number of tasks to skip (for pagination).
- **limit**: Maximum number of tasks to return.
- **includeTags**: An array of tags to filter the tasks by (e.g., 'daily', 'event').
- **scheduleStatuses**: An array of schedule statuses to filter tasks.

## Attributes

- **rewardDetails** (object): An object detailing the rewards associated with the entity
- **unlockConditions** (array): An array of conditions required to unlock this entity
- **schedule** (object): An object specifying scheduling details such as start time, end time, or recurrence patterns.
- **parameters** (array): An array of parameters used in the task’s rule. Each parameter specifies a field with its target value and conditions to validate the task.
- **businessLogic** (object): An object that defines the core rule or validation logic of the task.
- **linkedRewardDetails** (object): An object containing reward details that link the task to another player (e.g., referral rewards) so that both players receive a bonus
- **meta** (object): Additional metadata related to the entity
- **tags** (array): An array of tags for categorization and quick search filtering.

## Examples

### Retrieve All Tasks with Default Information

In this example, we retrieve all tasks with minimal default information. This is suitable when you need basic task information for populating a quest journal or task board in your game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all tasks across different realms, allowing the game to present players with a comprehensive list of available quests, challenges, and objectives throughout the metaverse. Players can browse the complete task library to discover activities that interest them, such as the "Fire Essence Collector" in the Fire Realm, "Underwater Treasure Hunter" in the Water Realm, or "Cyber District Infiltration" missions. The game client can then organize these tasks by realm, difficulty, or reward type to help players navigate the extensive options available to them.

 

#### Request

```
POST /v2/client/app/get-tasks
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
  "errors": [],
  "message": "Get all tasks",
  "data": {
    "tasks": [
      {
        "uuid": "7175f985-45c7-4450-84b8-19df69544a68",
        "id": "cyber_district_login",
        "name": "Cyber District Access",
        "description": "Access the Cyber District for the first time to establish your digital presence.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_access.png",
        "sortingOrder": 1,
        "event": {
          "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
          "name": "player_logged_in_with_custom_id"
        },
        "taskGroupDetails": null
      },
      {
        "uuid": "44a5486c-1077-4414-b03f-023d61c9400c",
        "id": "forest_registration",
        "name": "Forest Whispers Initiation",
        "description": "Register your identity with the Forest Spirits to gain access to the mystical paths.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_spirit.png",
        "sortingOrder": 2,
        "event": {
          "id": "a958649a-d278-4287-8d31-fd7d893723ca",
          "name": "player_signed_up_with_custom_id"
        },
        "taskGroupDetails": null
      }
      // Additional tasks omitted for brevity
    ],
    "totalCount": 8,
    "lastUpdate": "2025-04-25T08:35:12.017Z"
  }
}
```

### Retrieve Tasks with Schedule Status Filtering

In this example, we retrieve only tasks that are currently active and available for players to undertake.
Context for Arcadia Nexus:
For Arcadia Nexus, this query would return up to 10 tasks that are currently active across the realms. This is ideal for displaying a "Daily Quests" or "Active Challenges" section in the game interface, showing players only the time-sensitive content they can engage with right now. For example, it might return the "Fire Festival Challenge" during the annual Fire Festival event in the Fire Realm, or "Cyber Security Breach" missions that are only available for a limited time in the Cyber District. By filtering for in-progress tasks, you ensure players aren't shown expired content or future events that aren't yet accessible.

#### Request

```
POST /v2/client/app/get-tasks
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "scheduleStatuses": ["in progress"],
  "limit": 2
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
    "errors": [],
    "message": "Get all tasks",
    "data": {
        "tasks": [
            {
                "uuid": "7175f985-45c7-4450-84b8-19df69544a68",
                "id": "fire_festival_challenge",
                "name": "Fire Festival Challenge",
                "description": "Participate in the annual Fire Festival and complete the flame-walking ritual.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_festival.png",
                "sortingOrder": 10,
                "event": {
                    "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
                    "name": "player_logged_in_with_custom_id"
                },
                "taskGroupDetails": null
            },
            {
                "uuid": "44a5486c-1077-4414-b03f-023d61c9400c",
                "id": "cyber_security_breach",
                "name": "Cyber Security Breach",
                "description": "Investigate and neutralize the security breach in the Central Data Core of the Cyber District.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/data_breach.png",
                "sortingOrder": 15,
                "event": {
                    "id": "a958649a-d278-4287-8d31-fd7d893723ca",
                    "name": "player_signed_up_with_custom_id"
                },
                "taskGroupDetails": null
            }
        ],
        "totalCount": 8,
        "lastUpdate": "2025-04-25T08:35:12.017Z"
    }
}
```

### Retrieve Specific Tasks with Complete Details

In this example, we retrieve specific tasks by their IDs, requesting all available attributes to get complete information about these tasks.
Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch complete details for two specific currency-related tasks. When a player selects these particular quests for detailed viewing, the game can display everything about them: the requirement to collect 200 Fire Essence in the volcanic regions of the Fire Realm or 1000 Nexus Gems throughout the metaverse; rewards like the Fire-Resistant Gloves or Stealth Cloak; prerequisites like reaching level 10 in Fire Realm Mastery or obtaining the Gem Hunter's Map; time limits from the schedule information; and difficulty ratings from the meta data. This comprehensive information helps players decide whether to undertake these specific currency collection challenges and understand exactly what they need to do to complete them.

#### Request

```
POST /v2/client/app/get-tasks
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "taskIds": ["fire_essence_collector", "nexus_gem_hunter"],
  "attributes": ["rewardDetails", "unlockConditions", "schedule", "parameters", "businessLogic", "linkedRewardDetails", "meta", "tags"]
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
  "errors": [],
  "message": "Get all tasks",
  "data": {
    "tasks": [
      {
        "uuid": "820d5568-f349-4020-aa5e-8bb3893d29af",
        "id": "fire_essence_collector",
        "name": "Fire Essence Collector",
        "description": "Collect Fire Essence currency by exploring the volcanic regions of the Fire Realm.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png",
        "sortingOrder": 5,
        "event": {
          "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
          "name": "wallet_balance_updated"
        },
        "taskGroupDetails": null,
        "meta": {
          "difficulty": "medium",
          "recommendedLevel": 15,
          "estimatedTime": "30 minutes"
        },
        "businessLogic": {
          "all": [
            {
              "fact": "currencyId",
              "operator": "equal",
              "value": "fire_essence"
            },
            {
              "fact": "amount",
              "operator": "greaterThanInclusive",
              "value": 200
            }
          ]
        },
        "rewardDetails": {
          "items": [
            {
              "uuid": "f3e2d1c0-b4a5-46b7-8c9d-0e1f2a3b4c5d",
              "id": "fire_resistant_gloves",
              "name": "Fire-Resistant Gloves",
              "description": "Special gloves that allow handling hot objects in the Fire Realm.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_gloves.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "e5d4c3b2-a1b2-43c4-85d6-e7f8a9b0c1d2",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "amount": 50
            }
          ],
          "progressionMarkers": [
            {
              "uuid": "d1c2b3a4-e5f6-47g8-h9i0-j1k2l3m4n5o6",
              "id": "fire_realm_reputation",
              "name": "Fire Realm Reputation",
              "description": "Your standing with the inhabitants of the Fire Realm.",
              "amount": 100
            }
          ]
        },
        "linkedRewardDetails": {
          "items": [],
          "bundles": [],
          "progressionMarkers": [],
          "currencies": []
        },
        "tags": [
          "fire_realm",
          "currency",
          "exploration"
        ],
        "schedule": {
          "firstInstanceStartDate": "2025-04-07 09:55:11+00:00",
          "firstInstanceEndDate": "2025-04-07 10:05:11+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "status": "in progress",
            "instanceStartDate": "2025-04-25 08:35:11+00:00",
            "instanceEndDate": "2025-04-25 08:45:11+00:00"
          }
        },
        "parameters": [
          {
            "name": "currencyId",
            "targetValue": "fire_essence",
            "operator": "equal",
            "dataType": "string",
            "mode": "one-shot",
            "type": "state"
          },
          {
            "name": "amount",
            "targetValue": 200,
            "operator": "greaterThanInclusive",
            "dataType": "integer",
            "mode": "cumulative",
            "type": "statistic"
          }
        ],
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 10,
              "unlockProgressionSystem": {
                "uuid": "a9b8c7d6-e5f4-43g2-h1i0-j9k8l7m6n5o4",
                "id": "fire_realm_progression",
                "name": "Fire Realm Mastery"
              }
            }
          ]
        }
      },
      {
        "uuid": "7d251c87-50a9-4337-9258-3670962b63a0",
        "id": "nexus_gem_hunter",
        "name": "Nexus Gem Hunter",
        "description": "Collect a significant amount of Nexus Gems to unlock premium content throughout Arcadia Nexus.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/gem_hunter.png",
        "sortingOrder": 8,
        "event": {
          "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
          "name": "wallet_balance_updated"
        },
        "taskGroupDetails": null,
        "meta": {
          "difficulty": "hard",
          "recommendedLevel": 25,
          "estimatedTime": "2 hours",
          "primaryReward": "stealth_cloak"
        },
        "businessLogic": {
          "all": [
            {
              "fact": "currencyId",
              "operator": "equal",
              "value": "nexus_gems"
            },
            {
              "fact": "amount",
              "operator": "greaterThanInclusive",
              "value": 1000
            }
          ]
        },
        "rewardDetails": {
          "items": [
            {
              "uuid": "0a3bf17d-f5bf-4635-b3c7-5c3c611f7577",
              "id": "stealth_cloak",
              "name": "Stealth Cloak",
              "description": "A rare cloak that grants temporary invisibility in shadow-filled areas.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/stealth_cloak.png",
              "amount": 1
            }
          ],
          "bundles": [
            {
              "uuid": "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
              "id": "treasure_hunters_pack",
              "name": "Treasure Hunter's Pack",
              "description": "A collection of tools useful for finding hidden treasures.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/treasure_pack.png",
              "amount": 1
            }
          ],
          "currencies": [
            {
              "uuid": "e5d4c3b2-a1b2-43c4-85d6-e7f8a9b0c1d2",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "amount": 250
            }
          ],
          "progressionMarkers": []
        },
        "linkedRewardDetails": {
          "items": [],
          "bundles": [],
          "progressionMarkers": [],
          "currencies": []
        },
        "tags": [
          "premium",
          "currency",
          "collectors"
        ],
        "schedule": {
          "firstInstanceStartDate": "2025-04-07 09:55:11+00:00",
          "firstInstanceEndDate": "2025-04-07 10:05:11+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "status": "in progress",
            "instanceStartDate": "2025-04-25 08:35:11+00:00",
            "instanceEndDate": "2025-04-25 08:45:11+00:00"
          }
        },
        "parameters": [
          {
            "name": "currencyId",
            "targetValue": "nexus_gems",
            "operator": "equal",
            "dataType": "string",
            "mode": "one-shot",
            "type": "state"
          },
          {
            "name": "amount",
            "targetValue": 1000,
            "operator": "greaterThanInclusive",
            "dataType": "integer",
            "mode": "cumulative",
            "type": "statistic"
          }
        ],
        "unlockConditions": {
          "unlockItem": [
            {
              "uuid": "b4c5d6e7-f8g9-h0i1-j2k3-l4m5n6o7p8q9",
              "id": "gem_hunters_map",
              "name": "Gem Hunter's Map",
              "description": "A special map showing gem deposits throughout Arcadia Nexus."
            }
          ]
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T08:35:12.017Z"
  }
}
```

### Filter Tasks by Tags

In this example, we retrieve tasks based on specific tags to find quests of a particular category or theme.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve tasks tagged with "water_realm" (aquatic-themed challenges) or "stealth" (missions requiring sneaking and infiltration). This filtering allows the game to show contextually relevant quests when a player enters specific areas, such as displaying underwater exploration challenges when diving into the Water Realm's depths, or stealth missions when entering the secure districts of the Cyber Realm. Including the rewardDetails attribute ensures players can see that completing the "Underwater Treasure Hunter" task rewards them with a Water Breathing Amulet, while the "Cyber District Infiltration" task grants the Ghost Protocol software for evading detection.

#### Request

```
POST /v2/client/app/get-tasks
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["water_realm", "stealth"],
  "attributes": ["tags", "rewardDetails"]
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
  "errors": [],
  "message": "Get all tasks",
  "data": {
    "tasks": [
      {
        "uuid": "820d5568-f349-4020-aa5e-8bb3893d29af",
        "id": "underwater_treasure",
        "name": "Underwater Treasure Hunter",
        "description": "Navigate the underwater caverns of the Water Realm to find ancient treasures.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/underwater_treasure.png",
        "sortingOrder": 12,
        "event": {
          "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
          "name": "wallet_balance_updated"
        },
        "taskGroupDetails": null,
        "tags": [
          "water_realm",
          "exploration",
          "treasure"
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "f1e2d3c4-b5a6-4798-8ba9-c0d1e2f3a4b5",
              "id": "water_breathing_amulet",
              "name": "Water Breathing Amulet",
              "description": "Allows extended underwater exploration without surfacing.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/water_amulet.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "e5d4c3b2-a1b2-43c4-85d6-e7f8a9b0c1d2",
              "id": "water_essence",
              "name": "Water Essence",
              "description": "Currency used in the Water Realm of Arcadia Nexus.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/water_essence.png",
              "amount": 150
            }
          ],
          "progressionMarkers": []
        }
      },
      {
        "uuid": "7d251c87-50a9-4337-9258-3670962b63a0",
        "id": "cyber_infiltration",
        "name": "Cyber District Infiltration",
        "description": "Infiltrate the secured areas of the Cyber District without being detected.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_infiltration.png",
        "sortingOrder": 18,
        "event": {
          "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
          "name": "wallet_balance_updated"
        },
        "taskGroupDetails": null,
        "tags": [
          "cyber_district",
          "stealth",
          "hacking"
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "0a3bf17d-f5bf-4635-b3c7-5c3c611f7577",
              "id": "ghost_protocol",
              "name": "Ghost Protocol",
              "description": "Software that masks your digital presence in the Cyber District.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ghost_protocol.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "d4c5b6a7-8e9f-0a1b-2c3d-4e5f6a7b8c9d",
              "id": "cyber_credits",
              "name": "Cyber Credits",
              "description": "Digital currency used in the Cyber District.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
              "amount": 500
            }
          ],
          "progressionMarkers": []
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T08:35:12.017Z"
  }
}
```

## Additional Information

Fetches a list of tasks (e.g., quests) used in the game. Supports filtering by task IDs, schedule statuses, and tags, and optionally includes tasks from task groups.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

taskIds

 

 

array of strings

 

 

An array of task IDs to fetch specific tasks.

 

 

includeTaskGroupTasks

 

 

boolean

 

 

If true, include tasks that belong to a task group.

 

 

offset

 

 

number

 

 

Number of tasks to skip (for pagination).

 

 

limit

 

 

number

 

 

Maximum number of tasks to return.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to filter the tasks by (e.g., 'daily', 'event').

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule statuses to filter tasks. Possible values: "yet to start", "in progress", "stopped", "expired".

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each task.

 

 

Available Attributes:

rewardDetails: An object detailing the rewards associated with the task.

unlockConditions: An array of conditions required to unlock this task.

schedule: An object specifying scheduling details such as start time, end time, or recurrence patterns.

parameters: An array of parameters used in the task's rule. Each parameter specifies a field with its target value and conditions to validate the task.

businessLogic: An object that defines the core rule or validation logic of the task.

linkedRewardDetails: An object containing reward details that link the task to another player (e.g., referral rewards).

meta: Additional metadata related to the task.

tags: An array of tags for categorization and quick search filtering.

Default Response Fields
By default, the following fields are returned for each task:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the task in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the task.

 

 

name

 

 

string

 

 

Name of the task.

 

 

description

 

 

string

 

 

Description of the task.

 

 

iconUrl

 

 

string

 

 

URL to the task's icon. Can be null.

 

 

sortingOrder

 

 

number

 

 

Ordering sequence for display. Can be null.

 

 

event

 

 

object

 

 

Event that triggers this task. Includes id and name.

 

 

taskGroupDetails

 

 

object

 

 

Details of the task group this task belongs to, if any. Can be null.

 

 

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

 

 

Contains the tasks information.

 

 

Data Object Structure

Field
Type
Description

tasks

 

 

array

 

 

An array of task objects.

 

 

totalCount

 

 

integer

 

 

Total number of tasks available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Task Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the task in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the task.

 

 

name

 

 

string

 

 

Name of the task.

 

 

description

 

 

string

 

 

Description of the task.

 

 

iconUrl

 

 

string

 

 

URL to the task's icon. Can be null.

 

 

sortingOrder

 

 

number

 

 

Ordering sequence for display. Can be null.

 

 

event

 

 

object

 

 

Event that triggers this task. Includes id and name.

 

 

taskGroupDetails

 

 

object

 

 

Details of the task group this task belongs to, if any. Can be null.

 

 

Event Object Structure:

Field
Type
Description

id

 

 

string

 

 

Unique identifier for the event.

 

 

name

 

 

string

 

 

Name of the event that triggers this task.

 

 

Reward Details Object (if requested):

Field
Type
Description

items

 

 

array

 

 

Array of item rewards with details and quantities.

 

 

bundles

 

 

array

 

 

Array of bundle rewards with details and quantities.

 

 

currencies

 

 

array

 

 

Array of currency rewards with details and amounts.

 

 

progressionMarkers

 

 

array

 

 

Array of progression markers awarded upon completion.

 

 

Schedule Object (if requested):

Field
Type
Description

firstInstanceStartDate

 

 

string

 

 

The start date of the first instance of this task.

 

 

firstInstanceEndDate

 

 

string

 

 

The end date of the first instance of this task. Can be null for open-ended tasks.

 

 

intervalUnit

 

 

string

 

 

The unit for recurring intervals (e.g., "minutes", "days", "custom").

 

 

intervalLength

 

 

number

 

 

The length of each recurring interval.

 

 

occurrences

 

 

number

 

 

The number of times this task will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether this task repeats on a schedule.

 

 

currentInstanceSchedule

 

 

object

 

 

Details about the current active instance of the task.

 

 

Parameters Array (if requested):
Each parameter in the parameters array includes:

Field
Type
Description

name

 

 

string

 

 

Name of the parameter.

 

 

targetValue

 

 

mixed

 

 

The goal or target value for this parameter.

 

 

operator

 

 

string

 

 

Comparison operator (e.g., "equal", "greaterThanInclusive").

 

 

dataType

 

 

string

 

 

Data type of the parameter (e.g., "string", "integer").

 

 

mode

 

 

string

 

 

Mode of parameter tracking (e.g., "one-shot", "cumulative").

 

 

type

 

 

string

 

 

Type of parameter (e.g., "state", "statistic").

 

 

Business Logic Object (if requested):
The businessLogic object defines the rules that determine when a task is completed, using a structure of facts, operators, and values. It typically contains an "all" or "any" array of conditions, where each condition has a "fact", "operator", and "value" property.
Meta Object (if requested):
The meta object contains additional, task-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the task. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each task.

Filtering by Tags: Use the includeTags parameter to retrieve tasks that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of tasks.

Schedule Status Filtering: Filter tasks by their current schedule status to show only relevant tasks to players.

Task Groups: Some tasks may be part of larger task groups or missions. Use includeTaskGroupTasks to either include or exclude these tasks.

Event Triggers: Each task is associated with an event that triggers its activation or progress tracking.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Examples Overview
Below are examples of different usage scenarios of the Get Tasks endpoint in the context of Arcadia Nexus.
Integration Tips

Task Categorization: Use tags to categorize tasks into types (daily, weekly, story, side-quest) and realms (Fire Realm, Forest of Whispers, Cyber District) for better organization in your UI.

Progressive Disclosure: Only show tasks that are currently relevant to the player's level, location, or progress to avoid overwhelming them with too many options across multiple realms.

Visual Indicators: Use the schedule information to display time-sensitive visual indicators (e.g., countdown timers) for limited-time events like the Fire Festival Challenge.

Reward Preview: Prominently display the rewards for each task to motivate players to complete them, such as showing the unique realm-specific items and currencies they can earn.

Contextual Grouping: Group related tasks together in your interface to create meaningful quest lines or themed challenges within each realm.

The Get Tasks endpoint provides the foundation for creating engaging quest systems, daily challenges, achievement tracking, and guided progression in your game. By effectively utilizing the rich task data available through this endpoint, you can create dynamic and engaging quest experiences that adapt to player progress, location, and interests across the diverse realms of Arcadia Nexus.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

tasks, quests, achievements, tutorial, missions, objectives, goals
