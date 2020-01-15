import React, { useState } from 'react';

import Sidedraw from './SideDraw/Sidedraw';
import NavigationList from './NavigationList/NavigationList';
import NavigationIcon from './NavigationIcon/NavigationIcon';
import './Navigation.css';

const Navigation = props => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const sideDrawerOpenHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <React.Fragment>
      <NavigationIcon open={sideDrawerOpen} onClick={sideDrawerOpenHandler} />
      {sideDrawerOpen ? (
        <Sidedraw>
          <NavigationList onClick={sideDrawerOpenHandler} type={'beauty'} />
          <NavigationList onClick={sideDrawerOpenHandler} type={'cake'} />
        </Sidedraw>
      ) : null}
    </React.Fragment>
  );
};

export default Navigation;
