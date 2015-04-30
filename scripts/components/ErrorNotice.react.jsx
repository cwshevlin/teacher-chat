var React = require('react');
var TweetStore = require('../stores/TweetStore.react.jsx');
var TweetActionCreators = require('../actions/TweetActionCreators.react.jsx');
var Router = require('react-router');
var Link = Router.Link;

var ErrorNotice = React.createClass({

	setInitialState: function(){

	},

	render: function(){
		return(
			<ul className="errors">
				this.props.errors.map(function(error, index){
					<li key={index}> {error} </li> 
				})
			</ul>
		)
	}


});
