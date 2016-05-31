import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Icon from 'shared/icon';

import styles from './logo.css';
import topDrawerLogo from './logo.svg';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.className = classNames(props.className, styles.container)
  }

  render() {
    return (
      <div className={this.props.className}>
        <Link className={styles.logoLink} to="/">
          <Icon className={styles.logo} svg={topDrawerLogo} />
        </Link>
      </div>
    );
  }
}

Logo.propTypes = {
  className: React.PropTypes.string
}

export default Logo;