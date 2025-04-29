# Get App Info

**Group:** App

**Description:** Retrieves detailed information about the application, including how-to guides, screenshots, videos, and metadata.

**Route:** /v2/client/app/get-info

**Method:** POST

## Attributes

- **howTo** (string): Instructions for app usage.
- **screenshotUrls** (array): URLs for app screenshots.
- **videoUrls** (array): URLs for app videos.
- **categories** (array): App categories.
- **platforms** (array): Supported platforms.
- **locations** (array): Locations where app is available.
- **genre** (string): App genre.
- **meta** (object): Additional metadata.
- **tags** (array): Tags associated with the app.

## Examples

### Requesting Minimal Information

In this example, we request only the default minimal information by making a request without the attributes array. This is suitable when you need basic app information, such as displaying the app name and icon in a navigation menu.
Context for Arcadia Nexus:
For Arcadia Nexus, this would return the basic information like the app's UUID, ID, name, description, and icon URL

#### Request

```
POST /v2/client/app/get-info
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
    "message": "App info retrieved successfully.",
    "data": {
        "uuid": "672b3a58-e560-0d90-6ce3-830b00000000",
        "id": "arcadia_nexus",
        "name": "Arcadia Nexus",
        "description": "Arcadia Nexus is an open-world metaverse adventure where players explore multiple themed realms, each offering unique challenges, mini-games, and quests.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/app_icon.png"
    }
}
```

### Requesting Specific Attributes

In this example, we retrieve only specific attributes, such as genre and platforms. This approach is efficient when you only need certain details, reducing the amount of data transferred.
Request Parameters Sent:

attributes: An array containing all the optional attributes listed above to retrieve complete information for the app

Attributes Requested:

genre

platforms

Context for Arcadia Nexus:
For Arcadia Nexus, this would provide information about the app's genre and the platforms it supports, including asset bundle URLs and minimum app versions.

#### Request

```
POST /v2/client/app/get-info
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "attributes": ["genre", "platforms"]
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
  "message": "App info retrieved successfully.",
  "data": {
    "uuid": "672b3a58-e560-0d90-6ce3-830b00000000",
    "id": "arcadia_nexus",
    "name": "Arcadia Nexus",
    "description": "Arcadia Nexus is an open-world metaverse adventure where players explore multiple themed realms.",
    "iconUrl": "https://cdn.arcadianexus.com/icons/app_icon.png",
    "genre": {
      "id": 2,
      "name": "adventure"
    },
    "platforms": [
      {
        "id": 1,
        "name": "android",
        "assetBundleUrl": "https://cdn.arcadianexus.com/bundles/android_bundle.zip",
        "minimumAppVersion": "1.0.0",
        "assetBundleVersion": "1.0.5"
      },
      {
        "id": 2,
        "name": "ios",
        "assetBundleUrl": "https://cdn.arcadianexus.com/bundles/ios_bundle.zip",
        "minimumAppVersion": "1.0.0",
        "assetBundleVersion": "1.0.5"
      }
    ]
  }
}

```

### Requesting Complete Information

In this example, we retrieve all available information about the app by including all optional attributes in the attributes array. This is useful when you want to display comprehensive app details, such as on a game's landing page or in an app store listing.
Request Parameters Sent:

attributes: An array containing all the optional attributes listed above to retrieve complete information for the app

Attributes Requested:

howTo

screenshotUrls

videoUrls

meta

tags

isScreenOrientationLandscape

categories

platforms

locations

genre

Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch all details like how to play the game, screenshots, videos, metadata such as release date and developer info, tags for categorization, display orientation, available categories, supported platforms with their asset bundle URLs, locations where the game is available, and the game's genre.

 

#### Request

```
POST /v2/client/app/get-info
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "attributes": [
    "howTo",
    "screenshotUrls",
    "videoUrls",
    "categories",
    "platforms",
    "locations",
    "genre",
    "meta",
    "tags"
  ]
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
  "message": "App info retrieved successfully.",
  "data": {
    "uuid": "672b3a58-e560-0d90-6ce3-830b00000000",
    "id": "arcadia_nexus",
    "name": "Arcadia Nexus",
    "description": "Arcadia Nexus is an open-world metaverse adventure where players explore multiple themed realms, each offering unique challenges, mini-games, and quests.",
    "iconUrl": "https://cdn.arcadianexus.com/icons/app_icon.png",
    "howTo": "Start your journey by creating your avatar and entering the Nexus Gateway. Complete quests, collect items, and level up to unlock new abilities and realms. Customize your character with unique outfits and gadgets collected across realms.",
    "screenshotUrls": [
      "https://cdn.arcadianexus.com/screenshots/screen1.png",
      "https://cdn.arcadianexus.com/screenshots/screen2.png",
      "https://cdn.arcadianexus.com/screenshots/screen3.png"
    ],
    "videoUrls": [
      "https://cdn.arcadianexus.com/videos/trailer.mp4",
      "https://cdn.arcadianexus.com/videos/gameplay_overview.mp4"
    ],
    "meta": {
      "releaseDate": "2023-10-15",
      "developer": "Arcadia Studios",
      "version": "1.0.5",
      "website": "https://www.arcadianexus.com",
      "supportEmail": "support@arcadianexus.com"
    },
    "tags": [
      "Metaverse",
      "Open-World",
      "Adventure",
      "Multiplayer",
      "Quests",
      "Customization"
    ],
    "isScreenOrientationLandscape": true,
    "categories": [
      {
        "id": 1,
        "name": "Gaming"
      },
      {
        "id": 2,
        "name": "Productivity"
      }
    ],
    "platforms": [
      {
        "id": 1,
        "name": "android",
        "assetBundleUrl": "https://cdn.arcadianexus.com/bundles/android_bundle.zip",
        "minimumAppVersion": "1.0.0",
        "assetBundleVersion": "1.0.5"
      },
      {
        "id": 2,
        "name": "ios",
        "assetBundleUrl": "https://cdn.arcadianexus.com/bundles/ios_bundle.zip",
        "minimumAppVersion": "1.0.0",
        "assetBundleVersion": "1.0.5"
      }
    ],
    "locations": [
      {
        "id": 236,
        "name": "United States of America",
        "code": "840"
      },
      {
        "id": 235,
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "code": "826"
      },
      {
        "id": 113,
        "name": "Japan",
        "code": "392"
      }
    ],
    "genre": {
      "id": 2,
      "name": "adventure"
    }
  }
}

```

## Additional Information

Retrieves detailed information about your application, including how-to guides, screenshots, videos, categories, supported platforms, locations, genre, metadata, and tags. Use this endpoint to access all the descriptive content and media assets associated with your application, which can be utilized in your client applications or game websites.
By default, the response returns minimal information about the app. You can request additional details by specifying them in the attributes array in your request.

Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify an attributes array to request additional details beyond the minimal default response.
Optional Parameters

attributes (array): A list of additional attributes you wish to retrieve.

Default Response Fields
By default, the following minimal fields are returned:

Field
Type
Description

uuid

 

 

string

 

 

The unique identifier of the app in the database.

 

 

id

 

 

string

 

 

The client-defined identifier for the app.

 

 

name

 

 

string

 

 

The name of the app.

 

 

description

 

 

string

 

 

A brief description of the app.

 

 

iconUrl

 

 

string

 

 

URL to the app's icon.

 

 

Available Attributes
You can request the following additional attributes:

Attribute
Type
Description

howTo

 

 

string

 

 

Instructions or a guide on how to use the app.

 

 

screenshotUrls

 

 

array

 

 

URLs of the app's screenshots.

 

 

videoUrls

 

 

array

 

 

URLs of the app's videos or trailers.

 

 

meta

 

 

object

 

 

Additional metadata about the app.

 

 

tags

 

 

array

 

 

Tags associated with the app for categorization or search.

 

 

isScreenOrientationLandscape

 

 

boolean

 

 

Indicates if the app is designed for landscape orientation.

 

 

categories

 

 

array

 

 

Categories the app belongs to. Each category includes: id (integer), name (string).

 

 

platforms

 

 

array

 

 

Supported platforms. Each platform includes: id, name, assetBundleUrl, minimumAppVersion, assetBundleVersion.

 

 

locations

 

 

array

 

 

Locations where the app is available. Each location includes: id (integer), name (string), code (string).

 

 

genre

 

 

object

 

 

The genre of the app. Includes: id (integer), name (string).

 

 

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

 

 

Contains the application information.

 

 

Data Object Attributes

Attribute
Type
Description

uuid

 

 

string

 

 

Unique identifier of the app in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the app.

 

 

name

 

 

string

 

 

Name of the app.

 

 

description

 

 

string

 

 

A brief description of the app.

 

 

iconUrl

 

 

string

 

 

URL to the app's icon.

 

 

howTo

 

 

string

 

 

Instructions or a guide on how to use the app.

 

 

screenshotUrls

 

 

array

 

 

URLs of the app's screenshots.

 

 

videoUrls

 

 

array

 

 

URLs of the app's videos or trailers.

 

 

meta

 

 

object

 

 

Additional metadata about the app.

 

 

tags

 

 

array

 

 

Tags associated with the app.

 

 

isScreenOrientationLandscape

 

 

boolean

 

 

Indicates if the app is designed for landscape orientation.

 

 

categories

 

 

array

 

 

Categories the app belongs to. See structure below.

 

 

platforms

 

 

array

 

 

Supported platforms. See structure below.

 

 

locations

 

 

array

 

 

Locations where the app is available. See structure below.

 

 

genre

 

 

object

 

 

The genre of the app. See structure below.

 

 

Categories Array Structure
Each category object includes:

Field
Type
Description

id

 

 

integer

 

 

Category ID.

 

 

name

 

 

string

 

 

Category name.

 

 

Platforms Array Structure
Each platform object includes:

Field
Type
Description

id

 

 

integer

 

 

Platform ID.

 

 

name

 

 

string

 

 

Platform name.

 

 

assetBundleUrl

 

 

string

 

 

URL to the platform-specific asset bundle.

 

 

minimumAppVersion

 

 

string

 

 

Minimum required app version for the platform.

 

 

assetBundleVersion

 

 

string

 

 

Version of the asset bundle.

 

 

Locations Array Structure
Each location object includes:

Field
Type
Description

id

 

 

integer

 

 

Country ID.

 

 

name

 

 

string

 

 

Country name.

 

 

code

 

 

string

 

 

Country code.

 

 

Genre Object Structure
The genre object includes:

Field
Type
Description

id

 

 

integer

 

 

Genre ID.

 

 

name

 

 

string

 

 

Genre name.

 

 

Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes (uuid, id, name, description, iconUrl).

Master Data Reference: The IDs used for categories, platforms, locations, and genre correspond to the IDs provided in the Specter master data. Ensure you reference these IDs correctly when processing the response.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Media Assets: The URLs provided in screenshotUrls and videoUrls can be used directly in your application to display media assets.

## Required Headers

- **api-key**: This header should contain the environment-specific API key. Use the key corresponding to the current environment (e.g., development,qa, production) for authentication.

## Tags

app-info, application-details, how-to-guides, screenshots, videos, metadata, categories, platforms, locations, genre, asset-bundles
