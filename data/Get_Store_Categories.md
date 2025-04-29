# Get Store Categories

**Group:** App

**Description:** Retrieves a list of store categories (e.g., 'Weapons', 'Armor', 'Consumables') from a specific store.

**Route:** /v2/client/app/get-store-categories

**Method:** POST

## Parameters

- **storeId**: Unique identifier of the store from which to fetch categories (e.g. 'main_store').
- **categoryIds**: Array of category IDs to fetch specific categories (e.g. ['weapon_cat', 'armor_cat']).
- **offset**: Maximum number of categories to return in a single response.
- **limit**: Maximum number of categories to return in a single response.
- **search**: Keyword-based search (e.g. 'potion', 'legendary') across category names.

## Examples

### Retrieve All Categories from a Store

In this example, we retrieve all categories from a specific store. This is suitable when you need to display all available sections of a marketplace to a player.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return all categories in the Central Nexus Marketplace, such as "Weapons," "Armor," "Accessories," "Consumables," "Crafting Materials," "Cosmetics," "Mounts," and "Housing." Players can see all available sections of the marketplace and decide which area to browse.

#### Request

```
POST /v2/client/app/get-store-categories
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}



Body: {
  "storeId": "central_marketplace"
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
  "message": "Store Category list",
  "errors": [],
  "data": [
    {
      "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
      "id": "weapons_cat",
      "name": "Weapons",
      "description": "Swords, bows, staffs, and other weapons from across the realms",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/weapons_category.png",
      "isDefault": true,
      "contentsCount": 45
    },
    {
      "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
      "id": "armor_cat",
      "name": "Armor",
      "description": "Protective gear for adventurers of all types",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/armor_category.png",
      "isDefault": false,
      "contentsCount": 38
    },
    {
      "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
      "id": "accessories_cat",
      "name": "Accessories",
      "description": "Rings, amulets, and other magical accessories",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/accessories_category.png",
      "isDefault": false,
      "contentsCount": 32
    },
    {
      "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
      "id": "consumables_cat",
      "name": "Consumables",
      "description": "Potions, scrolls, and other single-use items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/consumables_category.png",
      "isDefault": false,
      "contentsCount": 28
    },
    {
      "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
      "id": "crafting_cat",
      "name": "Crafting Materials",
      "description": "Resources and ingredients for crafting",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/crafting_category.png",
      "isDefault": false,
      "contentsCount": 53
    },
    {
      "uuid": "f6a7b8c9-d0e1-2345-f6a7-b8c9d0e12345",
      "id": "cosmetics_cat",
      "name": "Cosmetics",
      "description": "Outfits, skins, and other appearance items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/cosmetics_category.png",
      "isDefault": false,
      "contentsCount": 64
    },
    {
      "uuid": "g7h8i9j0-k1l2-3456-g7h8-i9j0k1l23456",
      "id": "mounts_cat",
      "name": "Mounts",
      "description": "Creatures and vehicles for faster travel",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/mounts_category.png",
      "isDefault": false,
      "contentsCount": 15
    },
    {
      "uuid": "h8i9j0k1-l2m3-4567-h8i9-j0k1l2m34567",
      "id": "housing_cat",
      "name": "Housing",
      "description": "Furniture, decorations, and other home items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/housing_category.png",
      "isDefault": false,
      "contentsCount": 72
    }
  ]
}
```

### Retrieve Specific Categories by IDs

In this example, we retrieve specific categories by providing their IDs. This is useful when you want to display particular sections of a store to a player.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about two specific categories in the Fire Realm Bazaar: "Fire Weapons" (which includes fire-imbued swords, bows, and staffs) and "Fire Armor" (which includes heat-resistant armor sets and protective gear). This allows players to quickly access the specific sections they're interested in.

#### Request

```
POST /v2/client/app/get-store-categories
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "storeId": "fire_realm_bazaar",
  "categoryIds": ["fire_weapons", "fire_armor"]
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
  "message": "Store Category list",
  "errors": [],
  "data": [
    {
      "uuid": "i9j0k1l2-m3n4-5678-i9j0-k1l2m3n45678",
      "id": "fire_weapons",
      "name": "Fire Weapons",
      "description": "Weapons imbued with the power of fire",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_weapons_category.png",
      "isDefault": true,
      "contentsCount": 18
    },
    {
      "uuid": "j0k1l2m3-n4o5-6789-j0k1-l2m3n4o56789",
      "id": "fire_armor",
      "name": "Fire Armor",
      "description": "Heat-resistant armor and protective gear",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/fire_armor_category.png",
      "isDefault": false,
      "contentsCount": 12
    }
  ]
}
```

### Search for Categories by Keyword

In this example, we search for categories matching a specific keyword. This is useful for helping players find relevant sections in a large store.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return categories with "magical" in their name or description, such as "Magical Artifacts," "Magical Consumables," or "Magical Crafting Materials." This helps players quickly find sections related to magical items across the marketplace.

#### Request

```
POST /v2/client/app/get-store-categories
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "storeId": "central_marketplace",
  "search": "magical"
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
  "message": "Store Category list",
  "errors": [],
  "data": [
    {
      "uuid": "k1l2m3n4-o5p6-7890-k1l2-m3n4o5p67890",
      "id": "magical_artifacts",
      "name": "Magical Artifacts",
      "description": "Rare and powerful magical items from across the realms",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/magical_artifacts_category.png",
      "isDefault": false,
      "contentsCount": 25
    },
    {
      "uuid": "l2m3n4o5-p6q7-8901-l2m3-n4o5p6q78901",
      "id": "magical_consumables",
      "name": "Magical Consumables",
      "description": "Potions, scrolls, and other magical single-use items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/magical_consumables_category.png",
      "isDefault": false,
      "contentsCount": 20
    },
    {
      "uuid": "m3n4o5p6-q7r8-9012-m3n4-o5p6q7r89012",
      "id": "magical_crafting",
      "name": "Magical Crafting Materials",
      "description": "Rare ingredients for crafting magical items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/magical_crafting_category.png",
      "isDefault": false,
      "contentsCount": 30
    }
  ]
}
```

### Paginate Through Categories

In this example, we paginate through categories in a store with many sections. This is useful for optimizing performance and displaying categories in manageable groups.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return the first five categories of the Central Nexus Marketplace. Players can view these initial categories and then load more by adjusting the offset parameter, creating a smooth browsing experience even in stores with dozens of categories.

#### Request

```
POST /v2/client/app/get-store-categories
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "storeId": "central_marketplace",
  "limit": 5,
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
  "message": "Store Category list",
  "errors": [],
  "data": [
    {
      "uuid": "a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
      "id": "weapons_cat",
      "name": "Weapons",
      "description": "Swords, bows, staffs, and other weapons from across the realms",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/weapons_category.png",
      "isDefault": true,
      "contentsCount": 45
    },
    {
      "uuid": "b2c3d4e5-f6a7-8901-b2c3-d4e5f6a78901",
      "id": "armor_cat",
      "name": "Armor",
      "description": "Protective gear for adventurers of all types",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/armor_category.png",
      "isDefault": false,
      "contentsCount": 38
    },
    {
      "uuid": "c3d4e5f6-a7b8-9012-c3d4-e5f6a7b89012",
      "id": "accessories_cat",
      "name": "Accessories",
      "description": "Rings, amulets, and other magical accessories",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/accessories_category.png",
      "isDefault": false,
      "contentsCount": 32
    },
    {
      "uuid": "d4e5f6a7-b8c9-0123-d4e5-f6a7b8c90123",
      "id": "consumables_cat",
      "name": "Consumables",
      "description": "Potions, scrolls, and other single-use items",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/consumables_category.png",
      "isDefault": false,
      "contentsCount": 28
    },
    {
      "uuid": "e5f6a7b8-c9d0-1234-e5f6-a7b8c9d01234",
      "id": "crafting_cat",
      "name": "Crafting Materials",
      "description": "Resources and ingredients for crafting",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/crafting_category.png",
      "isDefault": false,
      "contentsCount": 53
    }
  ]
}
```

### Find Default Category

In this example, we retrieve all categories and identify the default one. This is useful for determining which section to display first when a player enters a store.
Then filter client-side for the category where isDefault is true.
Context for Arcadia Nexus:
For Arcadia Nexus, this would allow you to identify the default category in the Forest Whispers Trading Post, perhaps "Forest Essentials," which would be the first section displayed to players when they enter this marketplace. This default category typically contains the most popular or essential items for that particular store.

 

#### Request

```
POST /v2/client/app/get-store-categories
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "storeId": "forest_trading_post"
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
  "message": "Store Category list",
  "errors": [],
  "data": [
    {
      "uuid": "n4o5p6q7-r8s9-0123-n4o5-p6q7r8s90123",
      "id": "forest_essentials",
      "name": "Forest Essentials",
      "description": "Essential items for exploring the Forest of Whispers",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_essentials_category.png",
      "isDefault": true,
      "contentsCount": 22
    },
    {
      "uuid": "o5p6q7r8-s9t0-1234-o5p6-q7r8s9t01234",
      "id": "plant_materials",
      "name": "Plant Materials",
      "description": "Herbs, seeds, and other botanical resources",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/plant_materials_category.png",
      "isDefault": false,
      "contentsCount": 35
    },
    {
      "uuid": "p6q7r8s9-t0u1-2345-p6q7-r8s9t0u12345",
      "id": "forest_tools",
      "name": "Forest Tools",
      "description": "Specialized tools for navigating and harvesting in the forest",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_tools_category.png",
      "isDefault": false,
      "contentsCount": 15
    },
    {
      "uuid": "q7r8s9t0-u1v2-3456-q7r8-s9t0u1v23456",
      "id": "forest_attire",
      "name": "Forest Attire",
      "description": "Clothing and accessories designed for the Forest of Whispers",
      "iconUrl": "https://cdn.specterapp.xyz/org-123456/app-789012/icons/forest_attire_category.png",
      "isDefault": false,
      "contentsCount": 18
    }
  ]
}
```

## Additional Information

Retrieves a list of store categories (e.g., 'Weapons', 'Armor', 'Consumables') from a specific store. Use this endpoint to fetch the categories available within a store, allowing players to browse and navigate through different sections of your virtual marketplace.
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

 

 

Unique identifier of the store from which to fetch categories (e.g., 'central_marketplace').

 

 

Optional Parameters

Parameter
Type
Description

categoryIds

 

 

array of strings

 

 

Array of category IDs to fetch specific categories (e.g., ['weapons_cat', 'armor_cat']).

 

 

limit

 

 

number

 

 

Maximum number of categories to return in a single response.

 

 

offset

 

 

number

 

 

Number of categories to skip (for paginated UIs).

 

 

search

 

 

string

 

 

Keyword-based search (e.g., 'potion', 'legendary') across category names.

 

 

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

 

 

array

 

 

An array of store category objects.

 

 

Category Object Structure

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the category in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the category.

 

 

name

 

 

string

 

 

Name of the category.

 

 

description

 

 

string

 

 

Description of the category. Can be null if not specified.

 

 

iconUrl

 

 

string

 

 

URL to the category's icon. Can be null if not specified.

 

 

isDefault

 

 

boolean

 

 

Indicates if this is the default category in the store.

 

 

contentsCount

 

 

number

 

 

Number of items or bundles within this category.

 

 

Notes

Required Parameters: The storeId parameter is required to specify which store's categories to retrieve.

Default Category: Each store typically has a default category (where isDefault is true), which may be used as the initial view when a player enters the store.

Category Contents: To retrieve the actual contents (items, bundles, etc.) of a category, use the Get Store Category Contents endpoint after retrieving the category information.

Pagination: Use limit and offset parameters to paginate through the list of categories for stores with many categories.

Searching: Use the search parameter to find categories by name, which is useful for larger stores with many different sections.

Category Icons: When available, the iconUrl can be used to display visual representations of each category in your store interface.

Integration Tips

Visual Category Navigation: Create an intuitive visual navigation system with icons representing each category to help players quickly find what they're looking for.

Category Descriptions: Use the category descriptions to provide context and set expectations for what players will find in each section.

Breadcrumb Navigation: Implement breadcrumb navigation to help players keep track of their location while browsing through the store's hierarchy.

Category Filtering: Allow players to filter or sort categories based on their interests or needs, especially in stores with many different sections.

Featured Categories: Highlight certain categories as "featured" or "recommended" based on the player's preferences or current activities within the game.

The Get Store Categories endpoint allows you to access detailed information about the different sections available within a store. By utilizing the optional parameters, you can tailor the response to suit your application's needs, whether you need all categories, specific ones, or filtered results based on search criteria.

 

## Required Headers

- **api-key**: Environment-specific API key for authentication.

## Tags

in-game-store, shop, economy, purchase, monetization
