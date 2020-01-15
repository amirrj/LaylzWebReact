import React from 'react';

import NavigationTitle from './NavigationListTitle/NavigationListTitle';
import NavigationListItems from './NavigationListItem/NavigationListItem';
import './NavigationList.css';

const NavigationList = props => {
  return (
    <div onClick={props.onClick} className="navigationListContainer">
      <NavigationTitle type={props.type} />
      <ul className="navigationList">
        <NavigationListItems type={props.type} />
      </ul>
    </div>
  );
};

export default NavigationList;
