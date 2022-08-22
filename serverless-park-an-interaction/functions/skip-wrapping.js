const path = Runtime.getFunctions()['response-header'].path
const response = require(path).response()

exports.handler = async function (context, event, callback) {
    const client = context.getTwilioClient()
    const WORKSPACESID = context.WORKSPACE_SID
    const taskSid = event.taskSid

    try {
        // Update task
        await client.taskrouter.v1.workspaces(WORKSPACESID)
            .tasks(taskSid)
            .update({
                assignmentStatus: 'completed',
            })
            .then(task => {
                console.log(task)
                console.log(task.taskQueueFriendlyName)
            });
        callback(null, response)
    } catch (error) {
        console.log(error)
        callback(error)
    }
}
