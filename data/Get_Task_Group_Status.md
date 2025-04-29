# Get Task Group Status

**Group:** Player/Me

**Description:** Retrieves the status of task groups for the player.

**Route:** /v2/client/player/me/get-task-group-status

**Method:** POST

## Parameters

- **taskGroupIds**: An optional array of specific task group IDs for which to fetch statuses.
- **taskGroupTypes**: An optional array of task group types to filter out the retrieved statuses by. (mission | step series)
- **scheduleStatuses**: An array of schedule statuses to filter retrieved task group statuses.
- **includeInactiveTasks**: A boolean flag to include inactive tasks in the results (eg: useful to fetch inactive missions in a Mission group).
- **limit**: The maximum number of task groups to return in the response.
- **offset**: The number of task groups to skip for pagination.

## Attributes

- **tasks** (array): Get tasks of task group

## Required Headers

- **api-key**: The environment-specific API key
- **Authorization**: A valid Authorization ('Bearer <token>') is required to grant access for the player's session.

## Tags

player, tasks, task-groups, quests, progress, objectives, achievements, tracking, groups
