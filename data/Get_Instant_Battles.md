# Get Instant Battles

**Group:** App

**Description:** Retrieves data for instant battles - competitions based on a single instance of a match. Filter instant battles by competition IDs, match IDs, search keywords, and schedule statuses.

**Route:** /v2/client/app/get-instant-battles

**Method:** POST

## Parameters

- **competitionIds**: An array of competition IDs to filter instant battles.
- **matchIds**: An array of match IDs to narrow down instant battle records.
- **offset**: Number of instant battle records to skip (for pagination).
- **limit**: Maximum number of instant battles to return.
- **includeTags**: An array of tags to further refine or annotate instant battle data
- **search**: A keyword for searching instant battle titles.
- **scheduleStatuses**: An array of schedule statuses for filtering instant battles.",

## Attributes

- **schedule** (object): Timing details for the event including initial instance dates, recurrence settings, and details of the current instance.
- **unlockConditions** (array): Conditions that must be met to participate in the event.
- **prizeDistribution** (object): Rules for distributing prizes across different ranks in the event.
- **entryFees** (object): Details about the entry fees for the event.
- **meta** (object): Additional metadata about the event.
- **tags** (array): An array of tags used to categorize the event.

## Examples

### Retrieve All Instant Battles with Default Information

In this example, we retrieve all instant battles with minimal default information. This is suitable when you need basic instant battle information for displaying a list of available quick competitions in your game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all instant battles available across the different realms, such as the "Fire Realm Lava Race," "Forest of Whispers Quick Challenge," and "Cyber District Hack-a-thon." Players can browse these quick competitions to see what events are available for immediate participation without requiring detailed information about each battle's structure, rewards, or schedule.

#### Request

```
POST /v2/client/app/get-instant-battles
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
  "message": "InstantBattle list",
  "errors": [],
  "data": {
    "instantbattle": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "fire_realm_lava_race",
        "name": "Fire Realm Lava Race",
        "description": "Race across flowing lava in the Realm of Fire to claim the top prize.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_race.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 4,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
          "id": "fire_realm_race_match",
          "name": "Fire Realm Race",
          "description": "Timed race across hazardous terrain in the Fire Realm",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_race.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        }
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_whispers_quick",
        "name": "Forest of Whispers Quick Challenge",
        "description": "A rapid navigation challenge through the shifting paths of the Forest of Whispers.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_quick.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 3,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "forest_exploration_match",
          "name": "Forest Exploration Challenge",
          "description": "A serene journey through the mystical Forest of Whispers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_exploration.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        }
      },
      {
        "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
        "id": "cyber_district_hackathon",
        "name": "Cyber District Hack-a-thon",
        "description": "A fast-paced hacking competition in the Cyber District. Crack the code before anyone else.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_hackathon.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 5,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
          "id": "cyber_hacking_match",
          "name": "Cyber Hacking Challenge",
          "description": "Test your hacking skills against complex encryption systems",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_hacking.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        }
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

### Retrieve Active Instant Battles with Prize Distribution

In this example, we retrieve only instant battles that are currently active, including their prize distribution details. This is useful for showing players the ongoing instant battles and the rewards they can earn by participating.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return instant battles like the "Fire Realm Obstacle Course" that are currently running, along with detailed prize information showing that the top 5 players will receive Fire-Resistant Gloves and Fire Coins, while players ranking 6-10 will receive smaller amounts of Fire Coins. The schedule information would show when the instant battle started and when it will end, helping players decide if they have enough time to participate and compete for these rewards.

#### Request

```
POST /v2/client/app/get-instant-battles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "scheduleStatuses": ["in progress"],
  "attributes": ["prizeDistribution", "schedule"]
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
  "message": "InstantBattle list",
  "errors": [],
  "data": {
    "instantbattle": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "fire_realm_obstacle",
        "name": "Fire Realm Obstacle Course",
        "description": "Navigate through the treacherous obstacles of the Fire Realm to claim your prize.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_obstacle.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 3,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
          "id": "fire_obstacle_match",
          "name": "Fire Realm Obstacles",
          "description": "Navigate through dangerous fire obstacles to reach the finish",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_obstacles.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 5,
              "rewardDetails": {
                "items": [
                  {
                    "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
                    "id": "fire_resistant_gloves",
                    "name": "Fire-Resistant Gloves",
                    "description": "Special gloves that provide protection against extreme heat and allow handling of hot objects.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_gloves.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
                    "id": "fire_coins",
                    "name": "Fire Coins",
                    "description": "Currency used in the Realm of Fire.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                    "amount": 100
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            },
            {
              "startRank": 6,
              "endRank": 10,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
                    "id": "fire_coins",
                    "name": "Fire Coins",
                    "description": "Currency used in the Realm of Fire.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
                    "amount": 50
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-25T08:00:00+00:00",
          "firstInstanceEndDate": "2025-04-25T20:00:00+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
            "status": "in progress",
            "instanceStartDate": "2025-04-25T12:00:00+00:00",
            "instanceEndDate": "2025-04-25T12:10:00+00:00"
          }
        }
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "cyber_quick_hack",
        "name": "Cyber District Quick Hack",
        "description": "A rapid code-breaking challenge in the Cyber District. First to crack all codes wins.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_quick.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 3,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
          "id": "cyber_hacking_match",
          "name": "Cyber Hacking Challenge",
          "description": "Test your hacking skills against complex encryption systems",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_hacking.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 5,
              "rewardDetails": {
                "items": [
                  {
                    "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
                    "id": "access_key_fragment",
                    "name": "Access Key Fragment",
                    "description": "A fragment of a digital key that provides access to secured areas in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/key_fragment.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 200
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            },
            {
              "startRank": 6,
              "endRank": 10,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 100
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-25T00:00:00+00:00",
          "firstInstanceEndDate": "2025-04-26T00:00:00+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
            "status": "in progress",
            "instanceStartDate": "2025-04-25T12:05:00+00:00",
            "instanceEndDate": "2025-04-25T12:15:00+00:00"
          }
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

### Find Instant Battles by Match ID with Complete Details

In this example, we retrieve instant battles associated with a specific match, including all available attributes to get comprehensive information about these instant battles.
Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch all instant battles associated with the "Forest Exploration Match," such as the "Mystical Tree Hunt" and "Forest Spirit Challenge." The response would include comprehensive details about each instant battle, including the magical Forest Essence and special items awarded to top performers, the battle schedule showing it's available for quick participation throughout the day, entry fees requiring a small amount of Forest Tokens to participate, unlock conditions requiring players to have reached level 5 in the Forest Realm, metadata about difficulty and expected participation levels, and tags categorizing these as "quick," "forest_realm," and "exploration" events. This detailed information allows players to fully understand what's required to participate and what they can gain from these quick forest-themed battles.

#### Request

```
POST /v2/client/app/get-instant-battles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "matchIds": ["forest_exploration_match"],
  "attributes": ["prizeDistribution", "schedule", "entryFees", "unlockConditions", "meta", "tags"]
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
  "message": "InstantBattle list",
  "errors": [],
  "data": {
    "instantbattle": [
      {
        "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
        "id": "mystical_tree_hunt",
        "name": "Mystical Tree Hunt",
        "description": "Race to find the hidden Mystical Trees scattered throughout the Forest of Whispers.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/tree_hunt.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 3,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "forest_exploration_match",
          "name": "Forest Exploration Challenge",
          "description": "A serene journey through the mystical Forest of Whispers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_exploration.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 5,
              "rewardDetails": {
                "items": [
                  {
                    "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
                    "id": "mystical_seed",
                    "name": "Mystical Seed",
                    "description": "A rare seed from the Mystical Trees of the Forest of Whispers. Can be planted to grow special items.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/mystical_seed.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Magical energy collected from the Forest of Whispers.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "amount": 100
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            },
            {
              "startRank": 6,
              "endRank": 10,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Magical energy collected from the Forest of Whispers.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "amount": 50
                  }
                ],
                "bundles": [],
                "progressionMarkers": []
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-01T00:00:00+00:00",
          "firstInstanceEndDate": "2025-06-30T23:59:59+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "r8s9t0u1-v2w3-4567-r8s9-t0u1v2w34567",
            "status": "in progress",
            "instanceStartDate": "2025-04-25T12:00:00+00:00",
            "instanceEndDate": "2025-04-25T12:10:00+00:00"
          }
        },
        "entryFees": [
          {
            "currencies": [
              {
                "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                "id": "forest_tokens",
                "name": "Forest Tokens",
                "description": "Special tokens required for events in the Forest of Whispers.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_tokens.png",
                "amount": 2
              }
            ],
            "items": []
          }
        ],
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 5,
              "unlockProgressionSystem": {
                "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                "id": "forest_realm_progression",
                "name": "Forest Realm Level"
              }
            }
          ]
        },
        "meta": {
          "difficulty": "easy",
          "estimatedTime": "10 minutes",
          "participantLimit": 3,
          "seasonalEvent": false,
          "recommendedLevel": 5
        },
        "tags": [
          "quick",
          "forest_realm",
          "exploration",
          "beginner_friendly"
        ]
      },
      {
        "uuid": "u1v2w3x4-y5z6-7890-u1v2-w3x4y5z67890",
        "id": "forest_spirit_challenge",
        "name": "Forest Spirit Challenge",
        "description": "Communicate with the forest spirits and solve their riddles before time runs out.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/spirit_challenge.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 3,
          "maxEntryAllowed": null,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 3,
          "name": "Instant Battle"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
          "id": "forest_exploration_match",
          "name": "Forest Exploration Challenge",
          "description": "A serene journey through the mystical Forest of Whispers",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_exploration.png",
          "winCondition": {
            "id": 1,
            "name": "higher"
          },
          "outcomeType": null
        },
        "prizeDistribution": {
          "rules": [
            {
              "startRank": 1,
              "endRank": 5,
              "rewardDetails": {
                "items": [
                  {
                    "uuid": "v2w3x4y5-z6a7-8901-v2w3-x4y5z6a78901",
                    "id": "spirit_whistle",
                    "name": "Spirit Whistle",
                    "description": "A magical whistle that can summon forest spirits to aid you on your journey.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/spirit_whistle.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Magical energy collected from the Forest of Whispers.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "amount": 150
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "w3x4y5z6-a7b8-9012-w3x4-y5z6a7b89012",
                    "id": "forest_realm_reputation",
                    "name": "Forest Realm Reputation",
                    "description": "Your standing with the spirits of the Forest of Whispers.",
                    "amount": 20
                  }
                ]
              }
            },
            {
              "startRank": 6,
              "endRank": 10,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "forest_essence",
                    "name": "Forest Essence",
                    "description": "Magical energy collected from the Forest of Whispers.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                    "amount": 75
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "w3x4y5z6-a7b8-9012-w3x4-y5z6a7b89012",
                    "id": "forest_realm_reputation",
                    "name": "Forest Realm Reputation",
                    "description": "Your standing with the spirits of the Forest of Whispers.",
                    "amount": 10
                  }
                ]
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-01T00:00:00+00:00",
          "firstInstanceEndDate": "2025-06-30T23:59:59+00:00",
          "intervalUnit": "minutes",
          "intervalLength": 10,
          "occurrences": 10000,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "x4y5z6a7-b8c9-0123-x4y5-z6a7b8c90123",
            "status": "in progress",
            "instanceStartDate": "2025-04-25T12:00:00+00:00",
            "instanceEndDate": "2025-04-25T12:10:00+00:00"
          }
        },
        "entryFees": [
          {
            "currencies": [
              {
                "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                "id": "forest_tokens",
                "name": "Forest Tokens",
                "description": "Special tokens required for events in the Forest of Whispers.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_tokens.png",
                "amount": 3
              }
            ],
            "items": []
          }
        ],
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 8,
              "unlockProgressionSystem": {
                "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                "id": "forest_realm_progression",
                "name": "Forest Realm Level"
              }
            }
          ]
        },
        "meta": {
          "difficulty": "medium",
          "estimatedTime": "10 minutes",
          "participantLimit": 3,
          "seasonalEvent": false,
          "recommendedLevel": 10
        },
        "tags": [
          "quick",
          "forest_realm",
          "spirits",
          "puzzle"
        ]
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

## Additional Information

Retrieves data for instant battles - competitions based on a single instance of a match. This endpoint allows you to fetch instant battle information with various filtering options, including competition IDs, match IDs, schedule statuses, and tags.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

competitionIds

 

 

array of strings

 

 

An array of competition IDs to filter instant battles.

 

 

matchIds

 

 

array of strings

 

 

An array of match IDs to narrow down instant battle records.

 

 

offset

 

 

number

 

 

Number of instant battle records to skip (for pagination).

 

 

limit

 

 

number

 

 

Maximum number of instant battles to return.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to further refine or annotate instant battle data.

 

 

search

 

 

string

 

 

A keyword for searching instant battle titles.

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule statuses for filtering instant battles. Possible values: "yet to start", "in progress", "completed", "in review", "stopped", "failed".

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each instant battle.

 

 

Available Attributes:

schedule: Timing details for the event including initial instance dates, recurrence settings, and details of the current instance.

unlockConditions: Conditions that must be met to participate in the event.

prizeDistribution: Rules for distributing prizes across different ranks in the event.

entryFees: Details about the entry fees for the event.

meta: Additional metadata about the event.

tags: An array of tags used to categorize the event.

Default Response Fields
By default, the following fields are returned for each instant battle:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the instant battle in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the instant battle.

 

 

name

 

 

string

 

 

Name of the instant battle.

 

 

description

 

 

string

 

 

Description of the instant battle.

 

 

iconUrl

 

 

string

 

 

URL to the instant battle's icon. Can be null.

 

 

type

 

 

object

 

 

Type of the battle. Includes id and name.

 

 

sourceType

 

 

object

 

 

Source type of the battle. Includes id and name.

 

 

match

 

 

object

 

 

Information about the associated match.

 

 

config

 

 

object

 

 

Configuration settings for the instant battle.

 

 

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

 

 

Contains the instant battles information.

 

 

Data Object Structure

Field
Type
Description

instantbattle

 

 

array

 

 

An array of instant battle objects.

 

 

totalCount

 

 

integer

 

 

Total number of instant battles available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Instant Battle Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the instant battle in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the instant battle.

 

 

name

 

 

string

 

 

Name of the instant battle.

 

 

description

 

 

string

 

 

Description of the instant battle.

 

 

iconUrl

 

 

string

 

 

URL to the instant battle's icon. Can be null.

 

 

type

 

 

object

 

 

Type of the battle. Includes id and name.

 

 

sourceType

 

 

object

 

 

Source type of the battle. Includes id and name.

 

 

match

 

 

object

 

 

Information about the associated match.

 

 

config

 

 

object

 

 

Configuration settings for the instant battle.

 

 

Config Object Structure:

Field
Type
Description

minPlayers

 

 

integer

 

 

Minimum number of players required for the instant battle.

 

 

maxPlayers

 

 

integer

 

 

Maximum number of players allowed in the instant battle.

 

 

maxEntryAllowed

 

 

integer

 

 

Maximum number of entries allowed per player. Can be null.

 

 

maxAttemptAllowed

 

 

integer

 

 

Maximum number of attempts allowed per player.

 

 

Match Object Structure:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the match.

 

 

id

 

 

string

 

 

Client-defined identifier for the match.

 

 

name

 

 

string

 

 

Name of the match.

 

 

description

 

 

string

 

 

Description of the match. Can be null.

 

 

iconUrl

 

 

string

 

 

URL to the match's icon. Can be null.

 

 

winCondition

 

 

object

 

 

Win condition for the match. Includes id and name.

 

 

outcomeType

 

 

object

 

 

Outcome type for the match. Can be null.

 

 

Prize Distribution Object (if requested):

Field
Type
Description

rules

 

 

array

 

 

Array of prize distribution rules.

 

 

Each rule in the rules array includes:

Field
Type
Description

startRank

 

 

integer

 

 

Starting rank for this prize rule.

 

 

endRank

 

 

integer

 

 

Ending rank for this prize rule.

 

 

rewardDetails

 

 

object

 

 

Details of rewards for this rank range.

 

 

The rewardDetails object includes:

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

 

 

Array of progression markers awarded.

 

 

Each reward item (in items, bundles, currencies, or progressionMarkers) includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the reward item.

 

 

id

 

 

string

 

 

Client-defined identifier for the reward item.

 

 

name

 

 

string

 

 

Name of the reward item.

 

 

description

 

 

string

 

 

Description of the reward item.

 

 

iconUrl

 

 

string

 

 

URL to the reward item's icon. Can be null.

 

 

amount

 

 

number

 

 

Quantity of the reward item to be given.

 

 

Schedule Object (if requested):

Field
Type
Description

firstInstanceStartDate

 

 

string

 

 

The start date of the first instance of this instant battle.

 

 

firstInstanceEndDate

 

 

string

 

 

The end date of the first instance of this instant battle. Can be null for open-ended battles.

 

 

intervalUnit

 

 

string

 

 

The unit for recurring intervals (e.g., "minutes", "days", "custom").

 

 

intervalLength

 

 

number

 

 

The length of each recurring interval.

 

 

occurrences

 

 

number

 

 

The number of times this instant battle will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether this instant battle repeats on a schedule.

 

 

currentInstanceSchedule

 

 

object

 

 

Details about the current active instance of the instant battle.

 

 

The currentInstanceSchedule object includes:

Field
Type
Description

instanceId

 

 

string

 

 

Unique identifier for the current instance.

 

 

status

 

 

string

 

 

Current status of the instant battle (e.g., "in progress", "yet to start").

 

 

instanceStartDate

 

 

string

 

 

Start date of the current instance.

 

 

instanceEndDate

 

 

string

 

 

End date of the current instance. Can be null.

 

 

Entry Fees Object (if requested):
The entryFees object includes details about the costs to enter the instant battle, which can be either currencies or items.
Unlock Conditions Object (if requested):
The unlockConditions object defines what is required to access this instant battle, which may include progression levels, completion of other tasks, or possession of specific items.
Meta Object (if requested):
The meta object contains additional, instant battle-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the instant battle. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each instant battle.

Filtering by Tags: Use the includeTags parameter to retrieve instant battles that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of instant battles.

Schedule Status Filtering: Filter instant battles by their current schedule status to show only relevant battles to players.

Search Functionality: Use the search parameter to find instant battles by name, making it easier for players to locate specific competitions.

Match and Competition Filtering: Use matchIds and competitionIds to focus on instant battles associated with specific matches or competitions.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Integration Tips

Quick-Join Features: Create a dedicated section in your UI for instant battles that allows players to quickly find and join available competitions without navigating through multiple screens.

Rewards Preview: Prominently display the prize distribution for instant battles to motivate players to participate, showcasing the valuable items and currencies they can win.

Entry Requirements: Clearly communicate any entry fees or unlock conditions required to participate in instant battles, helping players prepare accordingly.

Real-time Availability: Use the schedule information to display which instant battles are currently available for participation, and how much time remains before they end.

Battle Categories: Organize instant battles by realm or theme using the tags attribute, making it easier for players to find competitions that interest them.

Instant Battle Notifications: Implement a notification system that alerts players when new instant battles become available in their favorite realms or categories.

The Get Instant Battles endpoint provides the foundation for creating engaging quick-play competitive experiences in your game. By effectively utilizing instant battles, you can foster a competitive community, encourage regular participation with minimal time commitment, and provide exciting rewards that enhance the player experience across the diverse realms of Arcadia Nexus.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

esports, competitions, matches, prize-distribution, rewards, play, battle
