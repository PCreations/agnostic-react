var TimeTrackrDispatcher = require('../dispatcher/TimeTrackrDispatcher');
var TaskConstants = require('../constants/TaskConstants');
var TaskAPI = require('../utils/TaskAPI');

var ActionTypes = TaskConstants.ActionTypes;

module.exports = {

    receiveAll: function(tasks) {
        TimeTrackrDispatcher.dispatch({
            type: ActionTypes.TASK_LIST_RECEIVED,
            tasks: tasks
        });
    },

};