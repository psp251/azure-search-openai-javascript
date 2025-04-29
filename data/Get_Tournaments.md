# Get Tournaments

**Group:** App

**Description:** Retrieves tournament set up in your app. Filter tournaments by competition IDs, match IDs, search keywords, and schedule statuses.

**Route:** /v2/client/app/get-tournaments

**Method:** POST

## Parameters

- **competitionIds**: An array of competition IDs to fetch specific tournaments.
- **matchIds**: An array of match IDs to filter tournaments by specific matches.
- **offset**: Number of tournament records to skip (for pagination).
- **limit**: Maximum number of tournament records to return.
- **includeTags**: An array of tags for filtering tournaments
- **search**: A search keyword to filter tournaments by name
- **scheduleStatuses**: An array of schedule statuses to filter tournaments by timing.

## Attributes

- **schedule** (object): Timing details for the event including initial instance dates, recurrence settings, and details of the current instance.
- **prizeDistribution** (object): Rules for distributing prizes across different ranks in the event.
- **unlockConditions** (array): Conditions that must be met to participate in the event.
- **entryFees** (object): Details about the entry fees for the event.
- **meta** (object): Additional metadata about the event.
- **tags** (array): An array of tags for categorizing the event

## Examples

### Retrieve All Tournaments with Default Information

In this example, we retrieve all tournaments with minimal default information. This is suitable when you need basic tournament information for displaying a list of available competitions in your game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all tournaments available across the different realms, such as the "Fire Realm Championship," "Forest of Whispers Tournament," and "Cyber District Hackathon." Players can browse these competitions to see what events are available across the metaverse without requiring detailed information about each tournament's structure, rewards, or schedule.

#### Request

```
POST /v2/client/app/get-tournaments
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
  "message": "Tournament list",
  "errors": [],
  "data": {
    "tournaments": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "fire_realm_championship",
        "name": "Fire Realm Championship",
        "description": "The ultimate test of skill and courage in the scorching Realm of Fire.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_championship.png",
        "config": {
          "minPlayers": 4,
          "maxPlayers": 100,
          "maxEntryAllowed": 1,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 2,
          "name": "Tournament"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
          "id": "fire_realm_match",
          "name": "Fire Realm Battle",
          "description": "A battle of skill and courage in the heart of the Fire Realm",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_battle.png",
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
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "forest_whispers_tournament",
        "name": "Forest of Whispers Tournament",
        "description": "Navigate the mystical paths of the Forest of Whispers to claim ancient prizes.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_tournament.png",
        "config": {
          "minPlayers": 2,
          "maxPlayers": 50,
          "maxEntryAllowed": 1,
          "maxAttemptAllowed": 2
        },
        "type": {
          "id": 2,
          "name": "Tournament"
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
          "outcomeType": {
            "id": 1,
            "name": "high_score"
          }
        }
      },
      {
        "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
        "id": "cyber_district_hackathon",
        "name": "Cyber District Hackathon",
        "description": "Test your digital skills in the ultimate hacking competition of the Cyber District.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_hackathon.png",
        "config": {
          "minPlayers": 5,
          "maxPlayers": 80,
          "maxEntryAllowed": 1,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 2,
          "name": "Tournament"
        },
        "sourceType": {
          "id": 3,
          "name": "custom"
        },
        "match": {}
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

### Retrieve Active Tournaments with Prize Distribution

In this example, we retrieve only tournaments that are currently active, including their prize distribution details. This is useful for showing players the ongoing tournaments and the rewards they can earn by participating.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return tournaments like the "Weekly Fire Realm Challenge" that are currently running, along with detailed prize information showing that the top 3 players will receive Fire-Resistant Gloves and Fire Coins, while players ranking 4-10 will receive smaller amounts of Fire Coins. The schedule information would show when the tournament started and when it will end, helping players decide if they have enough time to participate and compete for these rewards.

#### Request

```
POST /v2/client/app/get-tournaments
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
    "message": "Tournament list",
    "errors": [],
    "data": {
        "tournaments": [
            {
                "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                "id": "weekly_fire_challenge",
                "name": "Weekly Fire Realm Challenge",
                "description": "A weekly tournament testing players' abilities to navigate the hazards of the Fire Realm.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/weekly_fire.png",
                "config": {
                    "minPlayers": 4,
                    "maxPlayers": 100,
                    "maxEntryAllowed": 1,
                    "maxAttemptAllowed": 3
                },
                "type": {
                    "id": 2,
                    "name": "Tournament"
                },
                "sourceType": {
                    "id": 1,
                    "name": "match"
                },
                "match": {
                    "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
                    "id": "fire_obstacle_match",
                    "name": "Fire Realm Obstacle Course",
                    "description": "Navigate through the treacherous fire obstacles to reach the finish line",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_obstacle.png",
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
                                "items": [
                                    {
                                        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
                                        "id": "fire_resistant_gloves",
                                        "name": "Fire-Resistant Gloves",
                                        "description": "Special gloves that provide protection against extreme heat and allow handling of hot objects.",
                                        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_gloves.png",
                                        "amount": 1
                                    }
                                ],
                                "currencies": [
                                    {
                                        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
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
                            "startRank": 4,
                            "endRank": 10,
                            "rewardDetails": {
                                "items": [],
                                "currencies": [
                                    {
                                        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
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
                    "firstInstanceStartDate": "2025-04-22T09:00:00+00:00",
                    "firstInstanceEndDate": "2025-04-29T09:00:00+00:00",
                    "intervalUnit": "days",
                    "intervalLength": 7,
                    "occurrences": 52,
                    "isRecurring": true,
                    "currentInstanceSchedule": {
                        "instanceId": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
                        "status": "in progress",
                        "instanceStartDate": "2025-04-22T09:00:00+00:00",
                        "instanceEndDate": "2025-04-29T09:00:00+00:00"
                    }
                }
            },
            {
                "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
                "id": "cyber_weekly_challenge",
                "name": "Cyber District Weekly Challenge",
                "description": "Test your hacking skills against other players in this weekly competition.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_weekly.png",
                "config": {
                    "minPlayers": 3,
                    "maxPlayers": 100,
                    "maxEntryAllowed": 1,
                    "maxAttemptAllowed": 2
                },
                "type": {
                    "id": 2,
                    "name": "Tournament"
                },
                "sourceType": {
                    "id": 3,
                    "name": "custom"
                },
                "match": {},
                "prizeDistribution": {
                    "rules": [
                        {
                            "startRank": 1,
                            "endRank": 3,
                            "rewardDetails": {
                                "items": [
                                    {
                                        "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
                                        "id": "digital_access_key",
                                        "name": "Digital Access Key",
                                        "description": "A rare key that grants access to secure areas of the Cyber District.",
                                        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/access_key.png",
                                        "amount": 1
                                    }
                                ],
                                "currencies": [
                                    {
                                        "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
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
                            "startRank": 4,
                            "endRank": 10,
                            "rewardDetails": {
                                "items": [],
                                "currencies": [
                                    {
                                        "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
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
                    "firstInstanceStartDate": "2025-04-20T18:00:00+00:00",
                    "firstInstanceEndDate": "2025-04-27T18:00:00+00:00",
                    "intervalUnit": "days",
                    "intervalLength": 7,
                    "occurrences": 52,
                    "isRecurring": true,
                    "currentInstanceSchedule": {
                        "instanceId": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
                        "status": "in progress",
                        "instanceStartDate": "2025-04-20T18:00:00+00:00",
                        "instanceEndDate": "2025-04-27T18:00:00+00:00"
                    }
                }
            }
        ],
        "totalCount": 2,
        "lastUpdate": "2025-04-25T11:45:17.019Z"
    }
}
```

### Find Tournaments by Match ID with Complete Details

In this example, we retrieve tournaments associated with a specific match, including all available attributes to get comprehensive information about these tournaments.
Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch all tournaments associated with the "Cyber Hacking Match," such as the "Cyber District Elite Hackathon" and "Weekly Code Breaker Challenge." The response would include comprehensive details about each tournament, including the valuable Digital Access Keys and Cyber Credits awarded to top performers, the tournament schedule showing it runs every weekend, entry fees requiring Cyber Tokens to participate, unlock conditions requiring players to have reached level 15 in the Cyber District, metadata about difficulty and expected participation levels, and tags categorizing these as "competitive," "cyber_district," and "hacking" events. This detailed information allows players to fully understand what's required to participate and what they can gain from these specialized tournaments.

#### Request

```
POST /v2/client/app/get-tournaments
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "matchIds": ["cyber_hacking_match"],
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
  "message": "Tournament list",
  "errors": [],
  "data": {
    "tournaments": [
      {
        "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
        "id": "cyber_elite_hackathon",
        "name": "Cyber District Elite Hackathon",
        "description": "The most prestigious hacking competition in the Cyber District, reserved for elite digital specialists.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/elite_hackathon.png",
        "config": {
          "minPlayers": 5,
          "maxPlayers": 50,
          "maxEntryAllowed": 1,
          "maxAttemptAllowed": 1
        },
        "type": {
          "id": 2,
          "name": "Tournament"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
          "id": "cyber_hacking_match",
          "name": "Advanced Encryption Challenge",
          "description": "Break through the most complex encryption systems in the Cyber District",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/encryption_challenge.png",
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
                "items": [
                  {
                    "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
                    "id": "master_access_key",
                    "name": "Master Access Key",
                    "description": "The rarest key in the Cyber District, granting access to all secure areas and databases.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/master_key.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 1000
                  }
                ],
                "bundles": [
                  {
                    "uuid": "r8s9t0u1-v2w3-4567-r8s9-t0u1v2w34567",
                    "id": "elite_hacker_bundle",
                    "name": "Elite Hacker Bundle",
                    "description": "A collection of the most advanced hacking tools available in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/elite_bundle.png",
                    "amount": 1
                  }
                ],
                "progressionMarkers": [
                  {
                    "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                    "id": "cyber_district_reputation",
                    "name": "Cyber District Reputation",
                    "description": "Your standing within the cyber community, determining access to exclusive content.",
                    "amount": 100
                  }
                ]
              }
            },
            {
              "startRank": 2,
              "endRank": 5,
              "rewardDetails": {
                "items": [
                  {
                    "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
                    "id": "advanced_decryption_tool",
                    "name": "Advanced Decryption Tool",
                    "description": "A sophisticated tool for breaking complex encryption systems.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/decryption_tool.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 500
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                    "id": "cyber_district_reputation",
                    "name": "Cyber District Reputation",
                    "description": "Your standing within the cyber community, determining access to exclusive content.",
                    "amount": 50
                  }
                ]
              }
            },
            {
              "startRank": 6,
              "endRank": 20,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 200
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                    "id": "cyber_district_reputation",
                    "name": "Cyber District Reputation",
                    "description": "Your standing within the cyber community, determining access to exclusive content.",
                    "amount": 20
                  }
                ]
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-01-05T10:00:00+00:00",
          "firstInstanceEndDate": "2025-01-07T22:00:00+00:00",
          "intervalUnit": "days",
          "intervalLength": 7,
          "occurrences": 52,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "u1v2w3x4-y5z6-7890-u1v2-w3x4y5z67890",
            "status": "in progress",
            "instanceStartDate": "2025-04-23T10:00:00+00:00",
            "instanceEndDate": "2025-04-25T22:00:00+00:00"
          }
        },
        "entryFees": [
          {
            "currencies": [
              {
                "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                "id": "cyber_tokens",
                "name": "Cyber Tokens",
                "description": "Special tokens required for premium events in the Cyber District.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_tokens.png",
                "amount": 5
              }
            ],
            "items": []
          }
        ],
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 15,
              "unlockProgressionSystem": {
                "uuid": "v2w3x4y5-z6a7-8901-v2w3-x4y5z6a78901",
                "id": "cyber_district_progression",
                "name": "Cyber District Level"
              }
            }
          ]
        },
        "meta": {
          "difficulty": "expert",
          "estimatedDuration": "2-3 hours",
          "participantLimit": 50,
          "requiresVerification": true,
          "spectatorEnabled": true
        },
        "tags": [
          "competitive",
          "cyber_district",
          "hacking",
          "elite",
          "weekly"
        ]
      },
      {
        "uuid": "w3x4y5z6-a7b8-9012-w3x4-y5z6a7b89012",
        "id": "weekly_code_breaker",
        "name": "Weekly Code Breaker Challenge",
        "description": "Weekly tournament for cyber specialists to test their code-breaking abilities.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/code_breaker.png",
        "config": {
          "minPlayers": 3,
          "maxPlayers": 100,
          "maxEntryAllowed": 1,
          "maxAttemptAllowed": 3
        },
        "type": {
          "id": 2,
          "name": "Tournament"
        },
        "sourceType": {
          "id": 1,
          "name": "match"
        },
        "match": {
          "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
          "id": "cyber_hacking_match",
          "name": "Advanced Encryption Challenge",
          "description": "Break through the most complex encryption systems in the Cyber District",
          "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/encryption_challenge.png",
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
                "items": [
                  {
                    "uuid": "x4y5z6a7-b8c9-0123-x4y5-z6a7b8c90123",
                    "id": "code_breaker_badge",
                    "name": "Code Breaker Badge",
                    "description": "A digital badge that proves your code-breaking prowess in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/breaker_badge.png",
                    "amount": 1
                  }
                ],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 300
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                    "id": "cyber_district_reputation",
                    "name": "Cyber District Reputation",
                    "description": "Your standing within the cyber community, determining access to exclusive content.",
                    "amount": 30
                  }
                ]
              }
            },
            {
              "startRank": 4,
              "endRank": 10,
              "rewardDetails": {
                "items": [],
                "currencies": [
                  {
                    "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                    "id": "cyber_credits",
                    "name": "Cyber Credits",
                    "description": "Digital currency used in the Cyber District.",
                    "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                    "amount": 150
                  }
                ],
                "bundles": [],
                "progressionMarkers": [
                  {
                    "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
                    "id": "cyber_district_reputation",
                    "name": "Cyber District Reputation",
                    "description": "Your standing within the cyber community, determining access to exclusive content.",
                    "amount": 15
                  }
                ]
              }
            }
          ]
        },
        "schedule": {
          "firstInstanceStartDate": "2025-03-01T18:00:00+00:00",
          "firstInstanceEndDate": "2025-03-02T18:00:00+00:00",
          "intervalUnit": "days",
          "intervalLength": 7,
          "occurrences": 52,
          "isRecurring": true,
          "currentInstanceSchedule": {
            "instanceId": "y5z6a7b8-c9d0-1234-y5z6-a7b8c9d01234",
            "status": "in progress",
            "instanceStartDate": "2025-04-19T18:00:00+00:00",
            "instanceEndDate": "2025-04-20T18:00:00+00:00"
          }
        },
        "entryFees": [
          {
            "currencies": [
              {
                "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
                "id": "cyber_tokens",
                "name": "Cyber Tokens",
                "description": "Special tokens required for premium events in the Cyber District.",
                "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_tokens.png",
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
                "uuid": "v2w3x4y5-z6a7-8901-v2w3-x4y5z6a78901",
                "id": "cyber_district_progression",
                "name": "Cyber District Level"
              }
            }
          ]
        },
        "meta": {
          "difficulty": "intermediate",
          "estimatedDuration": "1 hour",
          "participantLimit": 100,
          "requiresVerification": false,
          "spectatorEnabled": true
        },
        "tags": [
          "competitive",
          "cyber_district",
          "hacking",
          "beginner_friendly",
          "weekly"
        ]
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:45:17.019Z"
  }
}
```

## Additional Information

Retrieves tournaments set up in your app. This endpoint allows you to fetch tournament information with various filtering options, including competition IDs, match IDs, schedule statuses, and tags.
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

 

 

An array of competition IDs to fetch specific tournaments.

 

 

matchIds

 

 

array of strings

 

 

An array of match IDs to filter tournaments by specific matches.

 

 

offset

 

 

number

 

 

Number of tournament records to skip (for pagination).

 

 

limit

 

 

number

 

 

Maximum number of tournament records to return.

 

 

includeTags

 

 

array of strings

 

 

An array of tags for filtering tournaments.

 

 

search

 

 

string

 

 

A search keyword to filter tournaments by name.

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule statuses to filter tournaments. Possible values: "yet to start", "in progress", "completed", "in review", "stopped", "failed".

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each tournament.

 

 

Available Attributes:

schedule: Timing details for the event including initial instance dates, recurrence settings, and details of the current instance.

prizeDistribution: Rules for distributing prizes across different ranks in the event.

unlockConditions: Conditions that must be met to participate in the event.

entryFees: Details about the entry fees for the event.

meta: Additional metadata about the event.

tags: An array of tags for categorizing the event.

Default Response Fields
By default, the following fields are returned for each tournament:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the tournament in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the tournament.

 

 

name

 

 

string

 

 

Name of the tournament.

 

 

description

 

 

string

 

 

Description of the tournament.

 

 

iconUrl

 

 

string

 

 

URL to the tournament's icon. Can be null.

 

 

type

 

 

object

 

 

Type of the tournament. Includes id and name.

 

 

sourceType

 

 

object

 

 

Source type of the tournament. Includes id and name.

 

 

match

 

 

object

 

 

Information about the associated match (if applicable).

 

 

config

 

 

object

 

 

Configuration settings for the tournament.

 

 

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

 

 

Contains the tournaments information.

 

 

Data Object Structure

Field
Type
Description

tournaments

 

 

array

 

 

An array of tournament objects.

 

 

totalCount

 

 

integer

 

 

Total number of tournaments available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Tournament Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the tournament in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the tournament.

 

 

name

 

 

string

 

 

Name of the tournament.

 

 

description

 

 

string

 

 

Description of the tournament.

 

 

iconUrl

 

 

string

 

 

URL to the tournament's icon. Can be null.

 

 

type

 

 

object

 

 

Type of the tournament. Includes id and name.

 

 

sourceType

 

 

object

 

 

Source type of the tournament. Includes id and name.

 

 

match

 

 

object

 

 

Information about the associated match (if applicable).

 

 

config

 

 

object

 

 

Configuration settings for the tournament.

 

 

Config Object Structure:

Field
Type
Description

minPlayers

 

 

integer

 

 

Minimum number of players required for the tournament.

 

 

maxPlayers

 

 

integer

 

 

Maximum number of players allowed in the tournament.

 

 

maxEntryAllowed

 

 

integer

 

 

Maximum number of entries allowed per player.

 

 

maxAttemptAllowed

 

 

integer

 

 

Maximum number of attempts allowed per player.

 

 

Match Object Structure (for match-based tournaments):

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

 

 

Outcome type for the match. Includes id and name.

 

 

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

 

 

The start date of the first instance of this tournament.

 

 

firstInstanceEndDate

 

 

string

 

 

The end date of the first instance of this tournament. Can be null for open-ended tournaments.

 

 

intervalUnit

 

 

string

 

 

The unit for recurring intervals (e.g., "minutes", "days", "custom").

 

 

intervalLength

 

 

number

 

 

The length of each recurring interval.

 

 

occurrences

 

 

number

 

 

The number of times this tournament will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether this tournament repeats on a schedule.

 

 

currentInstanceSchedule

 

 

object

 

 

Details about the current active instance of the tournament.

 

 

The currentInstanceSchedule object includes:

Field
Type
Description

instanceId

 

 

string

 

 

Unique identifier for the current instance.

 

 

status

 

 

string

 

 

Current status of the tournament (e.g., "in progress", "yet to start").

 

 

instanceStartDate

 

 

string

 

 

Start date of the current instance.

 

 

instanceEndDate

 

 

string

 

 

End date of the current instance. Can be null.

 

 

Entry Fees Object (if requested):
The entryFees object includes details about the costs to enter the tournament, which can be either currencies or items.
Unlock Conditions Object (if requested):
The unlockConditions object defines what is required to access this tournament, which may include progression levels, completion of other tasks, or possession of specific items.
Meta Object (if requested):
The meta object contains additional, tournament-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the tournament. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each tournament.

Filtering by Tags: Use the includeTags parameter to retrieve tournaments that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of tournaments.

Schedule Status Filtering: Filter tournaments by their current schedule status to show only relevant tournaments to players.

Search Functionality: Use the search parameter to find tournaments by name, making it easier for players to locate specific competitions.

Match and Competition Filtering: Use matchIds and competitionIds to focus on tournaments associated with specific matches or competitions.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Integration Tips

Featured Tournaments: Create a dedicated section in your UI to highlight special tournaments, using the tags attribute to identify featured or limited-time events.

Rewards Preview: Prominently display the prize distribution for tournaments to motivate players to participate, showcasing the valuable items and currencies they can win.

Entry Requirements: Clearly communicate any entry fees or unlock conditions required to participate in tournaments, helping players prepare accordingly.

Tournament Schedule: Use the schedule information to display countdown timers for upcoming tournaments or time remaining for ongoing tournaments.

Tournament Categories: Organize tournaments by realm or theme using the tags attribute, making it easier for players to find competitions that interest them.

Progression Path: Create a series of tournaments with increasing difficulty and rewards, using the unlockConditions to ensure players progress through them in the intended order.

The Get Tournaments endpoint provides the foundation for creating engaging competitive experiences in your game. By effectively utilizing tournaments, you can foster a competitive community, encourage regular participation, and provide exciting rewards that enhance the player experience across the diverse realms of Arcadia Nexus.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

tournaments, competitions, leaderboards, esports, rewards, prize-distribution, special-events
