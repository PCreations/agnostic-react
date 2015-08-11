var TaskActionCreators = require('../actions/TaskActionCreators');

var tasks = [
    {
        id: 1,
        title: "First task",
        description : "Lorem ipsum dolor sit amet conseguir...",
        elapsedTime: 4
    },
    {
        id: 2,
        title: "Second task",
        description : "Lorem ipsum dolor sit amet conseguir...",
        elapsedTime: 2.5
    },
    {
        id: 3,
        title: "Third task",
        description : "Lorem ipsum dolor sit amet conseguir...",
        elapsedTime: 1
    }
]

var TaskAPI = {

    getAll: function() {
        setTimeout(function() {
            TaskActionCreators.receiveAll(tasks);
        }, 0);
    },

};

module.exports = TaskAPI;