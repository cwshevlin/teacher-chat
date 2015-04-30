var TwitterAppDispatcher = require('../dispatcher/TwitterAppDispatcher.js');
var TwitterAppConstants = require ('../constants/TwitterAppConstants.js');
// var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = TwitterAppConstants.ActionTypes;

module.exports = {

  loadStories: function() {
    TwitterAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORIES
    });
    // WebAPIUtils.loadTweets();
  },
  
  loadStory: function(tweetId) {
    TwitterAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TWEET,
      tweetId: tweetId
    });
    // WebAPIUtils.loadStory(tweetId);
  },


};