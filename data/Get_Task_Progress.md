# Get Task Progress

**Group:** Player/Me

**Description:** Retrieves the progress status of tasks assigned to the player.

**Route:** /v2/client/player/me/get-task-progress

**Method:** POST

## Parameters

- **taskIds**: Array of task IDs for which to retrieve progress.
- **status**: Filter to retrieve tasks by status.
- **scheduleStatuses**: Array of schedule statuses to filter tasks.
- **includeTaskGroupTasks**: Include tasks from task groups if set to true.
- **limit**: Pagination limit for results.
- **offset**: Pagination offset for results.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, tasks, task-progress, quests, objectives, achievements, progress, tracking
