var TwitterAppDispatcher = require('../dispatcher/TwitterAppDispatcher.js');
var TwitterAppConstants = require('../constants/TwitterAppConstants.js');
var TweetStore = require('../stores/TweetStore.react.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Router = require('react-router');
var routes = require('../routes.jsx');


var router = Router.create({
  routes: routes,
  location: null
});

var ActionTypes = TwitterAppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var RouteStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function() {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter: function() {
    return router;
  },

  redirectHome: function() {
    router.transitionTo('app');
  }

});

module.exports = RouteStore;