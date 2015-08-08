var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

module.exports = React.createClass({

    render: function() {

        return (
            <Jumbotron>
                <h1>Hello, world !</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </Jumbotron>
        )

    }

});