import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import BeautyHeader from '../../../Assets/Beauty/lipstick-edit.jpg';
import CakeHeader from '../../../Assets/Cakes/bakinghome-edit.jpg';
import LogoAndTitle from '../../UIElements/LogoAndTitle/LogoAndTitle';
import './StarterMenu.css';

const StarterMenu = props => {
  return (
    <React.Fragment>
      <HeaderLogoWrapper
        className={'starterMenu__header'}
        to={'/Beauty/Home'}
        img={BeautyHeader}
      >
        <LogoAndTitle type={'beauty'} />
      </HeaderLogoWrapper>
      <div className="header-border"></div>
      <HeaderLogoWrapper
        className={'starterMenu__header'}
        to={'/Cake/Home'}
        img={CakeHeader}
      >
        <LogoAndTitle type={'cake'} />
      </HeaderLogoWrapper>
    </React.Fragment>
  );
};

export default StarterMenu;
