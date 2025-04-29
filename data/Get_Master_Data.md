# Get Master Data

**Group:** App

**Description:** Retrieves reference data that defines standardized values used throughout the Specter platform, including data types, platforms, genres, event types, and other configuration constants.

**Route:** /v2/client/app/get-master-data

**Method:** POST

## Examples

### Retrieve All Master Data

In this example, we retrieve all master data to initialize the Arcadia Nexus application with standardized values.
Context for Arcadia Nexus:
For Arcadia Nexus, the master data provides essential reference information used throughout the metaverse. This includes the types of events that can be tracked (like player achievements or currency transactions), the categorization of different realms by genre, the formats for competitive matches in the Fire Realm's "Flame Runner" challenge, and the intervals for leaderboards tracking player progression. The client application would typically load this data once during initialization and reference it when configuring game systems, validating user inputs, or interpreting data from other API endpoints.

#### Request

```
POST /v2/client/app/get-master-data
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
    "code": 200,
    "errors": [],
    "message": "Master data",
    "status": "success",
    "data": {
        "dataTypes": [
            {
                "id": 1,
                "name": "string"
            },
            {
                "id": 2,
                "name": "integer"
            },
            {
                "id": 3,
                "name": "boolean"
            },
            {
                "id": 4,
                "name": "float"
            }
        ],
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
        "itemTypes": [
            {
                "id": "1",
                "name": "durable"
            },
            {
                "id": "2",
                "name": "consumable"
            }
        ],
        "progressionSystemTypes": [
            {
                "id": 1,
                "name": "linear"
            },
            {
                "id": 2,
                "name": "non-linear"
            }
        ],
        "organisationTypes": [
            {
                "id": 1,
                "name": "individual"
            },
            {
                "id": 2,
                "name": "organisation"
            }
        ],
        "taskGroupTypes": [
            {
                "id": 1,
                "name": "mission"
            },
            {
                "id": 2,
                "name": "step_series"
            }
        ],
        "countries": [
            {
                "id": 1,
                "name": "Afghanistan",
                "code": "4"
            },
            {
                "id": 2,
                "name": "Åland Islands",
                "code": "248"
            },
            {
                "id": 3,
                "name": "Albania",
                "code": "8"
            },
            {
                "id": 4,
                "name": "Algeria",
                "code": "12"
            },
            {
                "id": 5,
                "name": "American Samoa",
                "code": "16"
            },
            {
                "id": 6,
                "name": "Andorra",
                "code": "20"
            },
            {
                "id": 7,
                "name": "Angola",
                "code": "24"
            },
            {
                "id": 8,
                "name": "Anguilla",
                "code": "660"
            },
            {
                "id": 9,
                "name": "Antarctica",
                "code": "10"
            },
            {
                "id": 10,
                "name": "Antigua and Barbuda",
                "code": "28"
            },
            {
                "id": 11,
                "name": "Argentina",
                "code": "32"
            },
            {
                "id": 12,
                "name": "Armenia",
                "code": "51"
            },
            {
                "id": 13,
                "name": "Aruba",
                "code": "533"
            },
            {
                "id": 14,
                "name": "Australia",
                "code": "36"
            },
            {
                "id": 15,
                "name": "Austria",
                "code": "40"
            },
            {
                "id": 16,
                "name": "Azerbaijan",
                "code": "31"
            },
            {
                "id": 17,
                "name": "Bahamas",
                "code": "44"
            },
            {
                "id": 18,
                "name": "Bahrain",
                "code": "48"
            },
            {
                "id": 19,
                "name": "Bangladesh",
                "code": "50"
            },
            {
                "id": 20,
                "name": "Barbados",
                "code": "52"
            },
            {
                "id": 21,
                "name": "Belarus",
                "code": "112"
            },
            {
                "id": 22,
                "name": "Belgium",
                "code": "56"
            },
            {
                "id": 23,
                "name": "Belize",
                "code": "84"
            },
            {
                "id": 24,
                "name": "Benin",
                "code": "204"
            },
            {
                "id": 25,
                "name": "Bermuda",
                "code": "60"
            },
            {
                "id": 26,
                "name": "Bhutan",
                "code": "64"
            },
            {
                "id": 27,
                "name": "Bolivia (Plurinational State of)",
                "code": "68"
            },
            {
                "id": 28,
                "name": "Bonaire, Sint Eustatius and Saba",
                "code": "535"
            },
            {
                "id": 29,
                "name": "Bosnia and Herzegovina",
                "code": "70"
            },
            {
                "id": 30,
                "name": "Botswana",
                "code": "72"
            },
            {
                "id": 31,
                "name": "Bouvet Island",
                "code": "74"
            },
            {
                "id": 32,
                "name": "Brazil",
                "code": "76"
            },
            {
                "id": 33,
                "name": "British Indian Ocean Territory",
                "code": "86"
            },
            {
                "id": 34,
                "name": "Brunei Darussalam",
                "code": "96"
            },
            {
                "id": 35,
                "name": "Bulgaria",
                "code": "100"
            },
            {
                "id": 36,
                "name": "Burkina Faso",
                "code": "854"
            },
            {
                "id": 37,
                "name": "Burundi",
                "code": "108"
            },
            {
                "id": 38,
                "name": "Cabo Verde",
                "code": "132"
            },
            {
                "id": 39,
                "name": "Cambodia",
                "code": "116"
            },
            {
                "id": 40,
                "name": "Cameroon",
                "code": "120"
            },
            {
                "id": 41,
                "name": "Canada",
                "code": "124"
            },
            {
                "id": 42,
                "name": "Cayman Islands",
                "code": "136"
            },
            {
                "id": 43,
                "name": "Central African Republic",
                "code": "140"
            },
            {
                "id": 44,
                "name": "Chad",
                "code": "148"
            },
            {
                "id": 45,
                "name": "Chile",
                "code": "152"
            },
            {
                "id": 46,
                "name": "China",
                "code": "156"
            },
            {
                "id": 47,
                "name": "Christmas Island",
                "code": "162"
            },
            {
                "id": 48,
                "name": "Cocos (Keeling) Islands",
                "code": "166"
            },
            {
                "id": 49,
                "name": "Colombia",
                "code": "170"
            },
            {
                "id": 50,
                "name": "Comoros",
                "code": "174"
            },
            {
                "id": 51,
                "name": "Congo",
                "code": "178"
            },
            {
                "id": 52,
                "name": "Congo, Democratic Republic of the",
                "code": "180"
            },
            {
                "id": 53,
                "name": "Cook Islands",
                "code": "184"
            },
            {
                "id": 54,
                "name": "Costa Rica",
                "code": "188"
            },
            {
                "id": 55,
                "name": "Côte d'Ivoire",
                "code": "384"
            },
            {
                "id": 56,
                "name": "Croatia",
                "code": "191"
            },
            {
                "id": 57,
                "name": "Cuba",
                "code": "192"
            },
            {
                "id": 58,
                "name": "Curaçao",
                "code": "531"
            },
            {
                "id": 59,
                "name": "Cyprus",
                "code": "196"
            },
            {
                "id": 60,
                "name": "Czechia",
                "code": "203"
            },
            {
                "id": 61,
                "name": "Denmark",
                "code": "208"
            },
            {
                "id": 62,
                "name": "Djibouti",
                "code": "262"
            },
            {
                "id": 63,
                "name": "Dominica",
                "code": "212"
            },
            {
                "id": 64,
                "name": "Dominican Republic",
                "code": "214"
            },
            {
                "id": 65,
                "name": "Ecuador",
                "code": "218"
            },
            {
                "id": 66,
                "name": "Egypt",
                "code": "818"
            },
            {
                "id": 67,
                "name": "El Salvador",
                "code": "222"
            },
            {
                "id": 68,
                "name": "Equatorial Guinea",
                "code": "226"
            },
            {
                "id": 69,
                "name": "Eritrea",
                "code": "232"
            },
            {
                "id": 70,
                "name": "Estonia",
                "code": "233"
            },
            {
                "id": 71,
                "name": "Eswatini",
                "code": "748"
            },
            {
                "id": 72,
                "name": "Ethiopia",
                "code": "231"
            },
            {
                "id": 73,
                "name": "Falkland Islands (Malvinas)",
                "code": "238"
            },
            {
                "id": 74,
                "name": "Faroe Islands",
                "code": "234"
            },
            {
                "id": 75,
                "name": "Fiji",
                "code": "242"
            },
            {
                "id": 76,
                "name": "Finland",
                "code": "246"
            },
            {
                "id": 77,
                "name": "France",
                "code": "250"
            },
            {
                "id": 78,
                "name": "French Guiana",
                "code": "254"
            },
            {
                "id": 79,
                "name": "French Polynesia",
                "code": "258"
            },
            {
                "id": 80,
                "name": "French Southern Territories",
                "code": "260"
            },
            {
                "id": 81,
                "name": "Gabon",
                "code": "266"
            },
            {
                "id": 82,
                "name": "Gambia",
                "code": "270"
            },
            {
                "id": 83,
                "name": "Georgia",
                "code": "268"
            },
            {
                "id": 84,
                "name": "Germany",
                "code": "276"
            },
            {
                "id": 85,
                "name": "Ghana",
                "code": "288"
            },
            {
                "id": 86,
                "name": "Gibraltar",
                "code": "292"
            },
            {
                "id": 87,
                "name": "Greece",
                "code": "300"
            },
            {
                "id": 88,
                "name": "Greenland",
                "code": "304"
            },
            {
                "id": 89,
                "name": "Grenada",
                "code": "308"
            },
            {
                "id": 90,
                "name": "Guadeloupe",
                "code": "312"
            },
            {
                "id": 91,
                "name": "Guam",
                "code": "316"
            },
            {
                "id": 92,
                "name": "Guatemala",
                "code": "320"
            },
            {
                "id": 93,
                "name": "Guernsey",
                "code": "831"
            },
            {
                "id": 94,
                "name": "Guinea",
                "code": "324"
            },
            {
                "id": 95,
                "name": "Guinea-Bissau",
                "code": "624"
            },
            {
                "id": 96,
                "name": "Guyana",
                "code": "328"
            },
            {
                "id": 97,
                "name": "Haiti",
                "code": "332"
            },
            {
                "id": 98,
                "name": "Heard Island and McDonald Islands",
                "code": "334"
            },
            {
                "id": 99,
                "name": "Holy See",
                "code": "336"
            },
            {
                "id": 100,
                "name": "Honduras",
                "code": "340"
            },
            {
                "id": 101,
                "name": "Hong Kong",
                "code": "344"
            },
            {
                "id": 102,
                "name": "Hungary",
                "code": "348"
            },
            {
                "id": 103,
                "name": "Iceland",
                "code": "352"
            },
            {
                "id": 104,
                "name": "India",
                "code": "356"
            },
            {
                "id": 105,
                "name": "Indonesia",
                "code": "360"
            },
            {
                "id": 106,
                "name": "Iran (Islamic Republic of)",
                "code": "364"
            },
            {
                "id": 107,
                "name": "Iraq",
                "code": "368"
            },
            {
                "id": 108,
                "name": "Ireland",
                "code": "372"
            },
            {
                "id": 109,
                "name": "Isle of Man",
                "code": "833"
            },
            {
                "id": 110,
                "name": "Israel",
                "code": "376"
            },
            {
                "id": 111,
                "name": "Italy",
                "code": "380"
            },
            {
                "id": 112,
                "name": "Jamaica",
                "code": "388"
            },
            {
                "id": 113,
                "name": "Japan",
                "code": "392"
            },
            {
                "id": 114,
                "name": "Jersey",
                "code": "832"
            },
            {
                "id": 115,
                "name": "Jordan",
                "code": "400"
            },
            {
                "id": 116,
                "name": "Kazakhstan",
                "code": "398"
            },
            {
                "id": 117,
                "name": "Kenya",
                "code": "404"
            },
            {
                "id": 118,
                "name": "Kiribati",
                "code": "296"
            },
            {
                "id": 119,
                "name": "Korea (Democratic People's Republic of)",
                "code": "408"
            },
            {
                "id": 120,
                "name": "Korea, Republic of",
                "code": "410"
            },
            {
                "id": 121,
                "name": "Kuwait",
                "code": "414"
            },
            {
                "id": 122,
                "name": "Kyrgyzstan",
                "code": "417"
            },
            {
                "id": 123,
                "name": "Lao People's Democratic Republic",
                "code": "418"
            },
            {
                "id": 124,
                "name": "Latvia",
                "code": "428"
            },
            {
                "id": 125,
                "name": "Lebanon",
                "code": "422"
            },
            {
                "id": 126,
                "name": "Lesotho",
                "code": "426"
            },
            {
                "id": 127,
                "name": "Liberia",
                "code": "430"
            },
            {
                "id": 128,
                "name": "Libya",
                "code": "434"
            },
            {
                "id": 129,
                "name": "Liechtenstein",
                "code": "438"
            },
            {
                "id": 130,
                "name": "Lithuania",
                "code": "440"
            },
            {
                "id": 131,
                "name": "Luxembourg",
                "code": "442"
            },
            {
                "id": 132,
                "name": "Macao",
                "code": "446"
            },
            {
                "id": 133,
                "name": "Madagascar",
                "code": "450"
            },
            {
                "id": 134,
                "name": "Malawi",
                "code": "454"
            },
            {
                "id": 135,
                "name": "Malaysia",
                "code": "458"
            },
            {
                "id": 136,
                "name": "Maldives",
                "code": "462"
            },
            {
                "id": 137,
                "name": "Mali",
                "code": "466"
            },
            {
                "id": 138,
                "name": "Malta",
                "code": "470"
            },
            {
                "id": 139,
                "name": "Marshall Islands",
                "code": "584"
            },
            {
                "id": 140,
                "name": "Martinique",
                "code": "474"
            },
            {
                "id": 141,
                "name": "Mauritania",
                "code": "478"
            },
            {
                "id": 142,
                "name": "Mauritius",
                "code": "480"
            },
            {
                "id": 143,
                "name": "Mayotte",
                "code": "175"
            },
            {
                "id": 144,
                "name": "Mexico",
                "code": "484"
            },
            {
                "id": 145,
                "name": "Micronesia (Federated States of)",
                "code": "583"
            },
            {
                "id": 146,
                "name": "Moldova, Republic of",
                "code": "498"
            },
            {
                "id": 147,
                "name": "Monaco",
                "code": "492"
            },
            {
                "id": 148,
                "name": "Mongolia",
                "code": "496"
            },
            {
                "id": 149,
                "name": "Montenegro",
                "code": "499"
            },
            {
                "id": 150,
                "name": "Montserrat",
                "code": "500"
            },
            {
                "id": 151,
                "name": "Morocco",
                "code": "504"
            },
            {
                "id": 152,
                "name": "Mozambique",
                "code": "508"
            },
            {
                "id": 153,
                "name": "Myanmar",
                "code": "104"
            },
            {
                "id": 154,
                "name": "Namibia",
                "code": "516"
            },
            {
                "id": 155,
                "name": "Nauru",
                "code": "520"
            },
            {
                "id": 156,
                "name": "Nepal",
                "code": "524"
            },
            {
                "id": 157,
                "name": "Netherlands",
                "code": "528"
            },
            {
                "id": 158,
                "name": "New Caledonia",
                "code": "540"
            },
            {
                "id": 159,
                "name": "New Zealand",
                "code": "554"
            },
            {
                "id": 160,
                "name": "Nicaragua",
                "code": "558"
            },
            {
                "id": 161,
                "name": "Niger",
                "code": "562"
            },
            {
                "id": 162,
                "name": "Nigeria",
                "code": "566"
            },
            {
                "id": 163,
                "name": "Niue",
                "code": "570"
            },
            {
                "id": 164,
                "name": "Norfolk Island",
                "code": "574"
            },
            {
                "id": 165,
                "name": "North Macedonia",
                "code": "807"
            },
            {
                "id": 166,
                "name": "Northern Mariana Islands",
                "code": "580"
            },
            {
                "id": 167,
                "name": "Norway",
                "code": "578"
            },
            {
                "id": 168,
                "name": "Oman",
                "code": "512"
            },
            {
                "id": 169,
                "name": "Pakistan",
                "code": "586"
            },
            {
                "id": 170,
                "name": "Palau",
                "code": "585"
            },
            {
                "id": 171,
                "name": "Palestine, State of",
                "code": "275"
            },
            {
                "id": 172,
                "name": "Panama",
                "code": "591"
            },
            {
                "id": 173,
                "name": "Papua New Guinea",
                "code": "598"
            },
            {
                "id": 174,
                "name": "Paraguay",
                "code": "600"
            },
            {
                "id": 175,
                "name": "Peru",
                "code": "604"
            },
            {
                "id": 176,
                "name": "Philippines",
                "code": "608"
            },
            {
                "id": 177,
                "name": "Pitcairn",
                "code": "612"
            },
            {
                "id": 178,
                "name": "Poland",
                "code": "616"
            },
            {
                "id": 179,
                "name": "Portugal",
                "code": "620"
            },
            {
                "id": 180,
                "name": "Puerto Rico",
                "code": "630"
            },
            {
                "id": 181,
                "name": "Qatar",
                "code": "634"
            },
            {
                "id": 182,
                "name": "Réunion",
                "code": "638"
            },
            {
                "id": 183,
                "name": "Romania",
                "code": "642"
            },
            {
                "id": 184,
                "name": "Russian Federation",
                "code": "643"
            },
            {
                "id": 185,
                "name": "Rwanda",
                "code": "646"
            },
            {
                "id": 186,
                "name": "Saint Barthélemy",
                "code": "652"
            },
            {
                "id": 187,
                "name": "Saint Helena, Ascension and Tristan da Cunha",
                "code": "654"
            },
            {
                "id": 188,
                "name": "Saint Kitts and Nevis",
                "code": "659"
            },
            {
                "id": 189,
                "name": "Saint Lucia",
                "code": "662"
            },
            {
                "id": 190,
                "name": "Saint Martin (French part)",
                "code": "663"
            },
            {
                "id": 191,
                "name": "Saint Pierre and Miquelon",
                "code": "666"
            },
            {
                "id": 192,
                "name": "Saint Vincent and the Grenadines",
                "code": "670"
            },
            {
                "id": 193,
                "name": "Samoa",
                "code": "882"
            },
            {
                "id": 194,
                "name": "San Marino",
                "code": "674"
            },
            {
                "id": 195,
                "name": "Sao Tome and Principe",
                "code": "678"
            },
            {
                "id": 196,
                "name": "Saudi Arabia",
                "code": "682"
            },
            {
                "id": 197,
                "name": "Senegal",
                "code": "686"
            },
            {
                "id": 198,
                "name": "Serbia",
                "code": "688"
            },
            {
                "id": 199,
                "name": "Seychelles",
                "code": "690"
            },
            {
                "id": 200,
                "name": "Sierra Leone",
                "code": "694"
            },
            {
                "id": 201,
                "name": "Singapore",
                "code": "702"
            },
            {
                "id": 202,
                "name": "Sint Maarten (Dutch part)",
                "code": "534"
            },
            {
                "id": 203,
                "name": "Slovakia",
                "code": "703"
            },
            {
                "id": 204,
                "name": "Slovenia",
                "code": "705"
            },
            {
                "id": 205,
                "name": "Solomon Islands",
                "code": "90"
            },
            {
                "id": 206,
                "name": "Somalia",
                "code": "706"
            },
            {
                "id": 207,
                "name": "South Africa",
                "code": "710"
            },
            {
                "id": 208,
                "name": "South Georgia and the South Sandwich Islands",
                "code": "239"
            },
            {
                "id": 209,
                "name": "South Sudan",
                "code": "728"
            },
            {
                "id": 210,
                "name": "Spain",
                "code": "724"
            },
            {
                "id": 211,
                "name": "Sri Lanka",
                "code": "144"
            },
            {
                "id": 212,
                "name": "Sudan",
                "code": "729"
            },
            {
                "id": 213,
                "name": "Suriname",
                "code": "740"
            },
            {
                "id": 214,
                "name": "Svalbard and Jan Mayen",
                "code": "744"
            },
            {
                "id": 215,
                "name": "Sweden",
                "code": "752"
            },
            {
                "id": 216,
                "name": "Switzerland",
                "code": "756"
            },
            {
                "id": 217,
                "name": "Syrian Arab Republic",
                "code": "760"
            },
            {
                "id": 218,
                "name": "Taiwan, Province of China",
                "code": "158"
            },
            {
                "id": 219,
                "name": "Tajikistan",
                "code": "762"
            },
            {
                "id": 220,
                "name": "Tanzania, United Republic of",
                "code": "834"
            },
            {
                "id": 221,
                "name": "Thailand",
                "code": "764"
            },
            {
                "id": 222,
                "name": "Timor-Leste",
                "code": "626"
            },
            {
                "id": 223,
                "name": "Togo",
                "code": "768"
            },
            {
                "id": 224,
                "name": "Tokelau",
                "code": "772"
            },
            {
                "id": 225,
                "name": "Tonga",
                "code": "776"
            },
            {
                "id": 226,
                "name": "Trinidad and Tobago",
                "code": "780"
            },
            {
                "id": 227,
                "name": "Tunisia",
                "code": "788"
            },
            {
                "id": 228,
                "name": "Turkey",
                "code": "792"
            },
            {
                "id": 229,
                "name": "Turkmenistan",
                "code": "795"
            },
            {
                "id": 230,
                "name": "Turks and Caicos Islands",
                "code": "796"
            },
            {
                "id": 231,
                "name": "Tuvalu",
                "code": "798"
            },
            {
                "id": 232,
                "name": "Uganda",
                "code": "800"
            },
            {
                "id": 233,
                "name": "Ukraine",
                "code": "804"
            },
            {
                "id": 234,
                "name": "United Arab Emirates",
                "code": "784"
            },
            {
                "id": 235,
                "name": "United Kingdom of Great Britain and Northern Ireland",
                "code": "826"
            },
            {
                "id": 236,
                "name": "United States of America",
                "code": "840"
            },
            {
                "id": 237,
                "name": "United States Minor Outlying Islands",
                "code": "581"
            },
            {
                "id": 242,
                "name": "Viet Nam",
                "code": "704"
            },
            {
                "id": 245,
                "name": "Wallis and Futuna",
                "code": "876"
            },
            {
                "id": 244,
                "name": "Virgin Islands (U.S.)",
                "code": "850"
            },
            {
                "id": 241,
                "name": "Venezuela (Bolivarian Republic of)",
                "code": "862"
            },
            {
                "id": 246,
                "name": "Western Sahara",
                "code": "732"
            },
            {
                "id": 249,
                "name": "Zimbabwe",
                "code": "716"
            },
            {
                "id": 248,
                "name": "Zambia",
                "code": "894"
            },
            {
                "id": 247,
                "name": "Yemen",
                "code": "887"
            },
            {
                "id": 239,
                "name": "Uzbekistan",
                "code": "860"
            },
            {
                "id": 238,
                "name": "Uruguay",
                "code": "858"
            },
            {
                "id": 240,
                "name": "Vanuatu",
                "code": "548"
            },
            {
                "id": 243,
                "name": "Virgin Islands (British)",
                "code": "92"
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "action"
            },
            {
                "id": 2,
                "name": "adventure"
            },
            {
                "id": 3,
                "name": "arcade"
            },
            {
                "id": 4,
                "name": "battle-royale"
            },
            {
                "id": 5,
                "name": "casual"
            },
            {
                "id": 6,
                "name": "card"
            },
            {
                "id": 7,
                "name": "role-playing"
            },
            {
                "id": 8,
                "name": "moba"
            },
            {
                "id": 9,
                "name": "puzzle"
            },
            {
                "id": 10,
                "name": "racing"
            },
            {
                "id": 11,
                "name": "strategy"
            },
            {
                "id": 12,
                "name": "sports"
            },
            {
                "id": 13,
                "name": "trivia"
            },
            {
                "id": 14,
                "name": "word"
            },
            {
                "id": 15,
                "name": "simulation"
            },
            {
                "id": 16,
                "name": "Fighting"
            },
            {
                "id": 17,
                "name": "Horror"
            },
            {
                "id": 18,
                "name": "Platformer"
            },
            {
                "id": 19,
                "name": "Idle/Clicker"
            },
            {
                "id": 20,
                "name": "Shooter"
            },
            {
                "id": 21,
                "name": "Massively Multiplayer Online (MMO)"
            },
            {
                "id": 22,
                "name": "Sandbox"
            },
            {
                "id": 23,
                "name": "Roguelike/Roguelite"
            },
            {
                "id": 24,
                "name": "Survival"
            },
            {
                "id": 25,
                "name": "City Building/Management"
            },
            {
                "id": 26,
                "name": "Card & Board"
            },
            {
                "id": 27,
                "name": "Educational"
            },
            {
                "id": 28,
                "name": "Music/Rhythm"
            },
            {
                "id": 29,
                "name": "Narrative/Visual Novel"
            },
            {
                "id": 30,
                "name": "VR/AR"
            },
            {
                "id": 31,
                "name": "Sports Management"
            },
            {
                "id": 32,
                "name": "Tycoon"
            },
            {
                "id": 33,
                "name": "MOBA (Multiplayer Online Battle Arena)"
            },
            {
                "id": 34,
                "name": "Turn-Based"
            },
            {
                "id": 35,
                "name": "Twin-Stick Shooter"
            }
        ],
        "defaultEvents": [
            {
                "id": "4c7defec-2b75-455b-b9f8-01e4e2bf9c95",
                "name": "task_group_complete",
                "category": "Achievement",
                "parameterDetails": [
                    {
                        "id": "ba7e44f4-d36e-4078-be8f-054978d1acc7",
                        "name": "taskGroupId",
                        "dataType": "string"
                    },
                    {
                        "id": "c46c85a2-6706-4608-9927-25e4355f7efd",
                        "name": "count",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "f4b20372-4140-4824-88d9-63ff2903daec",
                "name": "task_complete",
                "category": "Achievement",
                "parameterDetails": [
                    {
                        "id": "b5741204-959a-40a4-844f-543c6449d67e",
                        "name": "taskId",
                        "dataType": "string"
                    },
                    {
                        "id": "c46c85a2-6706-4608-9927-25e4355f7efd",
                        "name": "count",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "a008a26c-1535-40d7-b99d-06b11b0f0491",
                "name": "player_logged_in_with_username",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "936f2ade-4de4-40a8-9d8f-e55cc6c9510f",
                        "name": "username",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "7c452494-b3f5-48b5-93ed-dd238d807d33",
                "name": "player_logged_in_with_custom_id",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "01d31679-alc2-41e2-dmc3-09457ab1sm45",
                        "name": "customId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "5dd58534-9bf9-4bc9-a3d4-5e8744b7a47c",
                "name": "player_signed_up_with_username",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "e0c3b270-amx0-4e02-8241-8524d3eb042b",
                        "name": "username",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "a958649a-d278-4287-8d31-fd7d893723ca",
                "name": "player_signed_up_with_custom_id",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "01d31679-alc2-41e2-dmc3-09457ab1sm45",
                        "name": "customId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "f4b20372-4140-4824-88d9-63ff2903daeb",
                "name": "inventory_bundle_opened",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                        "name": "bundleId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "7d0e23db-0f21-4f69-9fe1-26168a098281",
                "name": "item_purchased",
                "category": "Stores",
                "parameterDetails": [
                    {
                        "id": "6ea955c6-07c8-4081-b513-970a7f5aea02",
                        "name": "currencyId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    },
                    {
                        "id": "e0c3b270-amx0-4e02-8241-8544sleal43b",
                        "name": "price",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "f5f91764-df3b-4e65-8895-eecbe6de734c",
                "name": "player_logged_in_with_email",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "01d31679-f817-41e2-dmc3-09457ab1sm45",
                        "name": "email",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "6fc48277-6500-4c10-b551-c85794cce952",
                "name": "player_signed_up_with_email",
                "category": "Authentication",
                "parameterDetails": [
                    {
                        "id": "01d31679-f817-41e2-dmc3-09457ab1sm45",
                        "name": "email",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "1f5e47a3-7025-4e14-a5ec-0cd22d828099",
                "name": "match_session_started",
                "category": "Matches",
                "parameterDetails": [
                    {
                        "id": "e0c3b270-d36f-4e02-8241-8524d3eb042b",
                        "name": "matchId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "ae06d651-8cd8-4b38-8263-0e3803d7bc90",
                "name": "inventory_bundle_removed",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                        "name": "instanceId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                        "name": "bundleId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "0d4c5928-0106-459a-b7e0-72992a64b409",
                "name": "inventory_bundle_added",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                        "name": "bundleId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                        "name": "bundleId",
                        "dataType": "string"
                    },
                    {
                        "id": "b03d2d7e-a5ba-4713-bf69-a3fbeca6616b",
                        "name": "quantity",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "8df583eb-5f6e-4068-b856-aa7e34ee4e78",
                "name": "item_unequipped",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                        "name": "instanceId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "84114078-2c9c-4f09-8fbf-8e1f02efc8f3",
                "name": "item_equipped",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                        "name": "instanceId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "71944606-f52d-4a36-8183-60d28fa1b8ce",
                "name": "item_consumed",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                        "name": "instanceId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "ac30ae95-0cd8-4dd4-a132-08572eca6e0e",
                "name": "inventory_item_removed",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                        "name": "instanceId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    }
                ]
            },
            {
                "id": "8a942500-c161-459b-8e7c-b584b3cb7287",
                "name": "inventory_item_added",
                "category": "Inventory",
                "parameterDetails": [
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                        "name": "itemId",
                        "dataType": "string"
                    },
                    {
                        "id": "b03d2d7e-a5ba-4713-bf69-a3fbeca6616b",
                        "name": "quantity",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "93dc0427-d435-4850-a7ed-1ac540cd1061",
                "name": "bundle_purchased",
                "category": "Stores",
                "parameterDetails": [
                    {
                        "id": "6ea955c6-07c8-4081-b513-970a7f5aea02",
                        "name": "currencyId",
                        "dataType": "string"
                    },
                    {
                        "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                        "name": "bundleId",
                        "dataType": "string"
                    },
                    {
                        "id": "e0c3b270-amx0-4e02-8241-8544sleal43b",
                        "name": "price",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "9851c851-4093-42a4-8aaa-e3260e585e7e",
                "name": "match_session_ended",
                "category": "Matches",
                "parameterDetails": [
                    {
                        "id": "e0c3b270-d36f-4e02-8241-8524d3eb042b",
                        "name": "matchId",
                        "dataType": "string"
                    },
                    {
                        "id": "10dc15c7-8355-4029-919b-d6199535abb0",
                        "name": "outcome",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "20dadc5d-0294-4890-900e-d5d2d507bf4c",
                "name": "progression_marker_updated",
                "category": "Progression",
                "parameterDetails": [
                    {
                        "id": "01d31679-f817-41e2-88a6-09457ab1fc9e",
                        "name": "progressionMarkerId",
                        "dataType": "string"
                    },
                    {
                        "id": "db0761f5-cd36-4a51-9a95-740eaed8add0",
                        "name": "amount",
                        "dataType": "integer"
                    }
                ]
            },
            {
                "id": "8bee1e9d-4d18-414c-9972-c21380e8683b",
                "name": "wallet_balance_updated",
                "category": "Wallet",
                "parameterDetails": [
                    {
                        "id": "6ea955c6-07c8-4081-b513-970a7f5aea02",
                        "name": "currencyId",
                        "dataType": "string"
                    },
                    {
                        "id": "db0761f5-cd36-4a51-9a95-740eaed8add0",
                        "name": "amount",
                        "dataType": "integer"
                    }
                ]
            }
        ],
        "matchOutcomes": [
            {
                "id": 1,
                "name": "score"
            },
            {
                "id": 2,
                "name": "completion_time"
            },
            {
                "id": 4,
                "name": "finish_position"
            }
        ],
        "matchFormats": [
            {
                "id": 1,
                "name": "single_player"
            },
            {
                "id": 2,
                "name": "multi_player"
            }
        ],
        "matchWinningConditions": [
            {
                "id": 1,
                "name": "higher"
            },
            {
                "id": 2,
                "name": "lower"
            }
        ],
        "leaderboardOutcomes": [
            {
                "id": 1,
                "name": "high_score"
            },
            {
                "id": 5,
                "name": "cumulative_score"
            },
            {
                "id": 4,
                "name": "position_weighting"
            },
            {
                "id": 2,
                "name": "time_trial"
            }
        ],
        "leaderboardIntervals": [
            {
                "id": 3,
                "name": "monthly"
            },
            {
                "id": 4,
                "name": "yearly"
            },
            {
                "id": 5,
                "name": "all_time"
            },
            {
                "id": 6,
                "name": "custom"
            },
            {
                "id": 8,
                "name": "hours"
            },
            {
                "id": 1,
                "name": "days"
            },
            {
                "id": 7,
                "name": "minutes"
            },
            {
                "id": 2,
                "name": "weeks"
            }
        ],
        "leaderboardSourceTypes": [
            {
                "id": 1,
                "name": "match"
            },
            {
                "id": 2,
                "name": "statistics"
            },
            {
                "id": 3,
                "name": "custom"
            }
        ],
        "defaultParameters": [
            {
                "id": "db0761f5-cd36-4a51-9a95-740eaed8add0",
                "name": "amount",
                "type": "statistic"
            },
            {
                "id": "1a90629e-aec1-4993-8489-2c5e7c5236fc",
                "name": "itemId",
                "type": "state"
            },
            {
                "id": "1a90629e-aec1-4993-8489-2c5e7c5236fd",
                "name": "bundleId",
                "type": "state"
            },
            {
                "id": "10dc15c7-8355-4029-919b-d6199535abb0",
                "name": "outcome",
                "type": "statistic"
            },
            {
                "id": "b03d2d7e-a5ba-4713-bf69-a3fbeca6616b",
                "name": "quantity",
                "type": "statistic"
            },
            {
                "id": "817ea22d-71fb-405d-ac3c-eb3ca381bb32",
                "name": "competitionId",
                "type": "state"
            },
            {
                "id": "64ba2409-b251-42e4-ba70-3cdd4b9257da",
                "name": "gameId",
                "type": "state"
            },
            {
                "id": "e0c3b270-d36f-4e02-8241-8524d3eb042b",
                "name": "matchId",
                "type": "state"
            },
            {
                "id": "6ea955c6-07c8-4081-b513-970a7f5aea02",
                "name": "currencyId",
                "type": "state"
            },
            {
                "id": "6ea955c6-07c8-4081-b513-970a7f5fea12",
                "name": "eventId",
                "type": "state"
            },
            {
                "id": "01d31679-f817-41e2-88a6-09457ab1fc9e",
                "name": "progressionMarkerId",
                "type": "state"
            },
            {
                "id": "01d31679-f817-41e2-88a6-09457ab1sm45",
                "name": "storeId",
                "type": "state"
            },
            {
                "id": "alc31679-f817-41e2-88a6-09457ab1sm45",
                "name": "collectionId",
                "type": "state"
            },
            {
                "id": "alc31679-f817-smv4-88a6-09457ab1sm45",
                "name": "stackId",
                "type": "state"
            },
            {
                "id": "01d31679-alc2-41e2-dmc3-09457ab1sm45",
                "name": "customId",
                "type": "state"
            },
            {
                "id": "e0c3b270-amx0-4e02-8241-8524d3eb042b",
                "name": "username",
                "type": "state"
            },
            {
                "id": "b03d2d7e-a5ba-4713-axl2-a3fbeca6616b",
                "name": "instanceId",
                "type": "state"
            },
            {
                "id": "e0c3b270-amx0-4e02-8241-8544sleal43b",
                "name": "price",
                "type": "state"
            },
            {
                "id": "01d31679-f817-41e2-dmc3-09457ab1sm45",
                "name": "email",
                "type": "state"
            },
            {
                "id": "6513dd60-8a6e-4066-ad4b-576bb8d63d2f",
                "name": "taskId",
                "type": "state"
            },
            {
                "id": "38ff011b-4d41-4c01-8ed0-6ca8c2ee8350",
                "name": "firstName",
                "type": "state"
            },
            {
                "id": "d9acdffb-0886-4565-bf2e-4904d2244221",
                "name": "lastName",
                "type": "state"
            },
            {
                "id": "936f2ade-4de4-40a8-9d8f-e55cc6c9510f",
                "name": "username",
                "type": "state"
            },
            {
                "id": "442d484e-a3bf-436f-b628-db513d042475",
                "name": "displayName",
                "type": "state"
            },
            {
                "id": "5f308bc1-6d0e-446a-9a35-f004257f94e6",
                "name": "thumbUrl",
                "type": "state"
            },
            {
                "id": "3619d781-4338-44d1-b447-bed721033cd6",
                "name": "isKycComplete",
                "type": "state"
            },
            {
                "id": "c46c85a2-6706-4608-9927-25e4355f7efd",
                "name": "count",
                "type": "statistic"
            },
            {
                "id": "b5741204-959a-40a4-844f-543c6449d67e",
                "name": "taskId",
                "type": "state"
            },
            {
                "id": "ba7e44f4-d36e-4078-be8f-054978d1acc7",
                "name": "taskGroupId",
                "type": "state"
            }
        ],
        "competitionFormats": [
            {
                "id": 3,
                "name": "Instant Battle"
            },
            {
                "id": 4,
                "name": "Paid Challenge"
            },
            {
                "id": 5,
                "name": "Bracket"
            },
            {
                "id": 2,
                "name": "Tournament"
            }
        ],
        "projectCategories": [
            {
                "id": 1,
                "name": "Gaming"
            },
            {
                "id": 2,
                "name": "Productivity"
            },
            {
                "id": 3,
                "name": "Fitness & Health"
            },
            {
                "id": 4,
                "name": "Learning & Education"
            },
            {
                "id": 5,
                "name": "Social Media Engagement"
            },
            {
                "id": 6,
                "name": "E-commerce & Shopping"
            },
            {
                "id": 7,
                "name": "News & Information Consumption"
            },
            {
                "id": 8,
                "name": "Financial & Budgeting"
            },
            {
                "id": 9,
                "name": "Travel & Exploration"
            },
            {
                "id": 10,
                "name": "Food & Cooking"
            },
            {
                "id": 11,
                "name": "Art & Design"
            },
            {
                "id": 12,
                "name": "Music & Audio"
            },
            {
                "id": 13,
                "name": "Video & Streaming"
            },
            {
                "id": 14,
                "name": "Reading & Literature"
            },
            {
                "id": 15,
                "name": "Networking & Communication"
            },
            {
                "id": 16,
                "name": "Sustainability & Environment"
            },
            {
                "id": 17,
                "name": "Charity & Volunteering"
            },
            {
                "id": 18,
                "name": "DIY & Crafting"
            },
            {
                "id": 19,
                "name": "Pets & Animals"
            },
            {
                "id": 20,
                "name": "Home & Interior Design"
            },
            {
                "id": 21,
                "name": "Gardening & Landscaping"
            },
            {
                "id": 22,
                "name": "Other"
            }
        ],
        "permissionIds": [
            {
                "id": 2,
                "name": "write"
            },
            {
                "id": 1,
                "name": "read"
            }
        ]
    }
}
```

## Additional Information

Retrieves comprehensive reference datasets that define your application's foundational configurations. This includes data types, platforms, item types, progression system types, and many other standardized values used throughout the Specter platform.
Request Headers

Content-Type: application/json
Api Key: Your API key provided by Specter

Request Body Parameters
This endpoint does not require any parameters in the request body.
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
Contains the master data information.

Data Object Structure
The data object contains numerous arrays with standardized values used across the platform:

Field
Type
Description

dataTypes
array
Available data types for parameters (string, integer, boolean, float).

platforms
array
Supported device platforms (android, ios, etc.).

itemTypes
array
Types of items that can exist in the system (durable, consumable).

progressionSystemTypes
array
Types of progression systems (linear, non-linear).

organisationTypes
array
Types of organizations (individual, organisation).

taskGroupTypes
array
Types of task groups (mission, step_series).

countries
array
List of countries with IDs, names, and codes.

genres
array
Game or application genres.

defaultEvents
array
Pre-defined events with their parameters.

matchOutcomes
array
Types of match outcomes (score, completion_time, finish_position).

matchFormats
array
Formats for matches (single_player, multi_player).

matchWinningConditions
array
Conditions for winning (higher, lower).

leaderboardOutcomes
array
Types of leaderboard outcomes (high_score, time_trial, etc.).

leaderboardIntervals
array
Time intervals for leaderboards (daily, weekly, monthly, etc.).

leaderboardSourceTypes
array
Sources for leaderboard data (match, statistics, custom).

defaultParameters
array
Pre-defined parameters for events.

competitionFormats
array
Types of competitions (Tournament, Instant Battle, etc.).

projectCategories
array
Categories for projects (Gaming, Productivity, etc.).

permissionIds
array
Permission types (read, write).

Each array contains objects with standardized values, typically with an id field and a name field. Some arrays have additional fields specific to their purpose.
Notes

Reference Data: This endpoint provides reference data that serves as a foundation for your application's configuration. It defines standard values used across the platform.
Constant Values: The data returned by this endpoint rarely changes and should be considered relatively static.
Client Caching: Consider implementing client-side caching for this data as it doesn't change frequently, reducing API calls and improving performance.
Initialization: This data is typically retrieved during application initialization and referenced throughout the application lifecycle.
Value Mapping: Use these standardized values when sending data to other Specter endpoints to ensure consistency and proper data validation.

Integration Tips

Load Once: Load master data once at application startup or during first-time setup, then reference it throughout the application lifecycle.
Error Handling: Implement fallback defaults in case the API call fails, ensuring your application can continue functioning.
Value Validation: Use the retrieved values to validate user inputs and ensure they conform to the platform's standards.
ID References: When making requests to other endpoints, use the IDs from master data to ensure consistent references.
UI Localization: For user-facing elements like genres or countries, implement appropriate translations while maintaining the standardized IDs for backend communication.

The Get Master Data endpoint provides the foundation for ensuring consistency and standardization across your application, allowing various components to reference the same set of values and ensuring compatibility with the Specter platform.

## Required Headers

- **Api-Key**: Environment-specific API key for authentication.

## Tags

master-reference, initialization, standardization, lookup-tables, system-values, reference-data, configuration, constants
