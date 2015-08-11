var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var TaskListItem = require('./TaskListItem.react');
var TaskStore = require('../stores/TaskStore');
var TaskConstants = require('../constants/TaskConstants');


function getStateFromStores() {
    return {
        tasks: TaskStore.getAll()
    };
}

var TaskList = React.createClass({

    getInitialState: function() {
        var state = getStateFromStores();
        return state;
    },

    componentDidMount: function() {
        TaskStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TaskStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var self = this;
        if (self.state.tasks == TaskConstants.Async.TASK_LIST_LOADING) {
            return (
                <p>Loading...</p>
            )
        }

        var tasks = Object.keys(self.state.tasks).map(function(taskId) {
            return (
                <Row key={taskId}>
                    <Col xs={12}>
                        <TaskListItem task={self.state.tasks[taskId]} />
                    </Col>
                </Row>
            )
        });

        return (
            <div id="tasks-container">
                {tasks}
            </div>
        )

    },

    _onChange: function() {
        this.setState(getStateFromStores());
    }

});

module.exports = TaskList