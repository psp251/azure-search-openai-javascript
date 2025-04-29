# Get Leaderboards

**Group:** App

**Description:** Retrieves leaderboards in the app. This endpoint supports filtering by leaderboard IDs, match IDs, and keywords, along with pagination and optional inclusion of extra attributes and tags.

**Route:** /v2/client/app/get-leaderboards

**Method:** POST

## Parameters

- **leaderboardIds**: An array of leaderboard IDs to fetch specific leaderboards.
- **matchIds**: An array of match IDs to filter leaderboards by specific matches.
- **offset**: Number of leaderboard records to skip (for pagination).
- **limit**: Maximum number of leaderboard records to return.
- **search**: A keyword for searching across leaderboard names.
- **includeTags**: An array of tags to further filter or annotate leaderboard data.
- **scheduleStatuses**: An array of schedule statuses to filter leaderboards by timing

## Attributes

- **schedule** (object): An object that defines the timing details for the leaderboard, such as start time, end time, and refresh intervals.
- **prizeDistribution** (object): An object that outlines how prizes are allocated across different leaderboard rankings, including tier thresholds and reward amounts.
- **meta** (object): Additional metadata about the leaderboard
- **tags** (array): An array of tags used to categorize or filter the leaderboard (e.g., 'seasonal', 'ranked', 'special-event').

## Examples

### Retrieve All Leaderboards with Basic Information

In this example, we retrieve all leaderboards with their basic information. This is useful for displaying an overview of all competitive opportunities available to players.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all leaderboards across the different realms, such as the "Fire Realm Champion Leaderboard," "Forest Explorer Leaderboard," and "Cyber District Hacker Leaderboard." Players can see all available competitive opportunities and decide which leaderboards they want to participate in.

#### Request

```
POST /v2/client/app/get-leaderboards
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
  "message": "Leaderboard list",
  "errors": [],
  "data": {
    "leaderboards": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "fire_realm_champion",
        "name": "Fire Realm Champion Leaderboard",
        "description": "Compete to become the ultimate master of the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_champion.png",
        "rankingMethod": {
          "id": 1,
          "name": "high_score"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
          "id": "fire_realm_trial",
          "name": "Fire Realm Trial",
          "description": "Navigate through challenges in the Realm of Fire",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_trial.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        }
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_explorer",
        "name": "Forest Explorer Leaderboard",
        "description": "Track your exploration prowess in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_explorer.png",
        "rankingMethod": {
          "id": 5,
          "name": "cumulative_score"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "forest_exploration",
          "name": "Forest Exploration",
          "description": "Discover hidden secrets in the Forest of Whispers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_exploration.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        }
      },
      {
        "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
        "id": "cyber_hacker",
        "name": "Cyber District Hacker Leaderboard",
        "description": "Compete against other hackers in the Cyber District",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_hacker.png",
        "rankingMethod": {
          "id": 1,
          "name": "high_score"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
          "id": "hacking_challenge",
          "name": "Hacking Challenge",
          "description": "Test your hacking skills in the Cyber District",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/hacking_challenge.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        }
      },
      {
        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
        "id": "time_trial_master",
        "name": "Time Trial Master Leaderboard",
        "description": "Race against time in challenges across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_master.png",
        "rankingMethod": {
          "id": 2,
          "name": "time_trial"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
          "id": "time_trial_race",
          "name": "Time Trial Race",
          "description": "Complete the course as quickly as possible",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_race.png",
          "winCondition": {
            "id": 2,
            "name": "lower"
          },
          "outcomeType": {
            "id": 2,
            "name": "time_trial"
          }
        }
      }
    ],
    "totalCount": 12,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Retrieve Active Leaderboards with Prize Information

In this example, we retrieve only active leaderboards along with their prize distribution details. This is useful for showing players the current competitive events and the rewards they can earn.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all currently active leaderboards, such as the "Weekly Fire Battle," "Daily Forest Challenge," or "Cyber Tournament." Including the prizeDistribution attribute provides details about the rewards players can earn for achieving different ranks, motivating them to participate and compete for top positions.

#### Request

```
POST /v2/client/app/get-leaderboards
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "scheduleStatuses": ["in progress"],
  "attributes": ["prizeDistribution"]
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
  "message": "Leaderboard list",
  "errors": [],
  "data": {
    "leaderboards": [
      {
        "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
        "id": "weekly_fire_battle",
        "name": "Weekly Fire Battle",
        "description": "Weekly competition in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/weekly_fire_battle.png",
        "rankingMethod": {
          "id": 1,
          "name": "high_score"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
          "id": "fire_battleground",
          "name": "Fire Battleground",
          "description": "Combat arena in the heart of the Realm of Fire",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_battleground.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 1,
              "rewardDetails": {
                "currencies": [
                  {
                    "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                    "id": "fire_coins",
                    "name": "Fire Coins",
                    "description": "Currency used in the Realm of Fire",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                    "code": "FC",
                    "type": "virtual",
                    "amount": 5000
                  }
                ],
                "items": [
                  {
                    "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
                    "id": "champion_flame_sword",
                    "name": "Champion's Flame Sword",
                    "description": "A powerful sword awarded to the Fire Battle champion",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/champion_flame_sword.png",
                    "quantity": 1
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                    "id": "fire_essence",
                    "name": "Fire Essence",
                    "description": "A magical essence used for fire-based abilities",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png",
                    "amount": 1000
                  }
                ]
              }
            },
            {
              "startRank": 2,
              "endRank": 5,
              "rewardDetails": {
                "currencies": [
                  {
                    "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                    "id": "fire_coins",
                    "name": "Fire Coins",
                    "description": "Currency used in the Realm of Fire",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                    "code": "FC",
                    "type": "virtual",
                    "amount": 2500
                  }
                ],
                "items": [],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                    "id": "fire_essence",
                    "name": "Fire Essence",
                    "description": "A magical essence used for fire-based abilities",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png",
                    "amount": 500
                  }
                ]
              }
            },
            {
              "startRank": 6,
              "endRank": 20,
              "rewardDetails": {
                "currencies": [
                  {
                    "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                    "id": "fire_coins",
                    "name": "Fire Coins",
                    "description": "Currency used in the Realm of Fire",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                    "code": "FC",
                    "type": "virtual",
                    "amount": 1000
                  }
                ],
                "items": [],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                    "id": "fire_essence",
                    "name": "Fire Essence",
                    "description": "A magical essence used for fire-based abilities",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essence.png",
                    "amount": 250
                  }
                ]
              }
            }
          ],
          "timeOffsetSeconds": "0"
        }
      },
      {
        "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
        "id": "daily_forest_challenge",
        "name": "Daily Forest Challenge",
        "description": "Daily puzzle in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/daily_forest_challenge.png",
        "rankingMethod": {
          "id": 1,
          "name": "high_score"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
          "id": "forest_puzzle",
          "name": "Forest Puzzle",
          "description": "Solve the ancient puzzles of the Forest of Whispers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_puzzle.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 3,
              "rewardDetails": {
                "currencies": [
                  {
                    "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Currency used in the Forest of Whispers",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "code": "FE",
                    "type": "virtual",
                    "amount": 1000
                  }
                ],
                "items": [],
                "bundles": [],
                "progressionMarkers": []
              }
            },
            {
              "startRank": 4,
              "endRank": 10,
              "rewardDetails": {
                "currencies": [
                  {
                    "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Currency used in the Forest of Whispers",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "code": "FE",
                    "type": "virtual",
                    "amount": 500
                  }
                ],
                "items": [],
                "bundles": [],
                "progressionMarkers": []
              }
            }
          ],
          "timeOffsetSeconds": "0"
        }
      }
    ],
    "totalCount": 5,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

### Filter Leaderboards by Match ID

In this example, we filter leaderboards by a specific match type. This is useful when players want to compete in a particular type of challenge or game mode.

 

Context for Arcadia Nexus:
For Arcadia Nexus, this would return all leaderboards associated with the "Time Trial Race" match, such as different time-based racing challenges across various realms. Including the schedule and tags attributes provides additional information about when these leaderboards are active and their specific characteristics.

#### Request

```
POST /v2/client/app/get-leaderboards
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "matchIds": ["time_trial_race"],
  "attributes": ["schedule", "tags"]
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
  "message": "Leaderboard list",
  "errors": [],
  "data": {
    "leaderboards": [
      {
        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
        "id": "time_trial_master",
        "name": "Time Trial Master Leaderboard",
        "description": "Race against time in challenges across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_master.png",
        "rankingMethod": {
          "id": 2,
          "name": "time_trial"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
          "id": "time_trial_race",
          "name": "Time Trial Race",
          "description": "Complete the course as quickly as possible",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_race.png",
          "winCondition": {
            "id": 2,
            "name": "lower"
          },
          "outcomeType": {
            "id": 2,
            "name": "time_trial"
          }
        },
        "schedule": {
          "firstInstanceStartDate": "2025-01-01T00:00:00.000Z",
          "firstInstanceEndDate": null,
          "intervalUnit": "all_time",
          "intervalLength": 1,
          "occurrences": 1,
          "isRecurring": false,
          "currentInstanceSchedule": {
            "instanceId": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
            "status": "in progress",
            "instanceStartDate": "2025-01-01T00:00:00.000Z",
            "instanceEndDate": null
          }
        },
        "tags": [
          "time_trial",
          "racing",
          "all_time"
        ]
      },
      {
        "uuid": "r8s9t0u1-v2w3-4567-r8s9-t0u1v2w34567",
        "id": "weekly_race_challenge",
        "name": "Weekly Race Challenge",
        "description": "Weekly time trial competition across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/weekly_race_challenge.png",
        "rankingMethod": {
          "id": 2,
          "name": "time_trial"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
          "id": "time_trial_race",
          "name": "Time Trial Race",
          "description": "Complete the course as quickly as possible",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_race.png",
          "winCondition": {
            "id": 2,
            "name": "lower"
          },
          "outcomeType": {
            "id": 2,
            "name": "time_trial"
          }
        },
        "schedule": {
          "firstInstanceStartDate": "2025-01-01T00:00:00.000Z",
          "firstInstanceEndDate": "2052-01-01T00:00:00.000Z",
          "intervalUnit": "weeks",
          "intervalLength": 1,
          "occurrences": 1000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
            "status": "in progress",
            "instanceStartDate": "2025-04-22T00:00:00.000Z",
            "instanceEndDate": "2025-04-29T00:00:00.000Z"
          }
        },
        "tags": [
          "time_trial",
          "racing",
          "weekly",
          "competitive"
        ]
      },
      {
        "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
        "id": "fire_realm_race",
        "name": "Fire Realm Race",
        "description": "Speed through the lava fields of the Fire Realm",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_race.png",
        "rankingMethod": {
          "id": 2,
          "name": "time_trial"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
          "id": "time_trial_race",
          "name": "Time Trial Race",
          "description": "Complete the course as quickly as possible",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/time_trial_race.png",
          "winCondition": {
            "id": 2,
            "name": "lower"
          },
          "outcomeType": {
            "id": 2,
            "name": "time_trial"
          }
        },
        "schedule": {
          "firstInstanceStartDate": "2025-03-15T00:00:00.000Z",
          "firstInstanceEndDate": "2025-06-15T00:00:00.000Z",
          "intervalUnit": "days",
          "intervalLength": 1,
          "occurrences": 92,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "u1v2w3x4-y5z6-7890-u1v2-w3x4y5z67890",
            "status": "in progress",
            "instanceStartDate": "2025-04-24T00:00:00.000Z",
            "instanceEndDate": "2025-04-25T00:00:00.000Z"
          }
        },
        "tags": [
          "time_trial",
          "racing",
          "daily",
          "fire_realm",
          "seasonal"
        ]
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-03-25T09:15:30.123Z"
  }
}
```

## Additional Information

Retrieves leaderboards in your application. Leaderboards allow players to compete against each other based on scores, times, or other performance metrics, creating engaging competitive experiences. Use this endpoint to fetch leaderboard information that can be displayed in your client applications or on your website.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

leaderboardIds

 

 

array of strings

 

 

An array of leaderboard IDs to fetch specific leaderboards.

 

 

matchIds

 

 

array of strings

 

 

An array of match IDs to filter leaderboards by specific matches.

 

 

limit

 

 

number

 

 

Maximum number of leaderboard records to return.

 

 

offset

 

 

number

 

 

Number of leaderboard records to skip (for pagination).

 

 

search

 

 

string

 

 

A keyword for searching across leaderboard names.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to further filter or annotate leaderboard data.

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule statuses to filter leaderboards by timing (e.g., "yet to start", "in progress", "completed", "in review", "stopped", "failed").

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each leaderboard.

 

 

Available Attributes:

schedule: Timing details for the leaderboard, such as start time, end time, and refresh intervals.

prizeDistribution: Information about how prizes are allocated across different rankings.

meta: Additional metadata about the leaderboard.

tags: Tags associated with the leaderboard.

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

 

 

Contains the leaderboards information.

 

 

Data Object Structure

Field
Type
Description

leaderboards

 

 

array

 

 

An array of leaderboard objects.

 

 

totalCount

 

 

integer

 

 

Total number of leaderboards available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Leaderboard Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the leaderboard in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the leaderboard.

 

 

name

 

 

string

 

 

Name of the leaderboard.

 

 

description

 

 

string

 

 

Description of the leaderboard.

 

 

iconUrl

 

 

string

 

 

URL to the leaderboard's icon. Can be null if not specified.

 

 

rankingMethod

 

 

object

 

 

The method used to rank players (e.g., high score, time trial, cumulative score).

 

 

sourceType

 

 

object

 

 

The source of the data for the leaderboard (e.g., match, custom).

 

 

match

 

 

object

 

 

If the leaderboard is based on a match, this contains information about that match.

 

 

Ranking Method Object:

Field
Type
Description

id

 

 

number

 

 

Unique identifier of the ranking method.

 

 

name

 

 

string

 

 

Name of the ranking method (e.g., "high_score", "time_trial", "cumulative_score").

 

 

Source Type Object:

Field
Type
Description

id

 

 

number

 

 

Unique identifier of the source type.

 

 

name

 

 

string

 

 

Name of the source type (e.g., "match", "custom").

 

 

Match Object:
When the sourceType is "match", this object includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the match in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the match.

 

 

name

 

 

string

 

 

Name of the match.

 

 

description

 

 

string

 

 

Description of the match.

 

 

iconUrl

 

 

string

 

 

URL to the match's icon.

 

 

winCondition

 

 

object

 

 

The condition for winning the match.

 

 

outcomeType

 

 

object

 

 

The type of outcome for the match.

 

 

Schedule Object (if requested):

Field
Type
Description

firstInstanceStartDate

 

 

string

 

 

Start date of the first instance of the leaderboard.

 

 

firstInstanceEndDate

 

 

string

 

 

End date of the first instance of the leaderboard.

 

 

intervalUnit

 

 

string

 

 

Unit for the interval between instances (e.g., "days", "hours", "minutes", "all_time", "custom").

 

 

intervalLength

 

 

number

 

 

Length of the interval between instances.

 

 

occurrences

 

 

number

 

 

Number of times the leaderboard will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether the leaderboard recurs at regular intervals.

 

 

currentInstanceSchedule

 

 

object

 

 

Information about the current instance of the leaderboard.

 

 

Current Instance Schedule Object:

Field
Type
Description

instanceId

 

 

string

 

 

Unique identifier of the current leaderboard instance.

 

 

status

 

 

string

 

 

Current status of the leaderboard (e.g., "in progress", "completed").

 

 

instanceStartDate

 

 

string

 

 

Start date of the current instance.

 

 

instanceEndDate

 

 

string

 

 

End date of the current instance.

 

 

Prize Distribution Object (if requested):

Field
Type
Description

rules

 

 

array

 

 

Array of rules defining prizes for different ranks.

 

 

timeOffsetSeconds

 

 

string

 

 

Time offset in seconds for prize distribution.

 

 

Prize Distribution Rule Object:

Field
Type
Description

startRank

 

 

number

 

 

Starting rank for this prize tier.

 

 

endRank

 

 

number

 

 

Ending rank for this prize tier.

 

 

rewardDetails

 

 

object

 

 

Details of rewards for this tier.

 

 

Reward Details Object:

Field
Type
Description

currencies

 

 

array

 

 

Array of currency rewards.

 

 

items

 

 

array

 

 

Array of item rewards.

 

 

bundles

 

 

array

 

 

Array of bundle rewards.

 

 

progressionMarkers

 

 

array

 

 

Array of progression marker rewards.

 

 

Meta Object (if requested):
The meta object contains additional, leaderboard-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation.
Tags Array (if requested):
An array of strings representing tags associated with the leaderboard. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each leaderboard.

Filtering by IDs: Use the leaderboardIds or matchIds parameters to retrieve specific leaderboards or leaderboards for specific matches.

Schedule Status: Use the scheduleStatuses parameter to filter leaderboards by their current status (e.g., only show active leaderboards).

Recurring Leaderboards: For recurring leaderboards, the schedule object provides details about the recurrence pattern and current instance.

Prize Distribution: The prizeDistribution attribute provides information about rewards for different rank tiers on the leaderboard.

Pagination: Use limit and offset parameters to paginate through results when dealing with many leaderboards.

Integration Tips

Leaderboard Showcase: Create a dedicated section in your application to showcase active leaderboards, highlighting prizes and time remaining.

Personal Ranking: Display the player's current rank on each leaderboard alongside the leaderboard information, providing immediate context for their performance.

Filtered Views: Allow players to filter leaderboards by realm, match type, or time frame (daily, weekly, all-time) to find competitions that interest them.

Reward Preview: Clearly display the rewards for different rank tiers to motivate participation.

Time Indicators: Use countdown timers for active leaderboards to create urgency and engagement.

The Get Leaderboards endpoint enables you to implement comprehensive competitive features in your game, allowing players to compare their skills, compete for rewards, and engage more deeply with your content. By effectively utilizing this endpoint, you can create compelling competitive experiences that keep players motivated and returning to your game.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

leaderboards, matches, high-score, podium, esports, competetive-play, rewards
