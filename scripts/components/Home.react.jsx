var React = require('react');
// var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var TweetStore = require('../stores/TweetStore.react.jsx');
var ErrorNotice = require('../components/ErrorNotice.react.jsx');
var TweetActionCreators = require('../actions/TweetActionCreators.react.jsx');
var Router = require('react-router');
var TwitterAppConstants = require('../constants/TwitterAppConstants.js');
var Link = Router.Link;

var HomePage = React.createClass({

	getInitialState: function(){
		return {
			tweets: [],
			errors: []
		}
	}, 

	componentDidMount: function(){
		TweetStore.addChangeListener(this._onChange);
		TweetActionCreators.loadTweets();
	},

	componentWillUnmount: function(){
		TweetStore.removeChangeListener(this._onChange);
	},

	getTweets: function(){
		var username = $('#username').val();
		var hashtag = $('#hashtag').val();
		console.log(username.serialize());
		console.log(hashtag.serialize());
		$.get({
			url: TwitterAppConstants.APIEndpoints.TWEETS + 

		});
	},

	_onChange: function(){
		this.setState({
			tweets: TweetStore.getTweets(),
			errors: TweetStore.getErrors()
		});
	},

	render: function(){
		var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
		return (
      <div>
        {errors}
				<input type="text" id="username" placeholder="username"/>
				<input type="text" id="hashtag" placeholder="hashtag"/>
				<button onClick={this.getTweets}>Submit</button>
        <div className="list">
          <TweetsList tweets={this.state.tweets} />
        </div>
      </div>
    )
  }
});

var Tweet = React.createClass({
	render: function(){
		return (
			<li>
				<div className="author">
				</div>
				<div className="tweet">
					{tweet}
				</div>
			</li>
		)
	}
});

var TweetsList = React.createClass({
	render: function(){
		return (
				<ul className="tweetList">
					{this.props.tweets.map(function(tweet, index){
						<Tweet tweet={tweet} key={"tweet"+index}/>
					})}
				</ul>
		)
	}
});

module.exports = HomePage;

