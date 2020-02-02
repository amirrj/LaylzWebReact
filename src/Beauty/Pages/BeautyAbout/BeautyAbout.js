import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Beauty/beautyAbout-header.jpg';
import LogoAndTitle from '../../../Shared/UIElements/LogoAndTitle/LogoAndTitle';
import AboutTitle from '../../../Shared/Components/AboutTitle/AboutTitle';
import Text from '../../../Shared/UIElements/TextContainer/TextContainer';
import './BeautyAbout.css';

const BeautyAbout = props => {
  const [text, setText] = useState();
  useEffect(() => {
    axios.get('http://localhost:5000/api/beautyabout').then(res => {
      const text = res.data[0].text;
      setText(text);
    });
  }, []);

  return text ? (
    <React.Fragment>
      <HeaderLogoWrapper darken img={HeaderImage}>
        <LogoAndTitle type={'beauty'} />
      </HeaderLogoWrapper>
      <AboutTitle type={'beauty'} />
      <Text>{text}</Text>
    </React.Fragment>
  ) : (
    <p>Loading</p>
  );
};

export default BeautyAbout;
