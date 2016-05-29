import React from 'react';
import { Link } from 'react-router';

import styles from './Storefront.css';

import Nav from './Nav.jsx';

class Storefront extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles['content-container'] }>
          <div className={ styles.storefront }>
            <div className={ styles.head }>
              { /* <div className={ styles.hamburger } onClick={ props.toggleSidebar }> */ }
              <div className={ styles.hamburger }>
                { /* <Icon name="fc-hamburger" styleName="head-icon"/> */ }
              </div>
              <div className={ styles['logo-link'] }>
                <Link to="/">
                  { /* <Icon className="logo" name="top-drawer-logo" /> */ }
                </Link>
              </div>
              <div className={ styles.tools }>
                { /* <UserTools path={props.location.pathname} /> */ }
              </div>
            </div>
            <Nav />
            {this.props.children}
          </div>
        </div>
        <div className={ styles.footer }>
          { /* <Footer /> */ }
        </div>
        <div className={ styles['mobile-sidebar']}>
          { /* <Sidebar path={props.location.pathname} /> */ }
        </div>
        <div>
          { /* <Cart /> */ }
        </div>
      </div>
    )
  }
}

export default Storefront;