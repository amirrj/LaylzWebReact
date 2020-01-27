import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Cakes/cakeAbout-img.jpg';
import Logo from '../../../Shared/Components/Logo/Logo';
import Title from '../../../Shared/Components/Title/Title';
import AboutTitle from '../../../Shared/Components/AboutTitle/AboutTitle';
import Text from '../../../Shared/UIElements/TextContainer/TextContainer';
import './CakeAbout.css';

const CakeAbout = props => {
  const [text, setText] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/cakeabout').then(res => {
      const text = res.data[0].text;
      setText(text);
    });
  });
  return text ? (
    <React.Fragment>
      <HeaderLogoWrapper darken img={HeaderImage}>
        <Logo type={'cake'} />
        <Title type={'cake'} />
      </HeaderLogoWrapper>
      <AboutTitle type={'cake'} />
      <Text>{text}</Text>
    </React.Fragment>
  ) : (
    <p>Loading</p>
  );
};

export default CakeAbout;
