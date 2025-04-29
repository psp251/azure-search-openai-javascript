# Send Custom Event

**Group:** Events

**Description:** Sends a custom event with specified parameters and additional customization options.

**Route:** /v2/client/events/send-custom

**Method:** POST

## Parameters

- **eventId**: Identifier of the event being fired.
- **customParams**: Additional custom parameters for event processing.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

events, custom-event, tracking, gameplay, telemetry, player-data, server, trigger
