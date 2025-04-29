# Get Task Status

**Group:** Player/Me

**Description:** Fetches the status of tasks assigned to the player.

**Route:** /v2/client/player/me/get-task-status

**Method:** POST

## Parameters

- **taskIds**: An array of specific task IDs for which to fetch statuses.
- **limit**: The maximum number of task statuses to return in the response.
- **offset**: The number of task statuses to skip for pagination.
- **status**: Filter to retrieve tasks with a specific status
- **scheduleStatuses**: Array of schedule statuses to filter tasks (yet to start | in progress | stopped | expired)
- **includeTaskGroupTasks**: Include tasks from task groups if set to true.
- **includeInactiveTasks**: Include inactive tasks if set to true.

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, tasks, task-status, quests, progress, goals, objectives, achievements, tracking
