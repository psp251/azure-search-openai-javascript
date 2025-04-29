# Get Bundles

**Group:** App

**Description:** Retrieves in-game bundles that can include multiple items, currency packs, or gear sets. Useful for combining virtual goods into discounted or special-offer packages for players.

**Route:** /v2/client/app/get-bundles

**Method:** POST

## Parameters

- **bundleIds**: Array of specific bundle IDs to look up (e.g., 'starter_pack', 'holiday_bundle').
- **isLocked**: Filter by locked (true) or unlocked (false) status. A locked bundle may require special conditions, like level requirements.
- **offset**: Number of bundles to skip (for paginated UIs).
- **limit**: Maximum number of bundles to return in a single response.
- **search**: Search keyword to filter bundles by name
- **includeTags**: Array of tags to narrow down or categorize the bundles.

## Attributes

- **properties** (object): An object containing core bundle properties (e.g., lock status, stack settings, usage limits).
- **prices** (array): An array of price objects defining how the bundle can be purchased (virtual or real currency).
- **contents** (object): An object describing the items, bundles, and currencies contained within this bundle.
- **unlockConditions** (array): An array describing the conditions under which this bundle is unlocked or becomes available to the player.
- **meta** (object): Additional metadata about the bundle.
- **tags** (array): Array of tags associated with the bundle for categorization (e.g., 'event', 'premium', 'discount').

## Examples

### Retrieve All Bundles with Default Information

In this example, we retrieve all bundles with minimal default information. This is suitable when you need basic bundle information for displaying a catalog or store page.
Request Parameters Sent:
No parameters are required. You can send an empty request body or include limit and offset for pagination.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available bundles across the different realms, including "Adventurer's Starter Pack," "Fire Realm Essentials," "Forest Explorer Kit," and more. Players can see the names, descriptions, and icons of bundles before deciding which to purchase or unlock.

#### Request

```
POST /v2/client/app/get-bundles
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
  "message": "Bundles list",
  "errors": [],
  "data": {
    "bundles": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "adventurer_starter",
        "name": "Adventurer's Starter Pack",
        "description": "Essential gear for beginning your journey through Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/adventurer_starter.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essentials",
        "name": "Fire Realm Essentials",
        "description": "Everything you need to survive in the scorching Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essentials.png"
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "forest_explorer",
        "name": "Forest Explorer Kit",
        "description": "Tools and items for exploring the mysterious Forest of Whispers",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_explorer.png"
      }
    ],
    "totalCount": 12,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Specific Bundles by IDs

In this example, we retrieve specific bundles by providing their IDs. This is useful when you want details about particular bundles a player has selected or that are featured in a promotion.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about two specific bundles: the "Adventurer's Starter Pack" (which includes basic equipment and currency for new players) and the "Fire Realm Essentials" (which includes items specifically useful in the Realm of Fire). This allows players to examine these specific offers in detail.

#### Request

```
POST /v2/client/app/get-bundles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "bundleIds": ["adventurer_starter", "fire_essentials"]
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
  "message": "Bundles list",
  "errors": [],
  "data": {
    "bundles": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "adventurer_starter",
        "name": "Adventurer's Starter Pack",
        "description": "Essential gear for beginning your journey through Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/adventurer_starter.png"
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essentials",
        "name": "Fire Realm Essentials",
        "description": "Everything you need to survive in the scorching Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essentials.png"
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Bundles with Contents and Prices

In this example, we retrieve bundles along with their contents and prices. This is useful for displaying detailed bundle information including what items are included and how much they cost.
Context for Arcadia Nexus:
For Arcadia Nexus, this would provide detailed information about each bundle's contents and pricing:

Contents: Lists all items, sub-bundles, and currencies included in each bundle, such as the "Forest Explorer Kit" containing a Whisper Seed, Plant Detector, Forest Map, and 500 Forest Essence currency.
Prices: Shows how each bundle can be purchased, such as the cost of the "Cyber Hacker Pack" in Nexus Gems or real-world currency.

This allows players to evaluate the value of each bundle and make informed purchasing decisions.

#### Request

```
POST /v2/client/app/get-bundles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "attributes": ["contents", "prices"]
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
  "message": "Bundles list",
  "errors": [],
  "data": {
    "bundles": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "adventurer_starter",
        "name": "Adventurer's Starter Pack",
        "description": "Essential gear for beginning your journey through Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/adventurer_starter.png",
        "contents": {
          "items": [
            {
              "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
              "id": "basic_sword",
              "name": "Basic Sword",
              "description": "A standard sword for beginners",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/basic_sword.png",
              "quantity": 1
            },
            {
              "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
              "id": "healing_potion_small",
              "name": "Small Healing Potion",
              "description": "Restores a small amount of health",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/healing_potion_small.png",
              "quantity": 5
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency accepted throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "quantity": 1000
            }
          ]
        },
        "prices": [
          {
            "priceType": "realMoney",
            "productId": "starter_pack_purchase",
            "price": 4.99,
            "discount": 0,
            "bonusCashAllowance": false,
            "currencyDetails": null,
            "realWorldCurrency": {
              "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
              "id": "usd",
              "name": "US Dollar",
              "code": "USD"
            }
          }
        ]
      },
      {
        "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
        "id": "fire_essentials",
        "name": "Fire Realm Essentials",
        "description": "Everything you need to survive in the scorching Realm of Fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_essentials.png",
        "contents": {
          "items": [
            {
              "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
              "id": "flame_amulet",
              "name": "Flame Amulet",
              "description": "Grants fire resistance in the Realm of Fire",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_amulet.png",
              "quantity": 1
            },
            {
              "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
              "id": "lava_boots",
              "name": "Lava Boots",
              "description": "Allows walking on lava surfaces for 30 seconds",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lava_boots.png",
              "quantity": 1
            },
            {
              "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
              "id": "cooling_potion",
              "name": "Cooling Potion",
              "description": "Provides temporary immunity to heat damage",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cooling_potion.png",
              "quantity": 3
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
              "id": "fire_coins",
              "name": "Fire Coins",
              "description": "Currency used in the Realm of Fire",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
              "quantity": 500
            }
          ]
        },
        "prices": [
          {
            "priceType": "currency",
            "productId": null,
            "price": 2500,
            "discount": 15,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "code": "NXGM"
            },
            "realWorldCurrency": null
          }
        ]
      }
    ],
    "totalCount": 12,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Limited-Time Event Bundles

In this example, we retrieve bundles related to limited-time events using tag filtering. This is useful for highlighting special offers that are only available during specific events.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all bundles tagged as "limited_time" or "event," such as the "Lunar Festival Pack," "Summer Solstice Collection," or "Founder's Exclusive Bundle." By including the properties, contents, and tags, players can see what special items are included in these time-limited offers and understand any restrictions on their availability.

#### Request

```
POST /v2/client/app/get-bundles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["limited_time", "event"],
  "attributes": ["properties", "contents", "tags"]
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
  "message": "Bundles list",
  "errors": [],
  "data": {
    "bundles": [
      {
        "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
        "id": "lunar_festival",
        "name": "Lunar Festival Pack",
        "description": "Limited time items celebrating the Lunar Festival in Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lunar_festival.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": false,
          "isTradable": false,
          "isStackable": false,
          "isLocked": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": 14,
          "consumeByTimeFormat": "days"
        },
        "contents": {
          "items": [
            {
              "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
              "id": "lunar_crown",
              "name": "Lunar Crown",
              "description": "A crown that glows with the light of the moons",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lunar_crown.png",
              "quantity": 1
            },
            {
              "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
              "id": "moondust",
              "name": "Moondust",
              "description": "Magical dust that makes players float temporarily",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/moondust.png",
              "quantity": 10
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
              "id": "lunar_tokens",
              "name": "Lunar Tokens",
              "description": "Limited time currency for the Lunar Festival",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/lunar_tokens.png",
              "quantity": 100
            }
          ]
        },
        "tags": [
          "limited_time",
          "event",
          "seasonal",
          "cosmetic"
        ]
      },
      {
        "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
        "id": "summer_solstice",
        "name": "Summer Solstice Collection",
        "description": "Special items to celebrate the Summer Solstice in Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/summer_solstice.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": false,
          "isTradable": false,
          "isStackable": false,
          "isLocked": false,
          "stackCapacity": null,
          "maxCollectionInstance": 1,
          "quantity": null,
          "limitedQuantity": null,
          "consumeByUses": null,
          "consumeByTime": 21,
          "consumeByTimeFormat": "days"
        },
        "contents": {
          "items": [
            {
              "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
              "id": "sun_staff",
              "name": "Sun Staff",
              "description": "A staff that harnesses the power of the sun",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/sun_staff.png",
              "quantity": 1
            },
            {
              "uuid": "r8s9t0u1-v2w3-4567-r8s9-t0u1v2w34567",
              "id": "summer_outfit",
              "name": "Summer Festival Outfit",
              "description": "Festive outfit for the Summer Solstice celebration",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/summer_outfit.png",
              "quantity": 1
            }
          ],
          "bundles": [],
          "currencies": [
            {
              "uuid": "s9t0u1v2-w3x4-5678-s9t0-u1v2w3x45678",
              "id": "sun_tokens",
              "name": "Sun Tokens",
              "description": "Limited time currency for the Summer Solstice",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/sun_tokens.png",
              "quantity": 150
            }
          ]
        },
        "tags": [
          "limited_time",
          "event",
          "seasonal",
          "cosmetic"
        ]
      }
    ],
    "totalCount": 4,
    "lastUpdate": "2025-03-15T14:22:31.456Z"
  }
}
```

### Retrieve Unlocked Bundles for New Players

In this example, we retrieve only unlocked bundles that are immediately available to new players. This is useful for showing new players what they can purchase right away without needing to meet any unlock conditions.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all bundles that are not locked, such as the "Newcomer's Welcome Package," "Basic Resource Pack," and "Universal Essentials Kit." These bundles are designed to help new players get started in the metaverse without requiring them to reach specific levels or complete certain tasks. Including the unlockConditions attribute confirms that these bundles don't have any restrictions.

#### Request

```
POST /v2/client/app/get-bundles
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "isLocked": false,
  "attributes": ["properties", "unlockConditions"]
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
  "message": "Bundles list",
  "errors": [],
  "data": {
    "bundles": [
      {
        "uuid": "t0u1v2w3-x4y5-6789-t0u1-v2w3x4y56789",
        "id": "newcomer_welcome",
        "name": "Newcomer's Welcome Package",
        "description": "A complimentary package for all new players entering Arcadia Nexus",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/newcomer_welcome.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": false,
          "isTradable": false,
          "isStackable": false,
          "isLocked": false,
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
          "unlockLevel": []
        }
      },
      {
        "uuid": "u1v2w3x4-y5z6-7890-u1v2-w3x4y5z67890",
        "id": "basic_resources",
        "name": "Basic Resource Pack",
        "description": "Essential resources to help you get started on your adventure",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/basic_resources.png",
        "properties": {
          "isConsumable": false,
          "isEquippable": false,
          "isTradable": false,
          "isStackable": false,
          "isLocked": false,
          "stackCapacity": null,
          "maxCollectionInstance": 5,
          "quantity": null,
          "limitedQuantity": null,
```

## Additional Information

Retrieves in-game bundles that can include multiple items, currency packs, or gear sets. Use this endpoint to fetch bundle details, which can be displayed in your client applications or on your website. Bundles are an effective way to combine virtual goods into discounted or special-offer packages for players.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

Parameter
Type
Description

bundleIds

 

 

array of strings

 

 

An array of specific bundle IDs to look up (e.g., 'starter_pack', 'holiday_bundle').

 

 

isLocked

 

 

boolean

 

 

Filter by locked (true) or unlocked (false) status. A locked bundle may require special conditions, like level requirements.

 

 

limit

 

 

number

 

 

Maximum number of bundles to return in a single response.

 

 

offset

 

 

number

 

 

Number of bundles to skip (for paginated UIs).

 

 

search

 

 

string

 

 

Search keyword to filter bundles by name.

 

 

includeTags

 

 

array of strings

 

 

Array of tags to narrow down or categorize the bundles.

 

 

attributes

 

 

array

 

 

A list of additional attributes you wish to retrieve for each bundle.

 

 

Available Attributes:

properties: Object containing detailed bundle properties.

prices: Array of price objects for the bundle.

contents: Object describing the items, bundles, and currencies contained within this bundle.

unlockConditions: Object describing how this bundle can be unlocked.

meta: Additional metadata about the bundle.

tags: Array of tags associated with the bundle for categorization.

Default Response Fields
By default, the following minimal fields are returned for each bundle:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the bundle in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the bundle.

 

 

name

 

 

string

 

 

Name of the bundle.

 

 

description

 

 

string

 

 

Description of the bundle.

 

 

iconUrl

 

 

string

 

 

URL to the bundle's icon.

 

 

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

 

 

Contains the bundles information.

 

 

Data Object Structure

Field
Type
Description

bundles

 

 

array

 

 

An array of bundle objects.

 

 

totalCount

 

 

integer

 

 

Total number of bundles available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Bundle Object Structure
Default Fields:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the bundle in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the bundle.

 

 

name

 

 

string

 

 

Name of the bundle.

 

 

description

 

 

string

 

 

Description of the bundle.

 

 

iconUrl

 

 

string

 

 

URL to the bundle's icon.

 

 

Properties Object (if requested):
The properties object can include the following fields:

Field
Type
Description

isConsumable

 

 

boolean

 

 

Whether the bundle can be consumed.

 

 

isEquippable

 

 

boolean

 

 

Whether the bundle can be equipped.

 

 

isTradable

 

 

boolean

 

 

Whether the bundle can be traded.

 

 

isStackable

 

 

boolean

 

 

Whether multiple instances of the bundle can be stacked.

 

 

isLocked

 

 

boolean

 

 

Whether the bundle is locked by default.

 

 

stackCapacity

 

 

number

 

 

Maximum number of bundles that can be stacked. Can be null.

 

 

maxCollectionInstance

 

 

number

 

 

Maximum number of instances a player can collect. Can be null.

 

 

quantity

 

 

number

 

 

Default quantity of the bundle. Can be null.

 

 

limitedQuantity

 

 

number

 

 

Whether the bundle has a limited quantity. Can be null.

 

 

consumeByUses

 

 

number

 

 

Number of uses before the bundle is consumed. Can be null.

 

 

consumeByTime

 

 

number

 

 

Time duration before the bundle is consumed. Can be null.

 

 

consumeByTimeFormat

 

 

string

 

 

Format of the time duration (e.g., "days", "hours"). Can be null.

 

 

Contents Object (if requested):
The contents object describes what's included in the bundle:

Field
Type
Description

items

 

 

array

 

 

Array of items included in the bundle. Each item includes its uuid, id, name, description, iconUrl, and quantity.

 

 

bundles

 

 

array

 

 

Array of sub-bundles included in this bundle. Each sub-bundle includes its uuid, id, name, description, iconUrl, and quantity.

 

 

currencies

 

 

array

 

 

Array of currencies included in the bundle. Each currency includes its uuid, id, name, description, iconUrl, and quantity.

 

 

Prices Array (if requested):
Each price object can include:

Field
Type
Description

priceType

 

 

string

 

 

Type of price (e.g., "currency", "realMoney").

 

 

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

 

 

Items that unlock this bundle when obtained.

 

 

unlockBundle

 

 

array

 

 

Bundles that unlock this bundle when obtained.

 

 

unlockLevel

 

 

array

 

 

Progression levels that unlock this bundle when reached.

 

 

Each unlock level object includes:

Field
Type
Description

lockedLevelNo

 

 

number

 

 

Level number required to unlock the bundle.

 

 

unlockProgressionSystem

 

 

object

 

 

Progression system details including uuid, id, and name.

 

 

Meta Object (if requested):
The meta object contains additional, bundle-specific metadata that is entirely user-defined through the Specter dashboard. This allows you to attach any custom data needed for your specific implementation without any predefined structure.
Tags Array (if requested):
An array of strings representing tags associated with the bundle. These tags are completely user-defined in the Specter dashboard and can be used for filtering and categorization as needed for your application.
Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each bundle.

Filtering by Tags: Use the includeTags parameter to retrieve bundles that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of bundles.

Searching: Use the search parameter to find bundles by name.

Bundle Contents: The contents object provides a detailed inventory of what's included in each bundle, making it easy to display this information to players.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Icon URLs: The iconUrl provides the direct path to the bundle's image, which can be used in your application to display bundle visuals.

Integration Tips

Featured Bundles: Create a "featured" tag for bundles you want to highlight in your store or promotional areas.

Bundle Comparison: Allow players to compare bundle contents to help them decide which offers the best value.

Limited Availability: Use the meta field to store information about bundle availability periods, allowing you to create urgency with limited-time offers.

Cross-Promotion: Design bundles that include items from multiple realms to encourage players to explore different areas of Arcadia Nexus.

Value Visualization: Clearly display the discount or savings for each bundle compared to purchasing items individually.

The Get Bundles endpoint allows you to access detailed information about the bundles available within your application. By utilizing the optional parameters and attributes, you can tailor the response to suit your application's needs, whether you need basic information or comprehensive details including contents, prices, unlock conditions, metadata, and tags.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

bundles, special-offers, monetization, economy, loot-box
