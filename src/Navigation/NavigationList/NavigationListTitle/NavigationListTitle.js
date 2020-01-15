import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationListTitle.css';

const NavigationListTitle = props => {
  const title = props.type === 'beauty' ? 'LaylzBeauty' : 'LaylzCakes';
  return (
    <Link className="navigationTitle" to={`/${props.type}/home`}>
      {title}
    </Link>
  );
};

export default NavigationListTitle;
