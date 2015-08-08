var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Navbar = require('react-bootstrap').Navbar;
require('bootstrap/dist/css/bootstrap.min.css');

var TaskList = require('./components/TaskList.react');

var App = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Navbar brand='TimeTrackr'/>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

var routes = (
    <Route handler={App}>
        <Route path="/" handler={TaskList}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.getElementById('app'));
});