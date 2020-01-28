import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../../Assets/Shared/sprite.svg';
import './SocialButton.css';

const SocialButton = props => {
  const [socials] = useState([
    {
      id: 'si1',
      name: 'instagram',
      url: 'http://www.instagram.co.uk',
      icon: 'instagram'
    },
    {
      id: 'si2',
      name: 'email',
      url: 'http://www.google.co.uk',
      icon: 'mail'
    },
    {
      id: 'si3',
      name: 'text',
      url: 'http://www.google.co.uk',
      icon: 'chat'
    }
  ]);

  const socialTiles = socials.map(item => {
    return (
      <div key={item.id} className="social__tile-border">
        <Link to={item.url} className="social__tile">
          <svg className="social__tile-icon">
            <use xlinkHref={`${sprite}#icon-${item.icon}`}></use>
          </svg>
        </Link>
      </div>
    );
  });

  return <div className="social__tiles">{socialTiles}</div>;
};

export default SocialButton;
