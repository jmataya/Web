import React from 'react';
import { Link } from 'react-router';

import styles from './Storefront.css';

import Logo from './Logo/Logo.jsx';
import Hamburger from './Hamburger/Hamburger.jsx';
import UserTools from './UserTools/UserTools.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer/Footer.jsx';

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
              <UserTools className={styles.userTools} />
            </div>
            <Nav />
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