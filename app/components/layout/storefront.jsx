import React from 'react';
import { Link } from 'react-router';

import Logo from 'layout/logo';
import Hamburger from 'layout/hamburger';
import UserTools from 'layout/user-tools';
import Navigation from 'layout/navigation';
import Footer from 'layout/footer';

import styles from './storefront.css';

class Storefront extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {

  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.storefront}>
            <div className={styles.head}>
              <Hamburger className={styles.hamburger} onClick={this.toggleSidebar} />
              <Logo className={styles.logo} />
              <UserTools className={styles.tools} />
            </div>
            <Navigation className={styles.navigation} />
            {this.props.children}
          </div>
        </div>
        <Footer className={styles.footer} />
        <div className={styles.mobileSidebar}>
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