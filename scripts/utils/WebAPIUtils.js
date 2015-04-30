var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var TwitterAppConstants = require('../constants/SmallConstants.js');
var request = require('superagent');

function _getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"];
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['error']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

var APIEndpoints = TwitterAppConstants.APIEndpoints;

module.exports = {

  auth: function() {
    
  }

  loadTweets: function(username, hashtag) {
    request.get(APIEndpoints.TWEETS + hashtag + "from%3A" + username + "&trim_user=t");
      .set('Accept', 'application/json')
      // .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveStories(json);
        }
      });
  },

  loadTweet: function(storyId) {
    request.get(APIEndpoints.STORIES + '/' + storyId)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveStory(json);
        }
      });
  }

};