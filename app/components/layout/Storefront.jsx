import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav.jsx';

class Storefront extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="content-container">
          <div styleName="storefront">
            <div styleName="head">
              <div styleName="logo-link">
                <Link to="/">
                  { /* <Icon styleName="logo" name="fc-top-drawer-logo" /> */ }
                </Link>
              </div>
              <div styleName="tools">
                { /* <UserTools path={props.location.pathname} /> */ }
              </div>
            </div>
            <Nav />
            {this.props.children}
          </div>
        </div>
        <div styleName="footer">
          { /* <Footer /> */ }
        </div>
        { /*
          <div styleName="mobile-sidebar">
            <Sidebar path={props.location.pathname} />
          </div>
          */
        }
        <div>
          { /* <Cart /> */ }
        </div>
      </div>
    )
  }
}

export default Storefront;