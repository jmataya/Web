/**
 * React component for rendering an SVG icon wrapped in a <div>.
 */

import React from 'react';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.name = `#${props.name}-icon`;
    this.size = props.size || 's';
    this.className = `icon icon--${name} icon--${size}${props.className ? " " + props.className : ""}`;

    this.useTag = `<use xlink:href=${name} />`;
    this.svgNode = (
      <svg className="icon__cnt" dangerouslySetInnerHTML={{__html: useTag }}/>
    );

    if (className.indexOf('spinner') > -1) {
      this.svgNode = <div className="icon__spinner">{this.svgNode}</div>
    }
  }

  render() {
    return (
      <div className={this.className} onClick={this.props.onClick}>
        {this.svgNode}
      </div>
    );
  }
};

Icon.propTypes = {
  size: React.propTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']);
  name: React.propTypes.string.isRequired,
  className: React.propTypes.string,
  onClick: React.propTypes.func,
};

export default Icon;