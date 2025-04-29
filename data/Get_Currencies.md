# Get Currencies

**Group:** App

**Description:** Fetches currencies with optional filters such as currency IDs, type, attributes, search keyword, and tags. Supports pagination through offset and limit fields.

**Route:** /v2/client/app/get-currencies

**Method:** POST

## Parameters

- **currencyIds**: An array of currency IDs to filter results by.
- **type**: Filter currencies by a specific type (virtual or real)
- **limit**: The maximum number of currencies to return in the response.
- **offset**: The number of currencies to skip, used for paginated requests.
- **search**: A string to search for currencies by name.
- **includeTags**: An array of tags to filter the currencies by.

## Attributes

- **meta** (object): Additional metadata.
- **tags** (array): Tags associated with the app.

## Examples

### Retrieve All Currencies with Default Information

In this example, we retrieve all currencies with minimal default information. This is suitable when you need basic currency information, such as displaying a list of currencies available within Arcadia Nexus.
Request Parameters Sent:

No parameters are required. You can send an empty request body or include limit and offset for pagination.

Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all available currencies, such as Arcadian Coins and Nexus Gems, including their UUIDs, names, descriptions, icon URLs, codes, and types.

#### Request

```
POST /v2/client/app/get-currencies
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
  "message": "Currencies retrieved successfully.",
  "errors": [],
  "data": {
    "currencies": [
      {
        "uuid": "currency1-uuid",
        "name": "Arcadian Coins",
        "description": "The primary currency used across Arcadia Nexus for basic transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/arcadian_coins.png",
        "code": "ARC",
        "type": "virtual"
      },
      {
        "uuid": "currency2-uuid",
        "name": "Nexus Gems",
        "description": "A premium currency for purchasing exclusive items and perks.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/nexus_gems.png",
        "code": "NEX",
        "type": "virtual"
      },
      {
        "uuid": "currency3-uuid",
        "name": "Realm Tokens",
        "description": "Tokens specific to certain realms, used for realm-specific transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/realm_tokens.png",
        "code": "RTK",
        "type": "virtual"
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2023-10-15T12:00:00Z"
  }
}

```

### Retrieve Specific Currencies by IDs

In this example, we retrieve specific currencies by providing their IDs. This is useful when you want details about particular currencies, such as displaying information about premium currencies.
Request Parameters Sent:

currencyIds: An array containing the IDs of the currencies to retrieve, e.g., ["arcadian_coins", "nexus_gems"].

Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about specific currencies like Arcadian Coins and Nexus Gems, including their UUIDs, names, descriptions, icon URLs, codes, and types.

#### Request

```
POST /v2/client/app/get-currencies
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "currencyIds": ["arcadian_coins", "nexus_gems"]
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
  "message": "Currencies retrieved successfully.",
  "errors": [],
  "data": {
    "currencies": [
      {
        "uuid": "currency1-uuid",
        "id": "arcadian_coins",
        "name": "Arcadian Coins",
        "description": "The primary currency used across Arcadia Nexus for basic transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/arcadian_coins.png",
        "code": "ARC",
        "type": "virtual"
      },
      {
        "uuid": "currency2-uuid",
        "id": "nexus_gems",
        "name": "Nexus Gems",
        "description": "A premium currency for purchasing exclusive items and perks.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/nexus_gems.png",
        "code": "NEX",
        "type": "virtual"
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2023-10-15T12:00:00Z"
  }
}

```

### Retrieve Currencies with Specific Attributes

In this example, we retrieve currencies along with their metadata and tags by requesting the meta and tags attributes. This is useful when you want to display additional information about each currency, such as usage instructions or special properties.
Request Parameters Sent:

attributes: An array containing the attributes to retrieve, e.g., ["meta", "tags"].

Attributes Requested:

meta

tags

Context for Arcadia Nexus:
For Arcadia Nexus, this would include additional details for each currency, such as:

Meta: Additional metadata like resource flags, in-game usage information, or exchange rates.

Tags: Tags associated with each currency, such as "premium", "earnable", or "tradable".

This allows you to provide comprehensive currency information to players.

#### Request

```
POST /v2/client/app/get-currencies
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "attributes": ["meta", "tags"]
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
  "message": "Currencies retrieved successfully.",
  "errors": [],
  "data": {
    "currencies": [
      {
        "uuid": "currency1-uuid",
        "name": "Arcadian Coins",
        "description": "The primary currency used across Arcadia Nexus for basic transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/arcadian_coins.png",
        "code": "ARC",
        "type": "virtual",
        "meta": {
          "exchangeRate": 1,
          "usage": "Used for purchasing common items and services."
        },
        "tags": ["earnable", "tradable"]
      },
      {
        "uuid": "currency2-uuid",
        "name": "Nexus Gems",
        "description": "A premium currency for purchasing exclusive items and perks.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/nexus_gems.png",
        "code": "NEX",
        "type": "virtual",
        "meta": {
          "exchangeRate": 100,
          "usage": "Used for purchasing premium items."
        },
        "tags": ["premium", "purchasable"]
      },
      {
        "uuid": "currency3-uuid",
        "name": "Realm Tokens",
        "description": "Tokens specific to certain realms, used for realm-specific transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/realm_tokens.png",
        "code": "RTK",
        "type": "virtual",
        "meta": {
          "realm": "Forest of Whispers",
          "usage": "Access special events and items within the realm."
        },
        "tags": ["realm-specific", "earnable"]
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2023-10-15T12:00:00Z"
  }
}
```

### Retrieve Currencies Filtered by Type

In this example, we retrieve currencies of a specific type by using the type parameter. This is useful when you want to display only virtual currencies or only real money currencies.
Request Parameters Sent:

type: The type of currency to filter, e.g., "virtual".

Context for Arcadia Nexus:
For Arcadia Nexus, this would return all currencies that are of type "virtual", such as Arcadian Coins and Gemstones, excluding any real money currencies.

 

 

#### Request

```
POST /v2/client/app/get-currencies
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "type": "virtual"
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
  "message": "Currencies retrieved successfully.",
  "errors": [],
  "data": {
    "currencies": [
      {
        "uuid": "currency1-uuid",
        "name": "Arcadian Coins",
        "description": "The primary currency used across Arcadia Nexus for basic transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/arcadian_coins.png",
        "code": "ARC",
        "type": "virtual"
      },
      {
        "uuid": "currency2-uuid",
        "name": "Nexus Gems",
        "description": "A premium currency for purchasing exclusive items and perks.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/nexus_gems.png",
        "code": "NEX",
        "type": "virtual"
      },
      {
        "uuid": "currency3-uuid",
        "name": "Realm Tokens",
        "description": "Tokens specific to certain realms, used for realm-specific transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/realm_tokens.png",
        "code": "RTK",
        "type": "virtual"
      }
    ],
    "totalCount": 3,
    "lastUpdate": "2023-10-15T12:00:00Z"
  }
}

```

### Retrieve Currencies Filtered by Tags

In this example, we retrieve currencies that have specific tags. This is useful when you want to filter currencies based on certain attributes, such as displaying all currencies that can be purchased or earned.
Request Parameters Sent:

includeTags: An array containing the tags to filter by, e.g., ["earnable", "tradable"].

attributes: An array containing the attributes to retrieve, e.g., ["tags"].

Attributes Requested:

tags

Context for Arcadia Nexus:
For Arcadia Nexus, this would return all currencies that are tagged as "earnable" or "tradable", allowing you to display a curated list of currencies matching these tags.

#### Request

```
POST /v2/client/app/get-currencies
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["earnable", "tradable"],
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
  "message": "Currencies retrieved successfully.",
  "errors": [],
  "data": {
    "currencies": [
      {
        "uuid": "currency1-uuid",
        "name": "Arcadian Coins",
        "description": "The primary currency used across Arcadia Nexus for basic transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/arcadian_coins.png",
        "code": "ARC",
        "type": "virtual",
        "tags": ["earnable", "tradable"]
      },
      {
        "uuid": "currency3-uuid",
        "name": "Realm Tokens",
        "description": "Tokens specific to certain realms, used for realm-specific transactions.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/realm_tokens.png",
        "code": "RTK",
        "type": "virtual",
        "tags": ["realm-specific", "earnable"]
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2023-10-15T12:00:00Z"
  }
}
```

## Additional Information

Fetches the list of available in-app currencies, including details on each currency's metadata and tags. Use this endpoint to retrieve currency information that can be displayed in your application or website, such as virtual currencies used for in-game purchases or resources.

Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

currencyIds (array of strings): An array of currency IDs to fetch specific currencies.

type (string): The type of currency to filter (e.g., "virtual", "RMG").

limit (number): The maximum number of currencies to return in the response.

offset (number): The number of currencies to skip for pagination.

search (string): A search keyword to filter currencies by name.

includeTags (array of strings): An array of tags to filter the currencies.

attributes (array): A list of additional attributes you wish to retrieve for each currency.
Available Attributes:

meta (object): Additional metadata for the currencies.

tags (array): Tags associated with the currencies.

Default Response Fields
By default, the following minimal fields are returned for each currency:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the currency in the database.

 

 

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

 

 

Currency code (e.g., "USD", "ARC").

 

 

type

 

 

string

 

 

Type of the currency (e.g., "virtual", "RMG").

 

 

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

 

 

Contains the currencies information.

 

 

Data Object Structure

Field
Type
Description

currencies

 

 

array

 

 

An array of currency objects.

 

 

totalCount

 

 

integer

 

 

Total number of currencies available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each currency.

Filtering by Tags: Use the includeTags parameter to retrieve currencies that have any of the specified tags.

Pagination: Use limit and offset parameters to paginate through the list of currencies.

Searching: Use the search parameter to find currencies by name.

Currency Types: The type field can be used to filter currencies by their type, such as "virtual" or "Real" (Real Money Gaming).

Additional Attributes: Request the meta and tags attributes to get additional information about each currency.

Integration Tips

Caching: Consider caching the currency information locally if it doesn't change frequently to reduce API calls and improve performance.

Error Handling: Implement robust error handling to manage cases where the API key is invalid or network issues occur.

Data Validation: Always validate the data received before using it in your application to prevent issues caused by unexpected data formats.

Currency Types: Be aware of the different types of currencies (e.g., virtual, real money) and handle them appropriately in your application.

The Get Currencies endpoint allows you to access detailed information about the currencies available within your application. By utilizing the optional parameters and attributes, you can tailor the response to suit your application's needs, whether you need basic information or comprehensive details including metadata and tags.
Adjust the request parameters and attributes according to your requirements to optimize performance and user experience.

## Required Headers

- **api-key**: This header should contain the environment-specific API key. Use the key corresponding to the current environment (e.g., development,qa, production) for authentication.

## Tags

currencies, economy, app, payment, purchase
