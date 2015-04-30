var TwitterAppDispatcher = require('../dispatcher/TwitterAppDispatcher.js');
var TwitterAppConstants = require ('../constants/TwitterAppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
// var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = TwitterAppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _tweets = [];
var _errors = [];
var _story = {};

var StoryStore = assign({}, EventEmitter.prototype, {

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	getTweets: function() {
		return _tweets;
	},

	getTweet: function() {
		return _tweet;
	},

	getErrors: function() {
		return _errors;
	}

});