import React from 'react';

import './Sidedraw.css';

const Sidedraw = props => {
  return <nav className="sidedraw">{props.children}</nav>;
};

export default Sidedraw;
