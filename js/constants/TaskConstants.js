var keyMirror = require('keymirror');

module.exports = {

    ActionTypes: keyMirror({
        TASK_LIST_RECEIVED: null,
    }),

    Async: keyMirror({
        TASK_LIST_LOADING: null,
    }),

};