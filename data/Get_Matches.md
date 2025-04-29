# Get Matches

**Group:** App

**Description:** Retrieves data related to matches within the app, including leaderboards, competitions, and metadata.

**Route:** /v2/client/app/get-matches

**Method:** POST

## Parameters

- **matchIds**: Optional array of match IDs sent in the request to fetch specific matches.
- **gameIds**: Optional array of game IDs to filter matches by game.
- **offset**: The number of matches to skip for pagination.
- **limit**: The maximum number of matches to return in the response.
- **search**: Search keyword for filtering matches by name.
- **includeTags**: Tags to filter the matches.

## Attributes

- **leaderboards** (array): Data on match leaderboards.
- **competitions** (array): Data on competitions within matches.
- **meta** (object): Metadata for matches.
- **tags** (array): Tags for matches.

## Examples

### Retrieve All Matches with Default Information

In this example, we retrieve all matches with minimal default information. This is suitable when you need basic match information, such as displaying a list of matches or challenges available within the realms of Arcadia Nexus.
Request Parameters Sent:

No parameters are required. You can send an empty request body or include limit and offset for pagination.

Context for Arcadia Nexus:
For Arcadia Nexus, this would return a list of all matches available across all realms, including their UUIDs, IDs, names, descriptions, icon URLs, associated game information, format types, outcome types, and win conditions.

#### Request

```
POST /v2/client/app/get-matches
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "limit": 10,
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
  "message": "Matches retrieved successfully.",
  "data": {
    "matches": [
      {
        "uuid": "match1-uuid",
        "id": "flame_runner",
        "name": "Flame Runner",
        "description": "Race through the volcanic paths.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/flame_runner.png",
        "game": {
          "uuid": "abc12345-e89b-12d3-a456-426614174000",
          "id": "realm_of_fire"
        },
        "formatType": {
          "id": 1,
          "name": "single_player"
        },
        "outcomeType": {
          "id": 2,
          "name": "completion_time"
        },
        "winCondition": {
          "id": 2,
          "name": "lower"
        }
      },
      {
        "uuid": "match2-uuid",
        "id": "lava_leap",
        "name": "Lava Leap",
        "description": "Jump over lava pools to reach the end.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/lava_leap.png",
        "game": {
          "uuid": "abc12345-e89b-12d3-a456-426614174000",
          "id": "realm_of_fire"
        },
        "formatType": {
          "id": 2,
          "name": "multi_player"
        },
        "outcomeType": {
          "id": 1,
          "name": "score"
        },
        "winCondition": {
          "id": 1,
          "name": "higher"
        }
      },
      // ... other matches
    ],
    "totalCount": 10,
    "lastUpdate": "2023-10-15T12:00:00Z"
  },
  "errors": []
}
```

### Retrieve Specific Matches by IDs

In this example, we retrieve specific matches by providing their IDs. This is useful when you want details about particular matches or challenges, such as displaying information about featured matches.
Request Parameters Sent:

matchIds: An array containing the IDs of the matches to retrieve, e.g., ["flame_runner", "mystic_maze"].

Context for Arcadia Nexus:
For Arcadia Nexus, this would return information about specific matches like "Flame Runner" and "Mystic Maze," including their UUIDs, IDs, names, descriptions, icon URLs, and associated game and match type information.

#### Request

```
POST /v2/client/app/get-matches
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "matchIds": ["flame_runner", "mystic_maze"]
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
  "message": "Matches retrieved successfully.",
  "data": {
    "matches": [
      {
        "uuid": "match1-uuid",
        "id": "flame_runner",
        "name": "Flame Runner",
        "description": "Race through the volcanic paths.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/flame_runner.png",
        "game": {
          "uuid": "abc12345-e89b-12d3-a456-426614174000",
          "id": "realm_of_fire"
        },
        "formatType": {
          "id": 1,
          "name": "single_player"
        },
        "outcomeType": {
          "id": 2,
          "name": "completion_time"
        },
        "winCondition": {
          "id": 2,
          "name": "lower"
        }
      },
      {
        "uuid": "match3-uuid",
        "id": "mystic_maze",
        "name": "Mystic Maze",
        "description": "Find your way through the enchanted maze.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/mystic_maze.png",
        "game": {
          "uuid": "def67890-e89b-12d3-a456-426614174001",
          "id": "forest_of_whispers"
        },
        "formatType": {
          "id": 1,
          "name": "single_player"
        },
        "outcomeType": {
          "id": 2,
          "name": "completion_time"
        },
        "winCondition": {
          "id": 2,
          "name": "lower"
        }
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2023-10-15T12:00:00Z"
  },
  "errors": []
}
```

### Retrieve Matches Filtered by Tags

In this example, we retrieve matches along with their related leaderboards and competitions by requesting the leaderboards and competitions attributes. This is useful when you want to display associated leaderboards or competitions for each match.
Request Parameters Sent:

attributes: An array containing the attributes to retrieve, e.g., ["leaderboards", "competitions"].

Attributes Requested:

leaderboards

competitions

Context for Arcadia Nexus:
For Arcadia Nexus, this would include additional details for each match, such as:

Leaderboards: Information about leaderboards related to each match, including their UUIDs, IDs, names, descriptions, and icon URLs. For example, a leaderboard for "Flame Runner Speed Run."

Competitions: Information about competitions associated with each match, including their UUIDs, IDs, names, descriptions, and icon URLs. For example, a weekly competition like "Flame Challenge Weekly."

This allows you to provide comprehensive match information, including competitive elements that engage players.

#### Request

```
POST /v2/client/app/get-matches
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "includeTags": ["Multiplayer", "Challenging"],
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
  "message": "Matches retrieved successfully.",
  "data": {
    "matches": [
      {
        "uuid": "match2-uuid",
        "id": "lava_leap",
        "name": "Lava Leap",
        "description": "Jump over lava pools to reach the end.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/lava_leap.png",
        "game": {
          "uuid": "abc12345-e89b-12d3-a456-426614174000",
          "id": "realm_of_fire"
        },
        "formatType": {
          "id": 2,
          "name": "multi_player"
        },
        "outcomeType": {
          "id": 1,
          "name": "score"
        },
        "winCondition": {
          "id": 1,
          "name": "higher"
        },
        "tags": ["Multiplayer", "Challenging"]
      },
      {
        "uuid": "match4-uuid",
        "id": "whispering_shadows",
        "name": "Whispering Shadows",
        "description": "Battle shadows in the mist.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/whispering_shadows.png",
        "game": {
          "uuid": "def67890-e89b-12d3-a456-426614174001",
          "id": "forest_of_whispers"
        },
        "formatType": {
          "id": 2,
          "name": "multi_player"
        },
        "outcomeType": {
          "id": 1,
          "name": "score"
        },
        "winCondition": {
          "id": 1,
          "name": "higher"
        },
        "tags": ["Multiplayer", "Challenging", "Combat"]
      }
    ],
    "totalCount": 2,
    "lastUpdate": "2023-10-15T12:00:00Z"
  },
  "errors": []
}
```

### Retrieve Matches for Specific Games

In this example, we retrieve matches that have specific tags. This is useful when you want to filter matches based on categories or themes, such as displaying all "Multiplayer" or "Challenging" matches.
Request Parameters Sent:

includeTags: An array containing the tags to filter by, e.g., ["Multiplayer", "Challenging"].

attributes: An array containing the attributes to retrieve, e.g., ["tags"].

Attributes Requested:

tags

Context for Arcadia Nexus:
For Arcadia Nexus, this would return all matches that are tagged as "Multiplayer" or "Challenging." This might include matches like "Lava Leap" and "Whispering Shadows," which are multiplayer modes offering a higher level of difficulty.
Including the tags attribute in the response allows you to display or utilize the tags in your application, enhancing the user's ability to find matches that suit their preferences.

#### Request

```
POST /v2/client/app/get-matches
Headers: {
  "Api-Key": "your-api-key",
  "Content-Type": "application/json"
}
Body: {
  "gameIds": ["forest_of_whispers"],
  "attributes": ["meta"]
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
  "message": "Matches retrieved successfully.",
  "data": {
    "matches": [
      {
        "uuid": "match3-uuid",
        "id": "mystic_maze",
        "name": "Mystic Maze",
        "description": "Find your way through the enchanted maze.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/mystic_maze.png",
        "game": {
          "uuid": "def67890-e89b-12d3-a456-426614174001",
          "id": "forest_of_whispers"
        },
        "formatType": {
          "id": 1,
          "name": "single_player"
        },
        "outcomeType": {
          "id": 2,
          "name": "completion_time"
        },
        "winCondition": {
          "id": 2,
          "name": "lower"
        },
        "meta": {
          "difficulty": "Easy",
          "recommendedLevel": 5
        }
      },
      {
        "uuid": "match4-uuid",
        "id": "whispering_shadows",
        "name": "Whispering Shadows",
        "description": "Battle shadows in the mist.",
        "iconUrl": "https://cdn.arcadianexus.com/icons/whispering_shadows.png",
        "game": {
          "uuid": "def67890-e89b-12d3-a456-426614174001",
          "id": "forest_of_whispers"
        },
        "formatType": {
          "id": 2,
          "name": "multi_player"
        },
        "outcomeType": {
          "id": 1,
          "name": "score"
        },
        "winCondition": {
          "id": 1,
          "name": "higher"
        },
        "meta": {
          "difficulty": "Hard",
          "recommendedLevel": 15
        }
      }
      // ... other matches for the specified game
    ],
    "totalCount": 2,
    "lastUpdate": "2023-10-15T12:00:00Z"
  },
  "errors": []
}
```

## Additional Information

Retrieves a list of matches available within your application. Use this endpoint to fetch match details, which can be displayed in your client applications or on your website.
By default, the response returns minimal information about each match. You can request additional details by specifying them in the attributes array in your request.

Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

 

Request Body Parameters
This endpoint does not require any parameters in the request body by default. However, you can specify optional parameters to customize the response.
Optional Parameters

matchIds (array of strings): An array of unique match identifiers to fetch specific matches.

gameIds (array of strings): An array of game identifiers to filter matches by game.

limit (number): The maximum number of matches to return in the response.

offset (number): The number of matches to skip before starting to return results, for pagination.

search (string): A string to search for matches by name.

includeTags (array of strings): An array of tags to filter matches that have any of the specified tags.

attributes (array): A list of additional attributes you wish to retrieve for each match.
Available Attributes:

leaderboards (array): Related leaderboards for the matches.

competitions (array): Related competitions within the matches.

meta (object): Additional metadata for the matches.

tags (array): Tags associated with the matches.

Default Response Fields
By default, the following minimal fields are returned for each match:

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

 

 

Name of the match.

 

 

description

 

 

string

 

 

Description of the match.

 

 

iconUrl

 

 

string

 

 

URL to the match's icon.

 

 

game

 

 

object

 

 

Basic information about the associated game.

 

 

formatType

 

 

object

 

 

The format type of the match.

 

 

outcomeType

 

 

object

 

 

The outcome type of the match.

 

 

winCondition

 

 

object

 

 

The win condition of the match.

 

 

Game Object Structure
The game object includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the game.

 

 

id

 

 

string

 

 

Client-defined identifier of the game.

 

 

Format Type Object Structure
The formatType object includes:

Field
Type
Description

id

 

 

integer

 

 

Format type ID.

 

 

name

 

 

string

 

 

Format type name.

 

 

Outcome Type Object Structure
The outcomeType object includes:

Field
Type
Description

id

 

 

integer

 

 

Outcome type ID.

 

 

name

 

 

string

 

 

Outcome type name.

 

 

Win Condition Object Structure
The winCondition object includes:

Field
Type
Description

id

 

 

integer

 

 

Win condition ID.

 

 

name

 

 

string

 

 

Win condition name.

 

 

Leaderboard Object Structure
When the leaderboards attribute is requested, each leaderboard includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the leaderboard in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the leaderboard.

 

 

name

 

 

string

 

 

Name of the leaderboard.

 

 

description

 

 

string

 

 

Description of the leaderboard.

 

 

iconUrl

 

 

string

 

 

URL to the leaderboard's icon.

 

 

Competition Object Structure
When the competitions attribute is requested, each competition includes:

Field
Type
Description

uuid

 

 

string

 

 

Unique identifier of the competition in the database.

 

 

id

 

 

string

 

 

Client-defined identifier for the competition.

 

 

name

 

 

string

 

 

Name of the competition.

 

 

description

 

 

string

 

 

Description of the competition.

 

 

iconUrl

 

 

string

 

 

URL to the competition's icon.

 

 

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

 

 

Contains the matches information.

 

 

Data Object Structure

Field
Type
Description

matches

 

 

array

 

 

An array of match objects.

 

 

totalCount

 

 

integer

 

 

Total number of matches available.

 

 

lastUpdate

 

 

string

 

 

Timestamp of the last update in ISO 8601 format.

 

 

Notes

Default Response: If no attributes array is provided, the response will include only the minimal default attributes for each match.

Filtering by Tags: Use the includeTags parameter to retrieve matches that have any of the specified tags.

Accessing Related Entities: Matches reference their leaderboards and competitions when the leaderboards and competitions attributes are requested.

Pagination: Use limit and offset parameters to paginate through the list of matches.

Searching: Use the search parameter to find matches by name.

Master Data Reference: The IDs used for formatType, outcomeType, winCondition, and other fields correspond to the IDs provided in the Specter master data. Ensure you reference these IDs correctly when processing the response.

Data Usage: Be mindful of the amount of data requested, especially for clients with limited bandwidth. Only request necessary attributes to optimize performance.

## Required Headers

- **api-key**: The environment-specific API key.

## Tags

matches, instant-battles, tournaments, matchmaking, outcomes, scores, leaderboards, multiplayer, single-player, competitions, esports, games
