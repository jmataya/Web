import React from 'react';
import { Link } from 'react-router';

import Icon from '../../shared/Icon.jsx';
import topDrawerLogo from './Logo.svg';
import styles from './Logo.css';

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