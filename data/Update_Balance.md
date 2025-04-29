# Update Balance

**Group:** Wallet

**Description:** Updates the balance of a specified wallet by adding or subtracting an amount for a given currency.

**Route:** /v2/client/wallet/update-balance

**Method:** POST

## Parameters

- **amount**: The amount to add or subtract from the wallet balance.
- **customParams**: Custom parameters for additional processing.
- **currencyId**: The id of the currency to update
- **operation**: The update operation to execute
- **walletType**: The type of the wallet to update (mainly relevant when updating RMG wallets. Default to virtual).

## Additional Information

Updates the balance of a specified wallet by adding or subtracting an amount for a given currency. This endpoint allows you to modify a player's currency balances to implement in-game rewards, purchases, or other economy-related transactions.
Request Headers

Content-Type: application/json

Api Key: Your API key provided by Specter

Authorization: Bearer token for the player's session

Request Body Parameters
Required Parameters

Parameter
Type
Description

currencyId

 

 

string

 

 

The ID of the currency to update (e.g., "curr_skai").

 

 

amount

 

 

number

 

 

The amount to add or subtract from the wallet balance.

 

 

operation

 

 

string

 

 

The update operation to execute. Allowed values: "add", "subtract".

 

 

walletType

 

 

string

 

 

The type of the wallet to update. Allowed values: "virtual", "rm_deposit", "rm_winning", "rm_bonus".

 

 

Optional Parameters

Parameter
Type
Description

customParams

 

 

object

 

 

Custom parameters for additional processing.

 

 

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

 

 

Contains the updated wallet information.

 

 

Data Object Structure

Field
Type
Description

uuid

 

 

number

 

 

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

 

 

type

 

 

string

 

 

Type of currency (e.g., "virtual").

 

 

code

 

 

string

 

 

Currency code (e.g., "SK").

 

 

balance

 

 

number

 

 

Current balance of the currency in the player's wallet after the update.

 

 

Notes

Authorization: This endpoint requires authorization with a valid player token, as it modifies a specific player's wallet.

Operation Types: Use "add" to increase a player's balance and "subtract" to decrease it.

Wallet Types: Different wallet types may have different rules and restrictions:

"virtual": Standard virtual currencies used within the game.

"rm_deposit": Real money deposit wallets (used in games with real money transactions).

"rm_winning": Real money winning wallets (used for storing winnings from competitions).

"rm_bonus": Bonus currency wallets (used for promotional or bonus currencies).

Transaction Validation: The system will validate transactions to ensure players have sufficient funds when using the "subtract" operation.

Currency Existence: The currencyId must refer to a valid currency in your application.

Integration Tips

Transaction Logging: Implement client-side logging to keep track of all wallet operations for troubleshooting and customer support.

Balance Verification: Always verify the returned balance matches your expected result after the operation.

Error Handling: Implement robust error handling for cases where transactions might fail, such as insufficient funds.

Currency Display: Update your UI immediately after successful transactions to show the player's new balance.

Reward Feedback: Provide visual and audio feedback when adding currency as a reward to enhance the player experience.

The Update Balance endpoint is a crucial component for implementing in-game economies in Arcadia Nexus. By effectively managing player currencies, you can create engaging reward systems and monetization mechanisms that enhance the overall player experience across the different realms of the metaverse.

 

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

wallet, economy, currencies, finance, credits, player, transactions, update, virtual-currency
