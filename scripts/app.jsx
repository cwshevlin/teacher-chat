var React = require('react');
var Router = require('./stores/RouteStore.react.jsx').getRouter();
window.React = React;

Router.run(function (Handler, state) {
  React.render(<Handler/>, document.getElementById('content'));
});