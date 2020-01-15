import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Beauty/beautyAbout-header.jpg';
import Logo from '../../../Shared/Components/Logo/Logo';
import Title from '../../../Shared/Components/Title/Title';
import AboutTitle from '../../../Shared/Components/AboutTitle/AboutTitle';
import Text from '../../../Shared/UIElements/TextContainer/TextContainer';
import './BeautyAbout.css';

const BeautyAbout = props => {
  const [text, setText] = useState('');
  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/amirrj/demo/BeautyAbout')
      .then(res => {
        const text = res.data.text;
        setText(text);
      });
  }, []);

  return (
    <React.Fragment>
      <HeaderLogoWrapper darken img={HeaderImage}>
        <Logo type={'beauty'} />
        <Title type={'beauty'} />
      </HeaderLogoWrapper>
      <AboutTitle type={'beauty'} />
      <Text>{text}</Text>
    </React.Fragment>
  );
};

export default BeautyAbout;
