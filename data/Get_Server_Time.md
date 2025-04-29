# Get Server Time

**Group:** Live Ops

**Description:** Retrieves the current server time, optionally adjusted to a specified timezone.

**Route:** /v2/client/liveops/get-server-time

**Method:** POST

## Parameters

- **timezone**: Optional timezone for formatting the server time response.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

liveops, server-time, timestamp, timezones, synchronization, clock, latency, real-time
