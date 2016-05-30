import React from 'react';
import { Link } from 'react-router';

import Icon from 'shared/icon';

import styles from './logo.css';
import topDrawerLogo from './logo.svg';

class Logo extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Link className={styles.logoLink} to="/">
          <Icon className={styles.logo} svg={topDrawerLogo} element="div" />
        </Link>
      </div>
    );
  }
}

Logo.propTypes = {
  className: React.PropTypes.string
}

export default Logo;