import React from 'react';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Beauty/beautyAbout-header.jpg';
import Logo from '../../../Shared/Components/Logo/Logo';
import Title from '../../../Shared/Components/Title/Title';
import AboutTitle from '../../../Shared/Components/AboutTitle/AboutTitle';
import './BeautyAbout.css';

const BeautyAbout = props => {
  return (
    <React.Fragment>
      <HeaderLogoWrapper darken img={HeaderImage}>
        <Logo type={'beauty'} />
        <Title type={'beauty'} />
      </HeaderLogoWrapper>
      <AboutTitle type={'beauty'} />
    </React.Fragment>
  );
};

export default BeautyAbout;
