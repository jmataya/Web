import React from 'react';

import Icon from 'shared/icon';

import styles from './hamburger.css';
import hamburgerIcon from './hamburger.svg';

class Hamburger extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Icon svg={hamburgerIcon} />
      </div>
    );
  }
}

export default Hamburger;