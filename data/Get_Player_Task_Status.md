# Get Player Task Status

**Group:** Player/Others

**Description:** Fetches the status of specified tasks for a given user, including optional filters for task group and activity status.

**Route:** /v2/client/player/get-task-status

**Method:** POST

## Parameters

- **userId**: Unique identifier for the user.
- **taskIds**: Array of task IDs to retrieve the status for.
- **status**: Filter to retrieve tasks by status
- **scheduleStatuses**: Array of schedule statuses to filter tasks. (yet to start | in progress | stopped | expired)
- **includeTaskGroupTasks**: Include tasks from task groups if set to true.
- **includeInactiveTasks**: Include inactive tasks if set to true.
- **offset**: Pagination offset for results.
- **limit**: Pagination limit for results.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, tasks, status, quests, achievements, objectives, tracking, activity
