/**
 * React component for rendering an SVG icon wrapped in a <div>.
 */

import React from 'react';
import InlineSVG from 'svg-inline-react';

import styles from './icon.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.size = props.size || 's';
    this.className = `icon icon--${this.size}${props.className ? " " + props.className : ""}`;
  }

  render() {
    const node = (<InlineSVG {...this.props} className={this.className} src={this.props.svg} />);

    if (this.className.indexOf('spinner') > -1) {
      return <div className="icon__spinner">{node}</div>
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