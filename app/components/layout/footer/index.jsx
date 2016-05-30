import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Icon from 'shared/icon';

import style from './footer.css';
import instagramIcon from './instagram.svg';
import facebookIcon from './facebook.svg';
import twitterIcon from './twitter.svg';
import pinterestIcon from './pinterest.svg';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.className = classNames(props.className, style.footer)
  }

  render() {
    return (
      <div className={this.className}>
        <div className={style.socialLinks}>
          <div className={style.socialLink}>
            <a href="http://www.instagram.com/">
              <Icon className={style.socialIcon} svg={instagramIcon} />
            </a>
          </div>
          <div className={style.socialLink}>
            <a href="http://www.facebook.com/">
              <Icon className={style.socialIcon} svg={facebookIcon} />
            </a>
          </div>
          <div className={style.socialLink}>
            <a href="http://www.twitter.com/">
              <Icon className={style.socialIcon} svg={twitterIcon} />
            </a>
          </div>
          <div className={style.socialLink}>
            <a href="http://www.pinterest.com/">
              <Icon className={style.socialIcon} svg={pinterestIcon} />
            </a>
          </div>
        </div>
        <div className={style.otherLinks}>
          <Link to="/about" className={style.otherLink}>About</Link>
          <Link to="/contact" className={style.otherLink}>Contact</Link>
          <Link to="/shipping" className={style.otherLink}>Shipping & Returns</Link>
          <Link to="/legal" className={style.otherLink}>Legal</Link>
        </div>
      </div>
    );
  }
}

export default Footer;