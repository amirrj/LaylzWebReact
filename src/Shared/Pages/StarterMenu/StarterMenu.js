import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import BeautyHeader from '../../../Assets/Beauty/lipstick-edit.jpg';
import CakeHeader from '../../../Assets/Cakes/bakinghome-edit.jpg';
import Logo from '../../Components/Logo/Logo';
import Title from '../../../Shared/Components/Title/Title';
import './StarterMenu.css';

const StarterMenu = props => {
  return (
    <React.Fragment>
      <HeaderLogoWrapper to={'/Beauty/Home'} img={BeautyHeader}>
        <Logo type={'beauty'} />
        <Title type={'beauty'} />
      </HeaderLogoWrapper>
      <div className="header-border"></div>
      <HeaderLogoWrapper to={'/Cake/Home'} img={CakeHeader}>
        <Logo type={'cake'} />
        <Title type={'cake'} />
      </HeaderLogoWrapper>
    </React.Fragment>
  );
};

export default StarterMenu;
