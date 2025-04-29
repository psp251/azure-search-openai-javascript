# Get Games

**Group:** App

**Description:** Fetches a list of games available within the application, with options to filter by platform, genre, and other criteria.

**Route:** /v2/client/app/get-games

**Method:** POST

## Parameters

- **gameIds**: An array of unique game identifiers to fetch specific games.
- **isDefault**: A boolean flag to indicate if only the default game should be fetched.
- **limit**: The maximum number of games to return in the response.
- **offset**: The number of games to skip before starting to return results, for pagination.
- **search**: A string to search for games by name.
- **includeTags**: Tags to filter the Games.

## Attributes

- **howTo** (string): Guides on playing games.
- **screenshotUrls** (array): URLs for game screenshots.
- **videoUrls** (array): URLs for game videos.
- **isScreenOrientationLandscape** (boolean): Landscape screen orientation flag.
- **platforms** (array): Supported platforms for games.
- **locations** (array): Regions where games are available.
- **genre** (string): Game genre.
- **meta** (object): Additional metadata for games.
- **tags** (array): Tags for games.
- **matches** (array): Child Entity that can be retrieved with basic information

## Examples

### Retrieve All Games with Complete Information

In this example, we retrieve all games with all available attributes. This is useful when you want to display comprehensive game details for each realm within Arcadia Nexus, such as in a detailed game catalog or when a user selects a game to learn more about it.
Request Parameters Sent:

attributes: An array containing all the optional attributes listed above to retrieve complete information for each game.

Attributes Requested:

howTo

screenshotUrls

videoUrls

meta

tags

isScreenOrientationLandscape

platforms

locations

genre

Context for Arcadia Nexus:
For Arcadia Nexus, this would fetch all details for each realm, including guides on how to play, screenshots, videos, metadata such as release date and developer info, tags for categorization, display orientation, supported platforms, locations where the game is available, and the game's genre. This allows you to provide a rich and engaging experience for users interested in exploring the realms.

#### Request

```
POST /v2/client/app/get-games
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "attributes": [
    "howTo",
    "screenshotUrls",
    "videoUrls",
    "isScreenOrientationLandscape",
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
  "message": "Games retrieved successfully.",
  "errors": [],
  "data": [
    {
      "uuid": "abc12345-e89b-12d3-a456-426614174000",
      "id": "realm_of_fire",
      "name": "Realm of Fire",
      "description": "A volcanic realm filled with fiery challenges.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/realm_of_fire.png",
      "howTo": "Survive the heat and conquer fire-based obstacles.",
      "screenshotUrls": [
        "https://cdn.arcadianexus.com/screenshots/realm_of_fire1.png",
        "https://cdn.arcadianexus.com/screenshots/realm_of_fire2.png"
      ],
      "videoUrls": [
        "https://cdn.arcadianexus.com/videos/realm_of_fire_trailer.mp4"
      ],
      "meta": {
        "releaseDate": "2023-10-20",
        "version": "1.0",
        "developer": "Arcadia Studios"
      },
      "tags": [
        "Fire",
        "Adventure",
        "Challenging"
      ],
      "isScreenOrientationLandscape": true,
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
      "locations": [
        {
          "id": 236,
          "name": "United States of America",
          "code": "840"
        },
        {
          "id": 235,
          "name": "United Kingdom",
          "code": "826"
        }
      ],
      "genre": "Adventure"
    },
    {
      "uuid": "def67890-e89b-12d3-a456-426614174001",
      "id": "forest_of_whispers",
      "name": "Forest of Whispers",
      "description": "An enigmatic forest shrouded in mystery.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/forest_of_whispers.png",
      "howTo": "Navigate through the mist and unveil secrets.",
      "screenshotUrls": [
        "https://cdn.arcadianexus.com/screenshots/forest_of_whispers1.png",
        "https://cdn.arcadianexus.com/screenshots/forest_of_whispers2.png"
      ],
      "videoUrls": [
        "https://cdn.arcadianexus.com/videos/forest_of_whispers_trailer.mp4"
      ],
      "meta": {
        "releaseDate": "2023-11-15",
        "version": "1.0",
        "developer": "Arcadia Studios"
      },
      "tags": [
        "Forest",
        "Mystery",
        "Exploration"
      ],
      "isScreenOrientationLandscape": true,
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
      "locations": [
        {
          "id": 236,
          "name": "United States of America",
          "code": "840"
        },
        {
          "id": 113,
          "name": "Japan",
          "code": "392"
        }
      ],
      "genre": "Mystery"
    }
    // ... other games/realms
  ]
}


```

### Retrieve Specific Games by IDs

In this example, we retrieve specific games by providing their IDs. This is useful when you want details about particular games or realms, such as displaying information about selected realms in a featured section.
Request Parameters Sent:

gameIds: An array containing the IDs of the games to retrieve, e.g., ["realm_of_fire", "forest_of_whispers"].

Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about specific realms like "Realm of Fire" and "Forest of Whispers," including their UUIDs, IDs, names, descriptions, and icon URLs.

#### Request

```
POST /v2/client/app/get-games
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "gameIds": ["realm_of_fire", "forest_of_whispers"]
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
  "message": "Games retrieved successfully.",
  "errors": [],
  "data": [
    {
      "uuid": "abc12345-e89b-12d3-a456-426614174000",
      "id": "realm_of_fire",
      "name": "Realm of Fire",
      "description": "A volcanic realm filled with fiery challenges.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/realm_of_fire.png"
    },
    {
      "uuid": "def67890-e89b-12d3-a456-426614174001",
      "id": "forest_of_whispers",
      "name": "Forest of Whispers",
      "description": "An enigmatic forest shrouded in mystery.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/forest_of_whispers.png"
    }
  ]
}
```

### Retrieve Default Game (Main App)

In this example, we retrieve only the default game, which represents the main app. This is useful when you want to get information about the primary application itself, such as displaying the app's name and icon on a homepage or navigation menu.
Request Parameters Sent:

isDefault: Set to true to indicate that only the default game should be fetched.

Context for Arcadia Nexus:
For Arcadia Nexus, this would return the basic information about the central hub of the game, including its UUID, ID, name, description, and icon URL.

#### Request

```
POST /v2/client/app/get-games
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "isDefault": true
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
  "message": "Default game retrieved successfully.",
  "errors": [],
  "data": [
    {
      "uuid": "672b3a58-e560-0d90-6ce3-830b00000000",
      "id": "arcadia_nexus",
      "name": "Arcadia Nexus",
      "description": "The central hub connecting all realms.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/app_icon.png"
    }
  ]
}

```

### Retrieve Games with Specific Tags

In this example, we retrieve games that have specific tags. This is useful when you want to filter games based on categories or themes, such as displaying all "Adventure" or "Multiplayer" games.
Request Parameters Sent:

includeTags: An array containing the tags to filter by, e.g., ["Adventure", "Multiplayer"].

Context for Arcadia Nexus:
For Arcadia Nexus, this would return all realms that are tagged as "Adventure" or "Multiplayer," allowing you to display a curated list of games matching these tags.

#### Request

```
POST /v2/client/app/get-games
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "includeTags": ["Adventure", "Multiplayer"],
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
  "message": "Games retrieved successfully.",
  "errors": [],
  "data": [
    {
      "uuid": "abc12345-e89b-12d3-a456-426614174000",
      "id": "realm_of_fire",
      "name": "Realm of Fire",
      "description": "A volcanic realm filled with fiery challenges.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/realm_of_fire.png",
      "tags": [
        "Fire",
        "Adventure",
        "Challenging"
      ]
    },
    {
      "uuid": "ghi90123-e89b-12d3-a456-426614174002",
      "id": "skyward_battles",
      "name": "Skyward Battles",
      "description": "An epic multiplayer realm set in the skies.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/skyward_battles.png",
      "tags": [
        "Sky",
        "Multiplayer",
        "Combat"
      ]
    }
    // ... other games matching the tags
  ]
}

```

### Retrieve Games Including Matches Information

In this example, we retrieve games along with their related match configurations by requesting the matches attribute. This is useful when you want to display match types, configurations, or rules associated with each game.
Request Parameters Sent:

attributes: ["matches"]

Attributes Requested:

matches

Context for Arcadia Nexus:
For Arcadia Nexus, this would include match configurations for each realm, such as different game modes or challenges available within that realm. This allows you to provide detailed information about the gameplay options available to players.

#### Request

```
POST /v2/client/app/get-games
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}

Body: {
  "attributes": ["matches"]
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
  "message": "Games retrieved successfully.",
  "errors": [],
  "data": [
    {
      "uuid": "abc12345-e89b-12d3-a456-426614174000",
      "id": "realm_of_fire",
      "name": "Realm of Fire",
      "description": "A volcanic realm filled with fiery challenges.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/realm_of_fire.png",
      "matches": [
        {
          "uuid": "match12345-e89b-12d3-a456-426614174003",
          "id": "fire_survival",
          "name": "Fire Survival",
          "description": "Survive waves of fire creatures.",
          "iconUrl": "https://cdn.arcadianexus.com/icons/fire_survival.png"
        },
        {
          "uuid": "match67890-e89b-12d3-a456-426614174004",
          "id": "lava_race",
          "name": "Lava Race",
          "description": "Race across the molten plains.",
          "iconUrl": "https://cdn.arcadianexus.com/icons/lava_race.png"
        }
      ]
    },
    {
      "uuid": "def67890-e89b-12d3-a456-426614174001",
      "id": "forest_of_whispers",
      "name": "Forest of Whispers",
      "description": "An enigmatic forest shrouded in mystery.",
      "iconUrl": "https://cdn.arcadianexus.com/icons/forest_of_whispers.png",
      "matches": [
        {
          "uuid": "match23456-e89b-12d3-a456-426614174005",
          "id": "whispering_shadows",
          "name": "Whispering Shadows",
          "description": "Uncover secrets hidden in the shadows.",
          "iconUrl": "https://cdn.arcadianexus.com/icons/whispering_shadows.png"
        }
      ]
    }
    // ... other games/realms
  ]
}

```

## Additional Information

Fetches a list of games available within your application. Use this endpoint to retrieve game details, which can be displayed in your client applications or on your website.
By default, the response returns minimal information about each game. You can request additional details by specifying them in the attributes array in your request.

Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

 

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

gameIds (array of strings): An array of unique game identifiers to fetch specific games.

isDefault (boolean): A flag to indicate if only the default game (your main app) should be fetched.

limit (number): The maximum number of games to return in the response.

offset (number): The number of games to skip before starting to return results, for pagination.

search (string): A string to search for games by name.

includeTags (array of strings): An array of tags to filter games that have any of the specified tags.

attributes (array): A list of additional attributes you wish to retrieve for each game.

Default Response Fields
By default, the following minimal fields are returned for each game:

Field
Type
Description

uuid

 

 

string

 

 

The unique identifier of the game in the database.

 

 

id

 

 

string

 

 

The client-defined identifier for the game.

 

 

name

 

 

string

 

 

The name of the game.

 

 

description

 

 

string

 

 

A brief description of the game.

 

 

iconUrl

 

 

string

 

 

URL to the game's icon.

 

 

Available Attributes
You can request the following additional attributes:

Attribute
Type
Description

howTo

 

 

string

 

 

Guides on playing the game.

 

 

screenshotUrls

 

 

array

 

 

URLs for game screenshots.

 

 

videoUrls

 

 

array

 

 

URLs for game videos.

 

 

meta

 

 

object

 

 

Additional metadata for the game.

 

 

tags

 

 

array

 

 

Tags associated with the game for categorization or search.

 

 

isScreenOrientationLandscape

 

 

boolean

 

 

Indicates if the game is designed for landscape orientation.

 

 

platforms

 

 

array

 

 

Supported platforms. Each platform includes: id (integer), name (string).

 

 

locations

 

 

array

 

 

Regions where the game is available. Each location includes: id (integer), name (string), code (string).

 

 

genre

 

 

string

 

 

The genre of the game.

 

 

matches

 

 

array

 

 

Related match configurations for the game. Match is a child entity of the game

 

 

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

 

 

Contains the games information.

 

 

Game Object Attributes
Each game object in the data array includes:
Default Fields:

Attribute
Type
Description

uuid

 

 

string

 

 

Unique identifier of the game in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the game.

 

 

name

 

 

string

 

 

Name of the game.

 

 

description

 

 

string

 

 

A brief description of the game.

 

 

iconUrl

 

 

string

 

 

URL to the game's icon.

 

 

Additional Attributes (if requested):

Attribute
Type
Description

howTo

 

 

string

 

 

Guides on playing the game.

 

 

screenshotUrls

 

 

array

 

 

URLs for game screenshots.

 

 

videoUrls

 

 

array

 

 

URLs for game videos.

 

 

meta

 

 

object

 

 

Additional metadata for the game.

 

 

tags

 

 

array

 

 

Tags associated with the game.

 

 

isScreenOrientationLandscape

 

 

boolean

 

 

Indicates if the game is designed for landscape orientation.

 

 

platforms

 

 

array

 

 

Supported platforms. See structure below.

 

 

locations

 

 

array

 

 

Regions where the game is available. See structure below.

 

 

genre

 

 

string

 

 

The genre of the game.

 

 

 

Matches Array Structure
Each match object includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the match in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the match.

 

 

name

 

 

string

 

 

Name of the match configuration.

 

 

description

 

 

string

 

 

Description of the match.

 

 

iconUrl

 

 

string

 

 

URL to the match's icon.

 

 

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

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each game (uuid, id, name, description, iconUrl).

Pagination: Use limit and offset parameters to paginate through the list of games.

Searching: Use the search parameter to find games by name.

Accessing Related Entities: Games reference their matches when the matches attribute is requested.

Master Data Reference: The IDs used for platforms, locations, and other fields correspond to the IDs provided in the Specter master data. Ensure you reference these IDs correctly when processing the response.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

Media Assets: The URLs provided in screenshotUrls and videoUrls can be used directly in your application to display media assets.

## Required Headers

- **api-key**: The environment-specific API key.

## Tags

app, games, matches, game-modes, how-to-guides, screenshots, videos, locations, platforms, genres, mini-games, gaming-platform
