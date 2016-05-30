import React from 'react';
import { Link } from 'react-router';

import styles from './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={this.props.className}>
        <Link activeClass="active" to="/">Home</Link> |
        <Link activeClass="active" to="/about">About Us</Link> |
        <Link activeClass="active" to="/terms">Terms of Service</Link>
      </nav>
    )
  }
}

export default Navigation;