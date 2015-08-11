var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Label = require('react-bootstrap').Label;
var Link = require('react-router').Link;

var TaskListItem = React.createClass({

    render: function() {

        return (
            <Panel header={this.props.task.title} bsStyle='primary'>
                <p>
                    <Label bsStyle='info'>{this.props.task.elapsedTime}h</Label>
                    {this.props.task.description}
                </p>
            </Panel>
        )

    }

});

module.exports = TaskListItem;