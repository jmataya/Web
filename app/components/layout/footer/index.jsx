import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Icon from 'shared/icon';

import styles from './footer.css';
import instagramIcon from './instagram.svg';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import pinterestIcon from './pinterest.svg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.className = classNames(props.className, styles.container)
  }

  render() {
    return (
      <div className={this.className}>
        <div className={styles.socialLinks}>
          <div className={styles.socialLink}>
            <a href="http://www.instagram.com/">
              <Icon className={styles.socialIcon} svg={instagramIcon} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href="http://www.facebook.com/">
              <Icon className={styles.socialIcon} svg={facebookIcon} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href="http://www.twitter.com/">
              <Icon className={styles.socialIcon} svg={twitterIcon} />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a href="http://www.pinterest.com/">
              <Icon className={styles.socialIcon} svg={pinterestIcon} />
            </a>
          </div>
        </div>
        <div className={styles.otherLinks}>
          <Link to="/about" className={styles.otherLink}>About</Link>
          <Link to="/contact" className={styles.otherLink}>Contact</Link>
          <Link to="/shipping" className={styles.otherLink}>Shipping & Returns</Link>
          <Link to="/legal" className={styles.otherLink}>Legal</Link>
        </div>
      </div>
    );
  }
}

export default Footer;