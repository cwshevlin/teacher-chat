var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
// var SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');

var Header = React.createClass({
  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {

    return (
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">TeacherChats</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;