import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>
    )
  }
}

export default Nav;