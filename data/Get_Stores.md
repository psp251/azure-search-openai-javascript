# Get Stores

**Group:** App

**Description:** Retrieves details about the in-game store, listing items, currency packs, or other purchasable content for players.

**Route:** /v2/client/app/get-stores

**Method:** POST

## Parameters

- **storeIds**: Array of store IDs to look up (e.g., 'main_store', 'holiday_shop').
- **offset**: Number of stores to skip (for paginated UIs).
- **limit**: Maximum number of store entries to return in a single response.
- **search**: Keyword-based search for store names.
- **includeTags**: Filter or categorize stores based on tags (e.g. 'featured', 'seasonal').

## Attributes

- **unlockConditions** (array): An array describing how or when the store becomes accessible (e.g., level requirements, prerequisite items).
- **meta** (object): Metadata about the store
- **tags** (array): An array of tags that categorize or label the store

## Examples

### Retrieve All Stores with Default Information

In this example, we retrieve all stores with minimal default information. This is suitable when you need basic store information for displaying a list of available marketplaces in your application.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available stores across the different realms, including the "Central Nexus Marketplace," "Fire Realm Bazaar," "Forest Whispers Trading Post," and other realm-specific shops. Players can see the names, descriptions, and available categories of each store before deciding which to visit.

#### Request

```
POST /v2/client/app/get-stores
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
  "message": "Stores list",
  "errors": [],
  "data": {
    "stores": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "central_marketplace",
        "name": "Central Nexus Marketplace",
        "description": "The main marketplace offering a wide range of items usable across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/central_marketplace.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 8
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_realm_bazaar",
        "name": "Fire Realm Bazaar",
        "description": "Specialized marketplace for items to navigate and thrive in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_bazaar.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 5
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_trading_post",
        "name": "Forest Whispers Trading Post",
        "description": "A mystical trading post with items related to the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_trading_post.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 4
      }
    ],
    "totalCount": 7,
    "lastUpdate": "2025-03-20T10:15:42.123Z"
  }
}
```

### Retrieve Specific Stores by IDs

In this example, we retrieve specific stores by providing their IDs. This is useful when you want details about particular stores that a player has selected or that are featured in your application.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about two specific stores: the "Central Nexus Marketplace" (which offers a wide range of items usable across all realms) and the "Fire Realm Bazaar" (which specializes in items for navigating and thriving in the Realm of Fire). This allows players to quickly access the store information they're interested in.

#### Request

```
POST /v2/client/app/get-stores
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "storeIds": ["central_marketplace", "fire_realm_bazaar"]
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
  "message": "Stores list",
  "errors": [],
  "data": {
    "stores": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "central_marketplace",
        "name": "Central Nexus Marketplace",
        "description": "The main marketplace offering a wide range of items usable across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/central_marketplace.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 8
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_realm_bazaar",
        "name": "Fire Realm Bazaar",
        "description": "Specialized marketplace for items to navigate and thrive in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_realm_bazaar.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 5
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-03-20T10:15:42.123Z"
  }
}
```

### Retrieve Stores with Unlock Conditions

In this example, we retrieve stores along with their unlock conditions. This is useful for showing players which stores are available to them immediately and which require specific achievements or progression.
Context for Arcadia Nexus:
For Arcadia Nexus, this would provide information about the unlock requirements for each store:

The "Central Nexus Marketplace" might be available to all players without any requirements.
The "Elemental Forge" might require players to reach level 10 in the Fire Realm progression system.
The "Ancient Artifacts Emporium" might require players to collect specific legendary items from various realms.

This helps players understand what they need to accomplish to gain access to exclusive shops and their unique inventories.

#### Request

```
POST /v2/client/app/get-stores
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "attributes": ["unlockConditions"]
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
  "message": "Stores list",
  "errors": [],
  "data": {
    "stores": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "central_marketplace",
        "name": "Central Nexus Marketplace",
        "description": "The main marketplace offering a wide range of items usable across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/central_marketplace.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 8,
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": []
        }
      },
      {
        "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
        "id": "elemental_forge",
        "name": "Elemental Forge",
        "description": "A specialized store for crafting and enhancing elemental equipment",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/elemental_forge.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 3,
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": [
            {
              "lockedLevelNo": 10,
              "unlockProgressionSystem": {
                "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                "id": "fire_realm_progression",
                "name": "Fire Realm Level"
              }
            }
          ]
        }
      },
      {
        "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
        "id": "ancient_artifacts",
        "name": "Ancient Artifacts Emporium",
        "description": "A mysterious shop offering rare and powerful artifacts from across the realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/ancient_artifacts.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 2,
        "unlockConditions": {
          "unlockItem": [
            {
              "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
              "id": "crystal_key",
              "name": "Crystal Key",
              "description": "A mysterious key that opens hidden doors throughout Arcadia Nexus"
            }
          ],
          "unlockBundle": [],
          "unlockLevel": []
        }
      }
    ],
    "totalCount": 7,
    "lastUpdate": "2025-03-20T10:15:42.123Z"
  }
}
```

### Retrieve Stores for Specific Platforms

In this example, we retrieve stores that are available on specific platforms. This is useful for showing platform-specific offerings to players.
Request Parameters Sent:
No specific parameter is required as platforms information is included by default. Filter the results client-side based on the platforms array.
Context for Arcadia Nexus:
For Arcadia Nexus, this would allow you to display only the stores that are relevant to the player's current platform, ensuring they don't see offerings that aren't available to them. For example, mobile players would see stores optimized for mobile gameplay, while PC players might see stores with more visually complex items.

#### Request

```
POST /v2/client/app/get-stores
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
  "message": "Stores list",
  "errors": [],
  "data": {
    "stores": [
      {
        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
        "id": "mobile_gems_store",
        "name": "Mobile Gems Store",
        "description": "Exclusive store for mobile players with optimized items and special offers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/mobile_gems_store.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          }
        ],
        "locations": [],
        "categoriesCount": 4
      },
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "central_marketplace",
        "name": "Central Nexus Marketplace",
        "description": "The main marketplace offering a wide range of items usable across all realms",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/central_marketplace.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 8
      }
    ],
    "totalCount": 7,
    "lastUpdate": "2025-03-20T10:15:42.123Z"
  }
}
```

### Retrieve Featured or Seasonal Stores

In this example, we retrieve stores that are tagged as featured or seasonal using tag filtering. This is useful for highlighting special or time-limited stores.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return stores like:

The "Celestial Festival Bazaar," a seasonal store available during the lunar festival.
The "Treasure Hunter's Depot," a featured store showcasing rare and valuable items.
The "Summer Solstice Market," a seasonal store with summer-themed items and decorations.

By including the tags attribute in the response, you can display or categorize these stores appropriately in your application, highlighting their special status to players.

#### Request

```
POST /v2/client/app/get-stores
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "includeTags": ["featured", "seasonal"],
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
  "message": "Stores list",
  "errors": [],
  "data": {
    "stores": [
      {
        "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
        "id": "celestial_festival",
        "name": "Celestial Festival Bazaar",
        "description": "A magical marketplace only available during the lunar festival",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/celestial_festival.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 3,
        "tags": [
          "seasonal",
          "limited_time",
          "event"
        ]
      },
      {
        "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
        "id": "treasure_hunters",
        "name": "Treasure Hunter's Depot",
        "description": "A featured store showcasing rare and valuable items from across Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/treasure_hunters.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 4,
        "tags": [
          "featured",
          "premium",
          "rare_items"
        ]
      },
      {
        "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
        "id": "summer_solstice",
        "name": "Summer Solstice Market",
        "description": "A seasonal market with summer-themed items and decorations",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/summer_solstice.png",
        "platforms": [
          {
            "id": 1,
            "name": "android"
          },
          {
            "id": 2,
            "name": "ios"
          },
          {
            "id": 3,
            "name": "pc"
          }
        ],
        "locations": [],
        "categoriesCount": 5,
        "tags": [
          "seasonal",
          "limited_time",
          "summer"
        ]
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-03-20T10:15:42.123Z"
  }
}
```

## Additional Information

Retrieves details about in-game stores, listing items, currency packs, or other purchasable content available for players. Use this endpoint to fetch store information that can be displayed in your client applications or on your website, allowing players to browse and purchase virtual goods.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

storeIds

 

 

array of strings

 

 

Array of store IDs to look up (e.g., 'main_store', 'holiday_shop').

 

 

limit

 

 

number

 

 

Maximum number of store entries to return in a single response.

 

 

offset

 

 

number

 

 

Number of stores to skip (for paginated UIs).

 

 

search

 

 

string

 

 

Keyword-based search for store names.

 

 

includeTags

 

 

array of strings

 

 

Filter or categorize stores based on tags (e.g., 'featured', 'seasonal').

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each store.

 

 

Available Attributes:

unlockConditions: Object describing how or when the store becomes accessible.

meta: Additional metadata about the store.

tags: Array of tags that categorize or label the store.

Default Response Fields
By default, the following minimal fields are returned for each store:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the store in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the store.

 

 

name

 

 

string

 

 

Name of the store.

 

 

description

 

 

string

 

 

Description of the store. Can be null if not specified.

 

 

iconUrl

 

 

string

 

 

URL to the store's icon. Can be null if not specified.

 

 

platforms

 

 

array

 

 

Platforms where the store is available.

 

 

locations

 

 

array

 

 

Geographic locations where the store is available.

 

 

categoriesCount

 

 

number

 

 

Number of categories within the store.

 

 

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

 

 

Contains the stores information.

 

 

Data Object Structure

Field
Type
Description

stores

 

 

array

 

 

An array of store objects.

 

 

totalCount

 

 

integer

 

 

Total number of stores available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Store Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the store in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the store.

 

 

name

 

 

string

 

 

Name of the store.

 

 

description

 

 

string

 

 

Description of the store. Can be null if not specified.

 

 

iconUrl

 

 

string

 

 

URL to the store's icon. Can be null if not specified.

 

 

platforms

 

 

array

 

 

Platforms where the store is available. Each platform includes: id (integer), name (string).

 

 

locations

 

 

array

 

 

Geographic locations where the store is available. Each location includes: id (integer), name (string).

 

 

categoriesCount

 

 

number

 

 

Number of categories within the store.

 

 

Unlock Conditions Object (if requested):
The unlock conditions object can include:

Field
Type
Description

unlockItem

 

 

array

 

 

Items that unlock this store when obtained.

 

 

unlockBundle

 

 

array

 

 

Bundles that unlock this store when obtained.

 

 

unlockLevel

 

 

array

 

 

Progression levels that unlock this store when reached.

 

 

Each unlock level object includes:

Field
Type
Description

lockedLevelNo

 

 

number

 

 

Level number required to unlock the store.

 

 

unlockProgressionSystem

 

 

object

 

 

Progression system details including uuid, id, and name.

 

 

Meta Object (if requested):
The meta object contains additional, store-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the store. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each store.

Filtering by Tags: Use the includeTags parameter to retrieve stores that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of stores.

Searching: Use the search parameter to find stores by name.

Platforms and Locations: The platforms and locations arrays indicate where the store is available, which can be useful for displaying platform-specific or region-specific stores.

Categories: To retrieve the contents of store categories, use the Get Store Categories and Get Store Category Contents endpoints after retrieving the store information.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Integration Tips

Store Navigation: Create an intuitive navigation system that allows players to easily browse between different stores and their categories.

Store Availability Indicators: Use the unlock conditions and platform information to clearly indicate which stores are available to the player and which require specific actions to unlock.

Featured Sections: Highlight featured or seasonal stores prominently in your interface to draw attention to limited-time offerings.

Store Discovery: Implement a discovery feature that suggests stores to players based on their interests, play history, or current location in the game world.

Contextual Access: Allow players to quickly access realm-specific stores when they enter a new area of Arcadia Nexus, enhancing immersion and convenience.

The Get Stores endpoint allows you to access detailed information about the marketplaces available within your application. By utilizing the optional parameters and attributes, you can tailor the response to suit your application's needs, whether you need basic information or comprehensive details including unlock conditions, metadata, and tags.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

in-game-store, shop, microstransactions, virtual-goods, economy, special-offers, items, bundles, currencies
