/*
 * The Site component is responsible for site-wide layout. It's very minimal
 * because we may eventually want to have landing pages or something similar
 * with minimal presentation.
 */

import React from 'react';

import styles from './site.css';

class Site extends React.Component {
  render() {
    return (
      <div className={ styles.site }>
        { this.props.children }
      </div>
    )
  }
}

Site.propTypes = {
  // A child node is required
  children: React.PropTypes.node.isRequired,
};

export default Site;