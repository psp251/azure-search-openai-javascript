# Get Player Task Group Status

**Group:** Player/Others

**Description:** Retrieves the status of task groups for a user, including options for task group types, attributes, and filtering by tags.

**Route:** /v2/client/player/get-task-group-status

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **taskGroupIds**: Array of task group IDs to retrieve the status for.
- **taskGroupTypes**: Array of task group types for filtering.
- **scheduleStatuses**: Array of schedule statuses to filter task groups.
- **includeInactiveTasks**: Include inactive tasks in the response.
- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.

## Attributes

- **tasks** (array): Get tasks of task group

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, task-groups, status, achievements, progress, objectives, tracking, group-activities
