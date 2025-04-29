# Get Store Category Contents

**Group:** App

**Description:** Retrieves the items, bundles, or other content within a specific store category. To retrieve contents of the default category, leave categoryId null.

**Route:** /v2/client/app/get-store-category-contents

**Method:** POST

## Parameters

- **storeId**: Unique identifier of the store that houses the category (e.g. 'main_store').
- **categoryId**: A single category ID to retrieve its contents (e.g. 'weapon_cat'). To retrieve contents of the default category, leave categoryId null.
- **limit**: Maximum number of items/bundles to include in the response (pagination).
- **offset**: Number of items/bundles to skip (pagination).

## Examples

### Retrieve Contents of a Specific Category

In this example, we retrieve all contents from a specific category within a store. This is suitable when a player selects a category to browse its products.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all weapons available in the "Weapons" category of the Central Nexus Marketplace. Players can browse swords, bows, staffs, and other weapons from across the realms, along with their descriptions, prices, and other details.

#### Request

```
POST /v2/client/app/get-store-category-contents
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "storeId": "central_marketplace",
  "categoryId": "weapons_cat"
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
  "message": "Store Contents list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
        "id": "steel_sword",
        "name": "Steel Sword",
        "description": "A reliable steel sword for any adventurer",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/steel_sword.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 1500,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      },
      {
        "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
        "id": "fire_bow",
        "name": "Fire Bow",
        "description": "A bow imbued with the essence of fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_bow.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 2500,
            "discount": 10,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      },
      {
        "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
        "id": "crystal_staff",
        "name": "Crystal Staff",
        "description": "A staff made from magical crystals from the Ice Peaks",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/crystal_staff.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 3000,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      }
    ],
    "bundles": [
      {
        "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
        "id": "warrior_weapons_pack",
        "name": "Warrior Weapons Pack",
        "description": "A collection of essential weapons for any warrior",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/warrior_weapons_pack.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 5000,
            "discount": 20,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      }
    ],
    "totalItemsCount": 28,
    "totalBundlesCount": 5
  }
}
```

### Retrieve Contents of the Default Category

In this example, we retrieve the contents of the default category by omitting the categoryId parameter. This is useful when a player first enters a store and should see the default selection of products.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all items and bundles in the default category of the Fire Realm Bazaar, likely the "Fire Weapons" category. This default selection would include the most popular or essential fire-themed items for players exploring the Realm of Fire.

#### Request

```
POST /v2/client/app/get-store-category-contents
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "storeId": "fire_realm_bazaar"
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
  "message": "Store Contents list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
        "id": "flame_sword",
        "name": "Flame Sword",
        "description": "A sword imbued with the essence of fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/flame_sword.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 2000,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
              "id": "fire_coins",
              "name": "Fire Coins",
              "description": "Currency used in the Realm of Fire",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
              "code": "FC",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      },
      {
        "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
        "id": "inferno_dagger",
        "name": "Inferno Dagger",
        "description": "A dagger that burns with intense fire",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/inferno_dagger.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 1800,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
              "id": "fire_coins",
              "name": "Fire Coins",
              "description": "Currency used in the Realm of Fire",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
              "code": "FC",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      }
    ],
    "bundles": [
      {
        "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
        "id": "fire_weaponry_set",
        "name": "Fire Weaponry Set",
        "description": "A complete set of fire-imbued weapons",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_weaponry_set.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 5000,
            "discount": 15,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
              "id": "fire_coins",
              "name": "Fire Coins",
              "description": "Currency used in the Realm of Fire",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_coins.png",
              "code": "FC",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      }
    ],
    "totalItemsCount": 12,
    "totalBundlesCount": 3
  }
}
```

### Paginate Through Category Contents

In this example, we paginate through the contents of a large category. This is useful for optimizing performance and user experience for categories with many products.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return the first 10 cosmetic items or bundles from the "Cosmetics" category in the Central Nexus Marketplace. As the player scrolls or navigates through the store, additional requests can be made with increasing offset values to load more products.

#### Request

```
POST /v2/client/app/get-store-category-contents
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "storeId": "central_marketplace",
  "categoryId": "cosmetics_cat",
  "limit": 2,
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
  "message": "Store Contents list",
  "errors": [],
  "data": {
    "items": [
      {
        "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
        "id": "royal_crown",
        "name": "Royal Crown",
        "description": "A crown fit for royalty",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/royal_crown.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 5000,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      },
      {
        "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
        "id": "celestial_cape",
        "name": "Celestial Cape",
        "description": "A cape adorned with stars and cosmic patterns",
        "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/celestial_cape.png",
        "quantity": null,
        "prices": [
          {
            "priceType": "virtual currency",
            "price": 4500,
            "discount": null,
            "bonusCashAllowance": true,
            "currencyDetails": {
              "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
              "id": "nexus_gems",
              "name": "Nexus Gems",
              "description": "Universal currency used throughout Arcadia Nexus",
              "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/nexus_gems.png",
              "code": "NG",
              "type": "virtual"
            },
            "realWorldCurrency": {}
          }
        ]
      }
    ],
    "bundles": [],
    "totalItemsCount": 48,
    "totalBundlesCount": 6
  }
}
```

## Additional Information

Retrieves the items, bundles, or other content within a specific store category. Use this endpoint to fetch the actual products available for purchase within a category of your virtual store, allowing players to browse and buy virtual goods.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
Required Parameters

Parameter
Type
Description

storeId

 

 

string

 

 

Unique identifier of the store that houses the category (e.g., 'central_marketplace').

 

 

Optional Parameters

Parameter
Type
Description

categoryId

 

 

string

 

 

A single category ID to retrieve its contents (e.g., 'weapons_cat'). To retrieve contents of the default category, leave categoryId null.

 

 

limit

 

 

number

 

 

Maximum number of items/bundles to include in the response (pagination).

 

 

offset

 

 

number

 

 

Number of items/bundles to skip (pagination).

 

 

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

 

 

Contains the category contents information.

 

 

Data Object Structure

Field
Type
Description

items

 

 

array

 

 

An array of item objects available in the category.

 

 

bundles

 

 

array

 

 

An array of bundle objects available in the category.

 

 

totalItemsCount

 

 

integer

 

 

Total number of items in the category.

 

 

totalBundlesCount

 

 

integer

 

 

Total number of bundles in the category.

 

 

Item Object Structure
Each item in the items array includes:

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

 

 

quantity

 

 

number

 

 

Quantity of the item if applicable. Can be null.

 

 

prices

 

 

array

 

 

Array of price objects for the item.

 

 

Bundle Object Structure
Each bundle in the bundles array includes:

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

 

 

quantity

 

 

number

 

 

Quantity of the bundle if applicable. Can be null.

 

 

prices

 

 

array

 

 

Array of price objects for the bundle.

 

 

Price Object Structure
Each price object in the prices array includes:

Field
Type
Description

priceType

 

 

string

 

 

Type of price (e.g., "virtual currency", "real money").

 

 

price

 

 

number

 

 

Price amount.

 

 

discount

 

 

number

 

 

Discount percentage if applicable. Can be null.

 

 

bonusCashAllowance

 

 

boolean

 

 

Whether bonus cash can be used. Can be null.

 

 

currencyDetails

 

 

object

 

 

Details about the currency used for pricing.

 

 

realWorldCurrency

 

 

object

 

 

Details about the real-world currency if applicable.

 

 

Currency Details Object Structure

Field
Type
Description

uuid

 

 

string/number

 

 

Unique identifier of the currency in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the currency.

 

 

name

 

 

string

 

 

Name of the currency.

 

 

description

 

 

string

 

 

Description of the currency.

 

 

iconUrl

 

 

string

 

 

URL to the currency's icon.

 

 

code

 

 

string

 

 

Currency code (e.g., "SK", "USD").

 

 

type

 

 

string

 

 

Type of currency (e.g., "virtual", "real").

 

 

Notes

Required Parameters: The storeId parameter is required to specify which store contains the category.

Default Category: If categoryId is not provided, the contents of the default category will be returned.

Pagination: Use limit and offset parameters to paginate through the contents for categories with many items or bundles.

Content Types: The response separates items and bundles into different arrays, each with their own total count.

Prices: Each item or bundle can have multiple price options, allowing for different purchase methods (e.g., virtual currency, real money).

Integration Tips

Visual Display: Create an attractive grid or list view to display category contents with icons, names, and prices clearly visible.

Sorting Options: Allow players to sort category contents by price, popularity, or newness to help them find products of interest.

Filtering: Implement filtering options within a category, such as filtering weapons by type (sword, bow, staff) or level requirement.

Quick Purchase: Add "Buy Now" buttons directly in the category view for streamlined purchasing of single items.

Detail View: Allow players to click on items to see more detailed information, including full descriptions and special properties.

Bundle Preview: For bundles, create a preview feature that shows all included items before purchase.

The Get Store Category Contents endpoint is essential for implementing a functional in-game store, allowing players to browse and purchase virtual goods. By using this endpoint in conjunction with the Get Stores and Get Store Categories endpoints, you can create a comprehensive shopping experience in your Arcadia Nexus application.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

store, economy, monetization, items, bundles, currencies, purchase
