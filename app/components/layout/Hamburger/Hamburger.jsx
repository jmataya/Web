import React from 'react';

import Icon from '../../shared/Icon.jsx';
import hamburgerIcon from './Hamburger.svg';
import styles from './Hamburger.css';

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