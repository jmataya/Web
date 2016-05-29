import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link activeClass="active" to="/">Home</Link> |
        <Link activeClass="active" to="/about">About Us</Link> |
        <Link activeClass="active" to="/terms">Terms of Service</Link>
      </nav>
    )
  }
}

export default Nav;