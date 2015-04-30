var keyMirror = require('keymirror');

var APIRoot = "https://api.twitter.com/1.1/";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/api/v1/login",
    REGISTRATION:   APIRoot + "/api/v1/users",
    INCIDENTS:        APIRoot + "/api/v1/incidents",
    TWEETS:        APIRoot + "search/tweets.json?q="
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({

    // Routes
    REDIRECT: null,
    LOAD_TWEETS: null,
    RECEIVE_TWEETS: null,
    LOAD_TWEET: null,
    RECEIVE_TWEET: null,
  })

};