import React from 'react';

import './NavigationIcon.css';

const NavigationIcon = props => {
  const classes = props.open ? 'openNavigationIcon' : 'navigationIcon';
  return <div onClick={props.onClick} className={classes}></div>;
};

export default NavigationIcon;
