import React from 'react';

import Logo from '../Logo/Logo';
import './LogoAndTitle.css';

const LogoAndTitle = props => {
  const title = props.type === 'beauty' ? 'LaylzBeauty' : 'LaylzCakes';

  const MobileHeading = (
    <div className="logoTitle__container">
      <Logo type={props.type} />
      <h1 className="logoTitle__title">{title}</h1>
    </div>
  );

  return MobileHeading;
};

export default LogoAndTitle;
