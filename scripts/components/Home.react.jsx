var React = require('react');
// var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var TweetStore = require('../stores/TweetStore.react.jsx');
var ErrorNotice = require('../components/ErrorNotice.react.jsx');
var TweetActionCreators = require('../actions/TweetActionCreators.react.jsx');
var Router = require('react-router');
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
        <SearchForm/>
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
			<ul className="">
				{this.props.tweets.map(function(tweet, index){
					<Tweet tweet={tweet} key={"tweet"+index}/>
				})}
			</ul>
		)
	}
});


var SearchForm = React.createClass({
	render: function(){
		return (
			<div>
				<input type="text" placeholder="username"/>
				<input type="text" placeholder="hashtag"/>
				<button>Submit</button>
			</div>
		)
	}
});

module.exports = HomePage;

