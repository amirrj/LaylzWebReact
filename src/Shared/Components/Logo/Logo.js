import React from 'react';

import BeautyLogo from '../../../Assets/Beauty/beautylogo_white.png';
import CakeLogo from '../../../Assets/Cakes/cakelogo_white.png';
import './Logo.css';

const Logo = props => {
  if (props.type === 'beauty') {
    return <img className="Logo" src={BeautyLogo} alt="Laylz Beauty Logo" />;
  }

  if (props.type === 'cake') {
    return <img className="Logo" src={CakeLogo} alt="Laylz Cake Logo" />;
  }
};

export default Logo;
