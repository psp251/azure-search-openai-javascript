# Get Items

**Group:** App

**Description:** Fetches items with optional filtering by item IDs, attributes, locked status, and default loadout flags. Supports search and pagination.

**Route:** /v2/client/app/get-items

**Method:** POST

## Parameters

- **itemIds**: An array of item IDs to fetch specific items.
- **isLocked**: Whether to filter items by locked (true) or unlocked (false) status.
- **isDefaultLoadout**: Whether to filter items by default loadout status (true or false).
- **offset**: Number of items to skip (for pagination).
- **limit**: Max number of items to return (for pagination).
- **search**: Search keyword to filter items by name.
- **includeTags**: A list of tags to filter the items data.

## Attributes

- **properties** (object): An object containing detailed item properties (e.g., consumable, equippable, stackable).
- **unlockConditions** (array): An array describing how this item can be unlocked. Each unlock condition may include lockedLevelNo, unlockItem, unlockBundle, or unlockProgressionSystem.
- **prices** (array): An array of price objects. Each includes fields like priceType, productId, price, discount, bonusCashAllowance, currencyDetails (uuid, id, name, etc.), and realWorldCurrency (uuid, id, name, etc.).
- **meta** (object): Additional metadata about the item.
- **tags** (array): An array of descriptive tags or categories for the item.

## Examples

### Retrieve All Items with Default Information

In this example, we retrieve all items with minimal default information. This is suitable when you need basic item information for displaying a catalog or inventory menu.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available items across the different realms, including magical artifacts from the Realm of Fire, mystical plants from the Forest of Whispers, and technological gadgets from the Cyber District. Players can see the names, descriptions, and icons of items before deciding which realms to explore to acquire them.

 

#### Request

```
POST /v2/client/app/get-items
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
  "message": "Items list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "flame_amulet",
        "name": "Flame Amulet",
        "description": "Grants fire resistance in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "whisper_seed",
        "name": "Whisper Seed",
        "description": "Allows communication with plants in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/whisper_seed.png"
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "cyber_glasses",
        "name": "Cyber Glasses",
        "description": "Reveals hidden digital information in the Cyber District",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_glasses.png"
      }
    ],
    "totalCount": 135,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Specific Items by IDs

In this example, we retrieve specific items by providing their IDs. This is useful when you want details about particular items a player has discovered or is interested in
Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about three specific items: the Flame Amulet (which grants fire resistance in the Realm of Fire), the Whisper Seed (which allows communication with plants in the Forest of Whispers), and the Cyber Glasses (which reveal hidden digital information in the Cyber District). This allows players to learn more about these specific items that are crucial for advancing in certain quests.

#### Request

```
POST /v2/client/app/get-items
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "itemIds": ["flame_amulet", "whisper_seed", "cyber_glasses"]
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
  "message": "Items list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "flame_amulet",
        "name": "Flame Amulet",
        "description": "Grants fire resistance in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "whisper_seed",
        "name": "Whisper Seed",
        "description": "Allows communication with plants in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/whisper_seed.png"
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "cyber_glasses",
        "name": "Cyber Glasses",
        "description": "Reveals hidden digital information in the Cyber District",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cyber_glasses.png"
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Items with All Attributes

In this example, we retrieve items along with all their additional attributes. This is useful for displaying detailed item information in an inventory or item inspection view
Context for Arcadia Nexus:
For Arcadia Nexus, this would provide comprehensive details about each item, including:

Properties: Whether items like the Flame Shield are equippable, if Healing Potions are consumable, or if Star Fragments are stackable.

Prices: Information about how items can be purchased, such as the cost of a Cyber Enhancement in Nexus Gems, or the price of a Mystic Artifact in Ancient Coins.

Unlock Conditions: Requirements to access certain items, such as needing to reach level 10 in the Realm of Fire progression system to unlock the Phoenix Feather, or having to complete the "Whispers of the Ancient" quest to unlock the Elder Tree Staff.

Meta: Custom metadata like elemental affinities, crafting categories, or duration effects for potions.

Tags: Categories such as "weapon," "artifact," "consumable," or realm-specific tags like "fire_realm," "forest_realm," etc.

This allows players to fully understand an item's functionality, value, and acquisition methods.

 

#### Request

```
POST /v2/client/app/get-items
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "attributes": ["properties", "prices", "unlockConditions", "meta", "tags"]
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
  "message": "Items list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "flame_amulet",
        "name": "Flame Amulet",
        "description": "Grants fire resistance in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        },
        "prices": [
          {
            "priceType": "currency",
            "productId": null,
            "price": 2500,
            "discount": 0,
            "bonusCashAllowance": false,
            "currencyDetails": {
              "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
              "id": "fire_coins",
              "name": "Fire Coins",
              "code": "FRCN"
            },
            "realWorldCurrency": null
          }
        ],
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": [
            {
              "lockedLevelNo": 5,
              "unlockProgressionSystem": {
                "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                "id": "fire_realm_progression",
                "name": "Fire Realm Level"
              }
            }
          ]
        },
        "meta": {
          "elementType": "fire",
          "effectDuration": 180,
          "effectStrength": "medium"
        },
        "tags": [
          "accessory",
          "fire_realm",
          "protective"
        ]
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "whisper_seed",
        "name": "Whisper Seed",
        "description": "Allows communication with plants in the Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/whisper_seed.png",
        "properties": {
          "isConsumable": true,
          "isEquippable": false,
          "isTradable": true,
          "isStackable": true,
          "isLocked": false,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": 10,
          "maxCollectionInstance": null,
          "quantity": 1,
          "limitedQuantity": null,
          "consumeByUses": 1,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        },
        "prices": [
          {
            "priceType": "currency",
            "productId": null,
            "price": 350,
            "discount": 0,
            "bonusCashAllowance": false,
            "currencyDetails": {
              "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
              "id": "forest_essence",
              "name": "Forest Essence",
              "code": "FRES"
            },
            "realWorldCurrency": null
          }
        ],
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": []
        },
        "meta": {
          "growthTime": 24,
          "communicationRange": "medium",
          "plantTypes": ["ancient", "magical"]
        },
        "tags": [
          "consumable",
          "forest_realm",
          "natural"
        ]
      }
    ],
    "totalCount": 135,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Items for a Specific Realm

In this example, we retrieve items related to a specific realm using tag filtering. This is useful when a player is focusing on a particular realm and wants to see all available items within it.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all items associated with the Realm of Fire, such as the Flame Sword, Lava Boots, Phoenix Pendant, and Fire Resistance Potion. By including the properties and unlock conditions, players can see which items they can equip for their adventures in this realm and what requirements they need to meet to unlock special items like the Inferno Staff or Dragon Scale Armor.

 

#### Request

```
POST /v2/client/app/get-items
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["fire_realm"],
  "attributes": ["properties", "unlockConditions", "tags"]
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
  "message": "Items list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "flame_amulet",
        "name": "Flame Amulet",
        "description": "Grants fire resistance in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        },
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": [
            {
              "lockedLevelNo": 5,
              "unlockProgressionSystem": {
                "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                "id": "fire_realm_progression",
                "name": "Fire Realm Level"
              }
            }
          ]
        },
        "tags": [
          "accessory",
          "fire_realm",
          "protective"
        ]
      },
      {
        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
        "id": "flame_sword",
        "name": "Flame Sword",
        "description": "A sword imbued with the essence of fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_sword.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        },
        "unlockConditions": {
          "unlockItem": [],
          "unlockBundle": [],
          "unlockLevel": [
            {
              "lockedLevelNo": 7,
              "unlockProgressionSystem": {
                "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
                "id": "fire_realm_progression",
                "name": "Fire Realm Level"
              }
            }
          ]
        },
        "tags": [
          "weapon",
          "fire_realm",
          "offensive"
        ]
      },
      {
        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
        "id": "lava_boots",
        "name": "Lava Boots",
        "description": "Allows walking on lava surfaces for 30 seconds",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_boots.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        },
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
        },
        "tags": [
          "footwear",
          "fire_realm",
          "utility"
        ]
      }
    ],
    "totalCount": 18,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Equipable Items Only

In this example, we retrieve only equipable items by filtering based on the properties attribute. This is useful when a player wants to see what items they can equip to their character.Send the request parameters in the example and then filter client-side for items where properties.isEquippable is true.
Context for Arcadia Nexus:
For Arcadia Nexus, this would allow players to browse through equipment options like the Crystal Crown from the Ice Peaks, the Shadowcloak from the Dark Caverns, or the Mechanical Wings from the Floating Isles. Players can see what items they can equip to customize their appearance or gain special abilities as they adventure through the different realms of the metaverse.

#### Request

```
POST /v2/client/app/get-items
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "attributes": ["properties"],
  "limit": 20,
  "offset": 0
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
  "message": "Items list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "flame_amulet",
        "name": "Flame Amulet",
        "description": "Grants fire resistance in the Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      },
      {
        "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
        "id": "flame_sword",
        "name": "Flame Sword",
        "description": "A sword imbued with the essence of fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_sword.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      },
      {
        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
        "id": "lava_boots",
        "name": "Lava Boots",
        "description": "Allows walking on lava surfaces for 30 seconds",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_boots.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      },
      {
        "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
        "id": "crystal_crown",
        "name": "Crystal Crown",
        "description": "A crown made of enchanted ice crystals from the Ice Peaks",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/crystal_crown.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      },
      {
        "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
        "id": "shadowcloak",
        "name": "Shadowcloak",
        "description": "A cloak woven from shadows of the Dark Caverns",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/shadowcloak.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      },
      {
        "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
        "id": "mechanical_wings",
        "name": "Mechanical Wings",
        "description": "Mechanical wings that allow limited flight in the Floating Isles",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/mechanical_wings.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": true,
          "isTradable": true,
          "isStackable": false,
          "isLocked": true,
          "isDefaultLoadout": false,
          "equippedByDefault": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": null,
          "consumeByTimeFormat": null
        }
      }
    ],
    "totalCount": 62,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

## Additional Information

Fetches a list of in-app items, including properties, prices, unlock conditions, metadata, and tags. Use this endpoint to retrieve item information for display in your client applications, allowing players to view collectibles, equipment, cosmetics, or resources available within your game.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

itemIds

 

 

array of strings

 

 

An array of item IDs to fetch specific items.

 

 

isLocked

 

 

boolean

 

 

Whether to filter items by locked (true) or unlocked (false) status.

 

 

isDefaultLoadout

 

 

boolean

 

 

Whether to filter items by default loadout status (true or false).

 

 

limit

 

 

number

 

 

The maximum number of items to return in the response.

 

 

offset

 

 

number

 

 

The number of items to skip before starting to return results, for pagination.

 

 

search

 

 

string

 

 

A string to search for items by name.

 

 

includeTags

 

 

array of strings

 

 

An array of tags to filter items that have any of the specified tags.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each item.

 

 

Available Attributes:

properties: Object containing detailed item properties.

prices: Array of price objects for the item.

unlockConditions: Array describing how this item can be unlocked.

meta: Additional metadata about the item.

tags: Array of descriptive tags or categories for the item.

Default Response Fields
By default, the following minimal fields are returned for each item:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the item in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the item.

 

 

name

 

 

string

 

 

Name of the item.

 

 

description

 

 

string

 

 

Description of the item. Can be null if not specified.

 

 

iconUrl

 

 

string

 

 

URL to the item's icon.

 

 

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

 

 

Contains the items information.

 

 

Data Object Structure

Field
Type
Description

items

 

 

array

 

 

An array of item objects.

 

 

totalCount

 

 

integer

 

 

Total number of items available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Item Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the item in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the item.

 

 

name

 

 

string

 

 

Name of the item.

 

 

description

 

 

string

 

 

Description of the item. Can be null if not specified.

 

 

iconUrl

 

 

string

 

 

URL to the item's icon.

 

 

Properties Object (if requested):
The properties object can include the following fields:

Field
Type
Description

isConsumable

 

 

boolean

 

 

Whether the item can be consumed.

 

 

isEquippable

 

 

boolean

 

 

Whether the item can be equipped.

 

 

isTradable

 

 

boolean

 

 

Whether the item can be traded.

 

 

isStackable

 

 

boolean

 

 

Whether multiple instances of the item can be stacked.

 

 

isLocked

 

 

boolean

 

 

Whether the item is locked by default.

 

 

isDefaultLoadout

 

 

boolean

 

 

Whether the item is part of the default loadout.

 

 

equippedByDefault

 

 

boolean

 

 

Whether the item is equipped by default.

 

 

stackCapacity

 

 

number

 

 

Maximum number of items that can be stacked. Can be null.

 

 

maxCollectionInstance

 

 

number

 

 

Maximum number of instances a player can collect. Can be null.

 

 

quantity

 

 

number

 

 

Default quantity of the item. Can be null.

 

 

limitedQuantity

 

 

number

 

 

Whether the item has a limited quantity. Can be null.

 

 

consumeByUses

 

 

number

 

 

Number of uses before the item is consumed. Can be null.

 

 

consumeByTime

 

 

number

 

 

Time duration before the item is consumed. Can be null.

 

 

consumeByTimeFormat

 

 

string

 

 

Format of the time duration (e.g., "days", "hours"). Can be null.

 

 

Prices Array (if requested):
Each price object can include:

Field
Type
Description

priceType

 

 

string

 

 

Type of price (e.g., "currency").

 

 

productId

 

 

string

 

 

ID of the product if applicable.

 

 

price

 

 

number

 

 

Price amount.

 

 

discount

 

 

number

 

 

Discount percentage if applicable.

 

 

bonusCashAllowance

 

 

boolean

 

 

Whether bonus cash can be used.

 

 

currencyDetails

 

 

object

 

 

Details about the currency used for pricing.

 

 

realWorldCurrency

 

 

object

 

 

Details about the real-world currency if applicable.

 

 

Unlock Conditions Object (if requested):
The unlock conditions object can include:

Field
Type
Description

unlockItem

 

 

array

 

 

Items that unlock this item when obtained.

 

 

unlockBundle

 

 

array

 

 

Bundles that unlock this item when obtained.

 

 

unlockLevel

 

 

array

 

 

Progression levels that unlock this item when reached.

 

 

Each unlock level object includes:

Field
Type
Description

lockedLevelNo

 

 

number

 

 

Level number required to unlock the item.

 

 

unlockProgressionSystem

 

 

object

 

 

Progression system details including uuid, id, and name.

 

 

Meta Object (if requested):
The meta object contains additional, item-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the item. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each item.

Filtering by Tags: Use the includeTags parameter to retrieve items that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of items.

Searching: Use the search parameter to find items by name.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Icon URLs: The iconUrl provides the direct path to the item's image, which can be used in your application to display item visuals.

Unlock Conditions: Understanding the unlock conditions is crucial for implementing proper item acquisition flows in your application.

Integration Tips

Realm-Specific Shops: Consider implementing realm-specific item shops that display only items tagged with that realm, enhancing the thematic experience.

Progressive Disclosure: For new players, consider only showing items they can immediately access or unlock soon to avoid overwhelming them.

Visual Catalogs: Create visual catalogs of items grouped by type (weapons, clothing, artifacts) to improve browsing experience.

Wishlist Feature: Allow players to save items to a wishlist for future reference, especially for items with complex unlock conditions.

Seasonal Rotations: Utilize the API to support seasonal item rotations or limited-time availability of special items.

The Get Items endpoint is a powerful tool for managing the diverse array of items within Arcadia Nexus. By strategically requesting only the data you need, you can create engaging and responsive item interfaces that enhance the player's experience as they explore the various realms of your metaverse.

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

items, inventory, loadout, gear, cosmetic, customization
