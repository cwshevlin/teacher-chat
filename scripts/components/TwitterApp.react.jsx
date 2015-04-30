var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var RouteStore = require('../stores/RouteStore.react.jsx');
var Header = require('../components/Header.react.jsx');

function getStateFromStores() {
	return {
		// TODO: Hook this up to the session stores so that teachers can log in and store their email. 
		isLoggedIn: true,
		email: "email",
	}
}

var TwitterApp = React.createClass({

	getInitialState: function() {
    return getStateFromStores();
  },
  
  componentDidMount: function() {
    // SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    // SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {
    return (
      <div className="app">
        <Header 
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.email} />
        <RouteHandler/>
      </div>
    );
  }


});

module.exports = TwitterApp;