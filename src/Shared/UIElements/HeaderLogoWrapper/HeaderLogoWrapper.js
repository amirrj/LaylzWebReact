import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLogoWrapper.css';

const HeaderLogoWrapper = props => {
  const inner = props.darken ? (
    <div className="darken">{props.children}</div>
  ) : (
    <React.Fragment>{props.children}</React.Fragment>
  );

  if (props.to) {
    return (
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
    );
  }
  return (
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
};

export default HeaderLogoWrapper;
