var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var TwitterApp = require('./components/TwitterApp.react.jsx');
var Tweet = require('./components/TweetPage.react.jsx');
var Home = require('./components/Home.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={TwitterApp}>
    <DefaultRoute handler={Home} />
    <Route name="tweet" path="/tweets/:tweetId" handler={Tweet} />
  </Route>
);