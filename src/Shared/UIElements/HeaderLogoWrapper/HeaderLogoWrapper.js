import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLogoWrapper.css';

const HeaderLogoWrapper = props => {
  const inner = props.darken ? (
    <div className="darken">{props.children}</div>
  ) : (
    <React.Fragment>{props.children}</React.Fragment>
  );

  const Header = props.to ? (
    <Link
      to={props.to}
      className={`HeaderLogoWrapper ${props.className} `}
      img={props.img}
      style={{
        background: `url(${props.img}) center center no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      {inner}
    </Link>
  ) : (
    <div
      className={`HeaderLogoWrapper ${props.className}`}
      img={props.img}
      style={{
        background: `url(${props.img}) center center no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      {inner}
    </div>
  );

  return Header;
};

export default HeaderLogoWrapper;
