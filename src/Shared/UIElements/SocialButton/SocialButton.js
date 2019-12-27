import React from 'react';

import './SocialButton.css';

const SocialButton = props => {
  return <div className="social__tile">{props.children}</div>;
};

export default SocialButton;
