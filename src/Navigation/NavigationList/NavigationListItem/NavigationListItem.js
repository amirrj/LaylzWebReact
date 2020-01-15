import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationListItem.css';

const NavigationListItem = props => {
  const list = ['about', 'work', 'services', 'contact'];
  const link = props.type === 'beauty' ? 'beauty' : 'cake';

  return list.map(item => {
    return (
      <li key={item} className="navigationListItem">
        <Link to={`/${link}/${item}`} className="navigationListItemLink">
          {item}
        </Link>
      </li>
    );
  });
};

export default NavigationListItem;
