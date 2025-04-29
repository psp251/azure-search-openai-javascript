# Get Missions

**Group:** App

**Description:** Retrieves groups of tasks (missions) such as daily challenges or seasonal objectives. Missions can be filtered by task group IDs and types, schedule statuses, and tags. Optionally include inactive tasks.

**Route:** /v2/client/app/get-missions

**Method:** POST

## Parameters

- **taskGroupIds**: An array of task group IDs used to filter the missions.
- **includeInactiveTasks**: If true, inactive tasks within the mission groups will be included.
- **scheduleStatuses**: An array of schedule status values to filter the missions based on their timing or progress
- **limit**: Maximum number of missions to return in a single response.
- **offset**: Number of missions to skip for pagination.
- **includeTags**: Additional tags to filter or annotate missions.

## Attributes

- **rewardDetails** (object): An object containing reward information for the mission group completion (e.g., bonus XP, virtual currency, items awarded upon completion).
- **unlockConditions** (array): An array of conditions that must be met to unlock the missions, such as level requirements, prerequisite items, or progression milestones.
- **schedule** (object): An object that defines the timing for the mission (e.g., start time, end time, recurrence pattern).
- **tasks** (array): Details about the tasks within the mission group
- **linkedRewardDetails** (object): An object containing reward details that link the task group completion to another player (e.g., referral rewards) so that both players receive a bonus.
- **meta** (object): General metadata for additional context.
- **tags** (array): A searchable list of keywords.
- **tasks.rewardDetails** (object): An object containing reward information for completion of each task within the mission group (e.g., bonus XP, virtual currency, items awarded upon completion of any task). Will only take effect if 'tasks' is included in requested attributes.
- **tasks.linkedRewardDetails** (object): An object containing reward details that link individual task completion within the group to another player (e.g., referral rewards) so that both players receive a bonus. Will only take effect if 'tasks' is included in requested attributes.

## Examples

### Retrieve All Missions with Default Information

In this example, we retrieve all missions with minimal default information. This is suitable when you need basic mission information for displaying a missions board or journal in your game.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all missions across the different realms, providing an overview of the various storylines and challenge series available to players. This data could be used to populate the main Missions Journal interface, showing activities like the "Fire Realm Initiation" series or the "Cyber District Security" mission line without loading detailed task information. Players can browse these mission groups to decide which storylines they want to pursue across the metaverse.

#### Request

```
POST /v2/client/app/get-missions
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
  "message": "Get Mission List",
  "errors": [],
  "data": {
    "missions": [
      {
        "uuid": "088ac37b-d198-4997-9041-8bf3a4c1831a",
        "id": "fire_realm_initiation",
        "name": "Fire Realm Initiation",
        "description": "Complete these tasks to establish yourself as a worthy visitor to the Fire Realm.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_mission.png",
        "taskGroupType": "mission"
      },
      {
        "uuid": "0ff3914f-c890-464f-a015-f8abb2269e64",
        "id": "cyber_district_security",
        "name": "Cyber District Security Protocol",
        "description": "Help secure the central data cores of the Cyber District against external threats.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_security_mission.png",
        "taskGroupType": "mission"
      },
      {
        "uuid": "7cee3b6f-da6c-489c-9855-6e346fd54937",
        "id": "forest_guardian_series",
        "name": "Forest Guardian Series",
        "description": "Protect the ancient trees and spirits of the Forest of Whispers from the encroaching corruption.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_mission.png",
        "taskGroupType": "mission"
      },
      {
        "uuid": "71a8a5e8-7ee5-4f64-a2a1-2d70a49b37e3",
        "id": "nexus_explorer_path",
        "name": "Nexus Explorer Path",
        "description": "Discover hidden portals and secret areas across all realms of Arcadia Nexus.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/explorer_mission.png",
        "taskGroupType": "mission"
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-04-25T11:35:14.014Z"
  }
}
```

### Retrieve Active Missions with Tasks and Rewards

In this example, we retrieve only missions that are currently active, including their tasks and reward details. This is useful for showing players their current mission progress and available rewards.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all currently active mission series with their component tasks and rewards. For example, during the "Cyber Festival" event, players could see the "Digital Liberation" mission series with its individual hacking tasks, each offering specific Cyber Credits or digital artifacts as rewards. The mission completion reward might include a unique "Neural Interface" item that can only be earned by completing the entire series. This comprehensive view helps players prioritize which mission lines to focus on and understand the full progression of rewards they'll earn along the way.

 

#### Request

```
POST /v2/client/app/get-missions
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "scheduleStatuses": ["in progress"],
  "attributes": ["tasks", "rewardDetails", "tasks.rewardDetails"]
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
  "message": "Get Mission List",
  "errors": [],
  "data": {
    "missions": [
      {
        "uuid": "088ac37b-d198-4997-9041-8bf3a4c1831a",
        "id": "digital_liberation",
        "name": "Digital Liberation",
        "description": "Free the trapped digital entities during the Cyber Festival.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/digital_liberation.png",
        "taskGroupType": "mission",
        "tasks": [
          {
            "uuid": "212105c0-c516-40d3-9af2-e127b8973037",
            "id": "decrypt_firewall",
            "type": "static",
            "name": "Decrypt Security Firewall",
            "description": "Hack into and disable the main security firewall protecting the central data core.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/hacking_task.png",
            "event": {
              "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
              "name": "progression_marker_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "989669e4-582e-4a86-b80b-45eec310da37",
                  "id": "decryption_tool",
                  "name": "Advanced Decryption Tool",
                  "description": "A specialized tool for breaking through digital security systems.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/decryption_tool.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1085,
                  "id": "cyber_credits",
                  "name": "Cyber Credits",
                  "description": "Digital currency used in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                  "amount": 250
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "e19dc124-b8f7-4389-ae76-4a4a3f684a95",
            "id": "locate_entities",
            "type": "static",
            "name": "Locate Trapped Entities",
            "description": "Use your scanner to find digital entities trapped within the central core systems.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/scanner_task.png",
            "event": {
              "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
              "name": "player_logged_in_with_custom_id"
            },
            "rewardDetails": {
              "items": [],
              "bundles": [],
              "currencies": [],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "5f416278-7905-42e0-810b-1f5f8478f506",
            "id": "create_exit_portal",
            "type": "static",
            "name": "Create Digital Exit Portal",
            "description": "Establish a secure exit pathway for the trapped digital entities to escape.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/portal_task.png",
            "event": {
              "id": "11abc61d-9e31-4f26-9796-604ee6d1bd00",
              "name": "player_profile_updated"
            },
            "rewardDetails": {
              "items": [],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1087,
                  "id": "cyber_credits",
                  "name": "Cyber Credits",
                  "description": "Digital currency used in the Cyber District.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_credits.png",
                  "amount": 300
                }
              ],
              "progressionMarkers": []
            }
          }
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "94548de2-4a65-433e-8ae9-592d1488e1bb",
              "id": "neural_interface",
              "name": "Neural Interface",
              "description": "A rare device that allows direct mental connection to digital systems.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/neural_interface.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [],
          "progressionMarkers": []
        }
      },
      {
        "uuid": "0ff3914f-c890-464f-a015-f8abb2269e64",
        "id": "summer_harvest_festival",
        "name": "Summer Harvest Festival",
        "description": "Help prepare for the annual Summer Harvest Festival in the Forest of Whispers.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/summer_festival.png",
        "taskGroupType": "mission",
        "tasks": [
          {
            "uuid": "6b9269b4-da7c-4a4e-8d36-388e2124f0ec",
            "id": "collect_luminous_fruits",
            "type": "static",
            "name": "Collect Luminous Fruits",
            "description": "Gather the glowing fruits that only appear during the summer solstice.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fruit_task.png",
            "event": {
              "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
              "name": "progression_marker_updated"
            },
            "rewardDetails": {
              "items": [],
              "bundles": [],
              "currencies": [],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "188f6844-cbcc-44c5-b872-106051229e64",
            "id": "purify_water_source",
            "type": "static",
            "name": "Purify Sacred Water Source",
            "description": "Cleanse the central water spring of any corruption to prepare for the ritual.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/water_task.png",
            "event": {
              "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
              "name": "wallet_balance_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "f69ad364-bed7-498d-bee5-bb7809c36834",
                  "id": "purification_crystal",
                  "name": "Purification Crystal",
                  "description": "A crystal that purifies natural elements in the Forest Realm.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/purification_crystal.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1086,
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Mystical energy that flows through the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 120
                }
              ],
              "progressionMarkers": []
            }
          },
          {
            "uuid": "62a8f29f-de5e-493a-aead-aabecbdbc06a",
            "id": "prepare_ritual_site",
            "type": "static",
            "name": "Prepare Ritual Site",
            "description": "Set up the ancient stone circle for the Summer Solstice ceremony.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ritual_task.png",
            "event": {
              "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
              "name": "player_logged_in_with_custom_id"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "a180dd8c-d550-463f-aae2-6b0e5053eba1",
                  "id": "ritual_totem",
                  "name": "Ritual Totem",
                  "description": "A sacred object used in Forest Realm ceremonies.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ritual_totem.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [],
              "progressionMarkers": []
            }
          }
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "f26cc989-8767-4563-ab68-0b22eea18a6d",
              "id": "forest_guardian_cloak",
              "name": "Forest Guardian Cloak",
              "description": "A mystical cloak that grants camouflage within the Forest of Whispers.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/guardian_cloak.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": 1087,
              "id": "forest_essence",
              "name": "Forest Essence",
              "description": "Mystical energy that flows through the Forest of Whispers.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
              "amount": 500
            }
          ],
          "progressionMarkers": []
        }
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-04-25T11:35:14.014Z"
  }
}
```

### Retrieve Specific Missions by IDs with Complete Details

In this example, we retrieve specific missions by their IDs, requesting all available attributes to get complete information about these mission series.
Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch complete details for two specific mission series: the "Forest Guardian Series," which involves protecting the Forest of Whispers from corruption, and the "Nexus Explorer Path," which guides players through discovering hidden areas across all realms. When a player selects these particular mission lines in their journal, the game can display everything: all component tasks like "Cleanse the Ancient Grove" or "Discover the Hidden Nexus Portal"; the rewards for each step such as Forest Essence or special navigation tools; unlock requirements like having reached level 15 in the Forest Realm Progression; timing information showing how long these missions will remain available; and additional metadata like difficulty ratings and suggested group sizes. This comprehensive information helps players plan their gameplay sessions and understand how these mission series fit into the broader Arcadia Nexus experience.

#### Request

```
POST /v2/client/app/get-missions
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "taskGroupIds": ["forest_guardian_series", "nexus_explorer_path"],
  "attributes": ["tasks", "rewardDetails", "unlockConditions", "schedule", "meta", "tags", "linkedRewardDetails", "tasks.rewardDetails", "tasks.linkedRewardDetails"]
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
  "message": "Get Mission List",
  "errors": [],
  "data": {
    "missions": [
      {
        "uuid": "7cee3b6f-da6c-489c-9855-6e346fd54937",
        "id": "forest_guardian_series",
        "name": "Forest Guardian Series",
        "description": "Protect the ancient trees and spirits of the Forest of Whispers from the encroaching corruption.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_mission.png",
        "taskGroupType": "mission",
        "meta": {
          "difficulty": "intermediate",
          "recommendedLevel": 15,
          "estimatedTime": "3 hours",
          "suggestedGroupSize": "1-2 players"
        },
        "tags": [
          "forest_realm",
          "environment",
          "protection"
        ],
        "tasks": [
          {
            "uuid": "c1dd2f4a-c903-4547-932f-8d8fb5181643",
            "id": "cleanse_ancient_grove",
            "type": "static",
            "name": "Cleanse the Ancient Grove",
            "description": "Remove corruption from the heart of the Forest of Whispers.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cleanse_task.png",
            "event": {
              "id": "a958649a-d278-4287-8d31-fd7d893723ca",
              "name": "player_signed_up_with_custom_id"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "9816da7f-bbbe-486a-9426-d4dc1bc1ecb7",
                  "id": "purification_catalyst",
                  "name": "Purification Catalyst",
                  "description": "A powerful catalyst that accelerates the cleansing of corruption.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/catalyst.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1085,
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Mystical energy that flows through the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
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
            }
          },
          {
            "uuid": "d84ee9f5-5a0a-4361-9fa6-a3eebfe61a6e",
            "id": "restore_tree_spirits",
            "type": "static",
            "name": "Restore the Tree Spirits",
            "description": "Awaken and heal the dormant spirits within the ancient trees.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/spirit_task.png",
            "event": {
              "id": "11abc61d-9e31-4f26-9796-604ee6d1bd00",
              "name": "player_profile_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "0090fde7-4789-4b3e-8836-c2e62fd6e9dd",
                  "id": "spirit_essence",
                  "name": "Spirit Essence",
                  "description": "Concentrated essence of forest spirits.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/spirit_essence.png",
                  "amount": 5
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1086,
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Mystical energy that flows through the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 150
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
            "uuid": "f40a57e2-ab8b-4f3d-968b-450212a88a92",
            "id": "establish_protection_ward",
            "type": "static",
            "name": "Establish Protection Ward",
            "description": "Create a magical barrier to prevent further corruption from spreading.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ward_task.png",
            "event": {
              "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
              "name": "wallet_balance_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "a3fcb1e5-29a1-4209-b8f5-e38c19070a19",
                  "id": "warding_stone",
                  "name": "Warding Stone",
                  "description": "A powerful artifact that maintains protective barriers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/warding_stone.png",
                  "amount": 2
                }
              ],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1085,
                  "id": "forest_essence",
                  "name": "Forest Essence",
                  "description": "Mystical energy that flows through the Forest of Whispers.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essence.png",
                  "amount": 200
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
          }
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "52d9a31c-7e8b-49f0-a6c5-d2e3f47b8e9a",
              "id": "forest_guardian_emblem",
              "name": "Forest Guardian Emblem",
              "description": "A symbol of authority and protection within the Forest of Whispers.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/guardian_emblem.png",
              "amount": 1
            }
          ],
          "bundles": [],
          "currencies": [],
          "progressionMarkers": [
            {
              "uuid": "67d8c9e0-f1a2-b3c4-d5e6-f7g8h9i0j1k2",
              "id": "forest_reputation",
              "name": "Forest Realm Reputation",
              "description": "Your standing with the inhabitants of the Forest of Whispers.",
              "amount": 500
            }
          ]
        },
        "linkedRewardDetails": {
          "items": [],
          "bundles": [],
          "progressionMarkers": [],
          "currencies": []
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-07 09:55:15+00:00",
          "firstInstanceEndDate": null,
          "isRecurring": false,
          "intervalUnit": "custom",
          "intervalLength": 1,
          "occurrences": 1,
          "currentInstanceSchedule": {
            "instanceStartDate": "2025-04-07 09:55:15+00:00",
            "instanceEndDate": null,
            "status": "in progress"
          }
        },
        "unlockConditions": {
          "unlockLevel": [
            {
              "lockedLevelNo": 15,
              "unlockProgressionSystem": {
                "uuid": "a9b8c7d6-e5f4-43g2-h1i0-j9k8l7m6n5o4",
                "id": "forest_realm_progression",
                "name": "Forest Realm Mastery"
              }
            }
          ]
        }
      },
      {
        "uuid": "71a8a5e8-7ee5-4f64-a2a1-2d70a49b37e3",
        "id": "nexus_explorer_path",
        "name": "Nexus Explorer Path",
        "description": "Discover hidden portals and secret areas across all realms of Arcadia Nexus.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/explorer_mission.png",
        "taskGroupType": "mission",
        "meta": {
          "difficulty": "advanced",
          "recommendedLevel": 25,
          "estimatedTime": "8 hours",
          "completionReward": "master_explorer_title"
        },
        "tags": [
          "exploration",
          "cross_realm",
          "discovery"
        ],
        "tasks": [
          {
            "uuid": "bb2ba71d-d241-44cd-a6a1-06d4150660b7",
            "id": "discover_hidden_portal",
            "type": "static",
            "name": "Discover Hidden Nexus Portal",
            "description": "Locate the concealed portal that connects all realms.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/portal_task.png",
            "event": {
              "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
              "name": "progression_marker_updated"
            },
            "rewardDetails": {
              "items": [
                {
                  "uuid": "a180dd8c-d550-463f-aae2-6b0e5053eba1",
                  "id": "portal_key",
                  "name": "Portal Activation Key",
                  "description": "A key that activates dormant Nexus portals.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/portal_key.png",
                  "amount": 1
                }
              ],
              "bundles": [],
              "currencies": [],
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
            "uuid": "6d8681bc-bd28-4a4e-aa60-31c73674d5a3",
            "id": "map_realm_connections",
            "type": "static",
            "name": "Map Realm Connections",
            "description": "Document the pathways between realms on your explorer's map.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/map_task.png",
            "event": {
              "id": "11abc61d-9e31-4f26-9796-604ee6d1bd00",
              "name": "player_profile_updated"
            },
            "rewardDetails": {
              "items": [],
              "bundles": [],
              "currencies": [
                {
                  "uuid": 1086,
                  "id": "nexus_gems",
                  "name": "Nexus Gems",
                  "description": "Universal currency used throughout Arcadia Nexus.",
                  "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
                  "amount": 350
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
            "uuid": "946a93df-d0f5-4623-98dc-58826c1937e5",
            "id": "activate_ancient_waypoint",
            "type": "static",
            "name": "Activate Ancient Waypoint",
            "description": "Power up the forgotten travel network to enable fast travel between realms.",
            "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/waypoint_task.png",
            "event": {
              "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
              "name": "wallet_balance_updated"
            },
            "rewardDetails": {
              "items": [],
              "bundles": [],
              "currencies": [],
              "progressionMarkers": []
            },
            "linkedRewardDetails": {
              "items": [],
              "bundles": [],
              "progressionMarkers": [],
              "currencies": []
            }
          }
        ],
        "rewardDetails": {
          "items": [
            {
              "uuid": "4e5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
              "id": "realm_jumper_boots",
              "name": "Realm Jumper Boots",
              "description": "Special boots that reduce the cooldown time between realm transitions.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/jumper_boots.png",
              "amount": 1
            }
          ],
          "bundles": [
            {
              "uuid": "9a8b7c6d-5e4f-3g2h-1i0j-9k8l7m6n5o4p",
              "id": "master_explorer_kit",
              "name": "Master Explorer's Kit",
              "description": "A collection of tools for experienced realm explorers.",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/explorer_kit.png",
              "amount": 1
            }
          ],
          "currencies": [],
          "progressionMarkers": []
        },
        "linkedRewardDetails": {
          "items": [],
          "bundles": [],
          "progressionMarkers": [],
          "currencies": []
        },
        "schedule": {
          "firstInstanceStartDate": "2025-04-07 09:55:13+00:00",
          "firstInstanceEndDate": null,
          "isRecurring": false,
          "intervalUnit": "custom",
          "intervalLength": 1,
          "occurrences": 1,
          "currentInstanceSchedule": {
            "instanceStartDate": "2025-04-07 09:55:13+00:00",
            "instanceEndDate": null,
            "status": "in progress"
          }
        },
        "unlockConditions": {
          "unlockItem": [
            {
              "uuid": "b4c5d6e7-f8g9-h0i1-j2k3-l4m5n6o7p8q9",
              "id": "nexus_explorer_map",
              "name": "Nexus Explorer's Map",
              "description": "A special map showing the connections between realms."
            }
          ],
          "unlockLevel": [
            {
              "lockedLevelNo": 20,
              "unlockProgressionSystem": {
                "uuid": "q3r2s1t0-u9v8-w7x6-y5z4-a3b2c1d0e9f8",
                "id": "nexus_exploration",
                "name": "Nexus Explorer Rank"
              }
            }
          ]
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:35:14.014Z"
  }
}
```

### Filter Missions by Tags

In this example, we retrieve missions based on specific tags to find mission series of a particular category or theme.
Context for Arcadia Nexus:
For Arcadia Nexus, this would retrieve mission series tagged as "seasonal" (limited-time event missions) or "solo_friendly" (designed for individual play without requiring a group). This filtering allows players to find appropriate content for their current situation - perhaps they're looking for solo content they can complete during the current "Summer Solstice" seasonal event. By including the schedule attribute, players can see exactly how long they have to complete these special mission series, helping them prioritize time-limited content before it expires. This targeted filtering makes it easier for players to navigate the vast content offerings of Arcadia Nexus and find experiences that match their current playstyle and availability.

#### Request

```
POST /v2/client/app/get-missions
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["seasonal", "solo_friendly"],
  "attributes": ["tags", "schedule"]
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
  "message": "Get Mission List",
  "errors": [],
  "data": {
    "missions": [
      {
        "uuid": "0ff3914f-c890-464f-a015-f8abb2269e64",
        "id": "summer_solstice_celebration",
        "name": "Summer Solstice Celebration",
        "description": "Participate in the annual Summer Solstice festivities across Arcadia Nexus.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/summer_solstice.png",
        "taskGroupType": "mission",
        "tags": [
          "seasonal",
          "summer_event",
          "solo_friendly"
        ],
        "schedule": {
          "firstInstanceStartDate": "2025-06-20 00:00:00+00:00",
          "firstInstanceEndDate": "2025-06-27 23:59:59+00:00",
          "isRecurring": false,
          "intervalUnit": "custom",
          "intervalLength": 1,
          "occurrences": 1,
          "currentInstanceSchedule": {
            "instanceStartDate": "2025-06-20 00:00:00+00:00",
            "instanceEndDate": "2025-06-27 23:59:59+00:00",
            "status": "yet to start"
          }
        }
      },
      {
        "uuid": "71a8a5e8-7ee5-4f64-a2a1-2d70a49b37e3",
        "id": "cyber_district_puzzles",
        "name": "Cyber District Logic Puzzles",
        "description": "Test your problem-solving skills with a series of digital puzzles in the Cyber District.",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_puzzles.png",
        "taskGroupType": "mission",
        "tags": [
          "cyber_district",
          "puzzle",
          "solo_friendly"
        ],
        "schedule": {
          "firstInstanceStartDate": "2025-04-01 00:00:00+00:00",
          "firstInstanceEndDate": "2025-05-30 23:59:59+00:00",
          "isRecurring": false,
          "intervalUnit": "custom",
          "intervalLength": 1,
          "occurrences": 1,
          "currentInstanceSchedule": {
            "instanceStartDate": "2025-04-01 00:00:00+00:00",
            "instanceEndDate": "2025-05-30 23:59:59+00:00",
            "status": "in progress"
          }
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-04-25T11:35:14.014Z"
  }
}
```

## Additional Information

Retrieves groups of tasks (missions) such as daily challenges or seasonal objectives. Missions can be filtered by task group IDs and types, schedule statuses, and tags. Optionally include inactive tasks.
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

 

 

An array of task group IDs used to filter the missions.

 

 

includeInactiveTasks

 

 

boolean

 

 

If true, inactive tasks within the mission groups will be included.

 

 

scheduleStatuses

 

 

array of strings

 

 

An array of schedule status values to filter the missions based on their timing or progress. Possible values: "yet to start", "in progress", "stopped", "expired".

 

 

limit

 

 

number

 

 

Maximum number of missions to return in a single response.

 

 

offset

 

 

number

 

 

Number of missions to skip for pagination.

 

 

includeTags

 

 

array of strings

 

 

Additional tags to filter or annotate missions.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each mission.

 

 

Available Attributes:

rewardDetails: An object containing reward information for the mission group completion.

unlockConditions: An array of conditions that must be met to unlock the missions.

schedule: An object that defines the timing for the mission.

tasks: Details about the tasks within the mission group.

linkedRewardDetails: An object containing reward details that link the task group completion to another player.

meta: General metadata for additional context.

tags: A searchable list of keywords.

tasks.rewardDetails: An object containing reward information for completion of each task within the mission group. Will only take effect if 'tasks' is included in requested attributes.

tasks.linkedRewardDetails: An object containing reward details that link individual task completion within the group to another player. Will only take effect if 'tasks' is included in requested attributes.

Default Response Fields
By default, the following fields are returned for each mission:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the mission in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the mission.

 

 

name

 

 

string

 

 

Name of the mission.

 

 

description

 

 

string

 

 

Description of the mission.

 

 

iconUrl

 

 

string

 

 

URL to the mission's icon. Can be null.

 

 

taskGroupType

 

 

string

 

 

Type of the task group (e.g., "mission").

 

 

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

 

 

Contains the missions information.

 

 

Data Object Structure

Field
Type
Description

missions

 

 

array

 

 

An array of mission objects.

 

 

totalCount

 

 

integer

 

 

Total number of missions available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Mission Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the mission in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the mission.

 

 

name

 

 

string

 

 

Name of the mission.

 

 

description

 

 

string

 

 

Description of the mission.

 

 

iconUrl

 

 

string

 

 

URL to the mission's icon. Can be null.

 

 

taskGroupType

 

 

string

 

 

Type of the task group (e.g., "mission").

 

 

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

 

 

Description of the task.

 

 

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

 

 

The start date of the first instance of this mission.

 

 

firstInstanceEndDate

 

 

string

 

 

The end date of the first instance of this mission. Can be null for open-ended missions.

 

 

intervalUnit

 

 

string

 

 

The unit for recurring intervals (e.g., "minutes", "days", "custom").

 

 

intervalLength

 

 

number

 

 

The length of each recurring interval.

 

 

occurrences

 

 

number

 

 

The number of times this mission will recur.

 

 

isRecurring

 

 

boolean

 

 

Whether this mission repeats on a schedule.

 

 

currentInstanceSchedule

 

 

object

 

 

Details about the current active instance of the mission.

 

 

Meta Object (if requested):
The meta object contains additional, mission-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the mission. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each mission.

Filtering by Tags: Use the includeTags parameter to retrieve missions that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of missions.

Schedule Status Filtering: Filter missions by their current schedule status to show only relevant missions to players.

Inactive Tasks: By default, inactive tasks are excluded from the response. Set includeInactiveTasks to true to include them.

Task Details: Request the tasks attribute to get detailed information about the individual tasks within each mission.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Integration Tips

Mission Progression: Use visual indicators to show players their progress through mission series, highlighting completed tasks and next objectives.

Reward Previews: Display the cumulative rewards for completing entire mission series to motivate players to finish all component tasks.

Time-Limited Indicators: Use schedule information to create urgency around seasonal or limited-time mission series with countdown timers or special visual effects.

Cross-Realm Navigation: If a mission series spans multiple realms of Arcadia Nexus, provide travel guidance or shortcuts to help players efficiently navigate between mission locations.

Difficulty Scaling: Use the meta information to clearly communicate mission difficulty and recommended player levels, helping players choose appropriate content for their character progression.

Storytelling Elements: Organize missions into narrative arcs that reveal more of the Arcadia Nexus lore as players progress through connected series.

The Get Missions endpoint provides the foundation for creating engaging multi-step challenges, storylines, and guided progression in your game. By effectively utilizing this structured approach to grouped tasks, you can create coherent gameplay experiences that guide players through the diverse realms of Arcadia Nexus while providing regular rewards and a sense of accomplishment.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

tasks, task-groups, missions, challenges, quests, achievements, rewards, goals
