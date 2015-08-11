var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var TimeTrackrDispatcher = require('../dispatcher/TimeTrackrDispatcher');
var TaskConstants = require('../constants/TaskConstants');
var TaskAPI = require('../utils/TaskAPI');

var ActionTypes = TaskConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _tasks = {};

var TaskStore = assign({}, EventEmitter.prototype, {

    setTask: function(task) {
        _tasks[task.id] = task;
    },

    setTasks: function(tasks) {
        var self = this;
        tasks.forEach(function(task) {
            self.setTask(task);
        });
    },

    get: function(id) {
        if (_tasks[id]) {
            return _tasks[id];
        }

        TaskAPI.get(id);
        return TaskConstants.Async.TASK_LOADING;
    },

    getAll: function() {
        if (Object.keys(_tasks).length == 0) {
            TaskAPI.getAll();
            return TaskConstants.Async.TASK_LIST_LOADING;
        }
        return Object.keys(_tasks).map(function(key){
            return _tasks[key];
        });
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

TimeTrackrDispatcher.register(function(action) {
    switch (action.type)
    {
        case ActionTypes.TASK_LIST_RECEIVED:
            TaskStore.setTasks(action.tasks);
            TaskStore.emitChange();
            break;
    }
});

module.exports = TaskStore;