/**
 * React component for rendering an SVG icon wrapped in a <div>.
 */

import React from 'react';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';

import styles from './icon.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.size = props.size || 's';
    this.className = classNames(props.className, styles.icon, styles[`icon--${this.size}`]);
  }

  render() {
    const node = (<InlineSVG {...this.props} className={this.className} element="div" src={this.props.svg} />);

    if (this.className.indexOf('spinner') > -1) {
      return <div className={styles.iconSpinner}>{node}</div>
    }
    return node;
  }
};

Icon.propTypes = {
  svg: React.PropTypes.string.isRequired,
  element: React.PropTypes.string,
  size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Icon;