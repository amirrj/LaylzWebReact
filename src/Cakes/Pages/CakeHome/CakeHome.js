import React from 'react';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';
import Tiles from '../../../Shared/Components/Tiles/Tiles';
import Testimonials from '../../../Shared/Components/Testimonial/Testimonials';
import FlexContainer from '../../../Shared/UIElements/FlexContainer/FlexContainer';
import SocialButton from '../../../Shared/UIElements/SocialButton/SocialButton';
import InstagramLogo from '../../../Assets/Shared/instagramwhite.png';
import './CakeHome.css';

const CakeHome = props => {
  return (
    <React.Fragment>
      <SlideShow type={'cake'} />
      <Tiles type={'cake'} />
      <Testimonials type={'cake'} />
      <FlexContainer
        style={{ padding: '2rem' }}
        className={'flex-container--sb'}
      >
        <SocialButton>
          <img
            className="logo__instagram"
            src={InstagramLogo}
            alt="laylz beauty instagram logo"
          />
        </SocialButton>
        <SocialButton>
          <p className="text__contact">Contact</p>
        </SocialButton>
      </FlexContainer>
    </React.Fragment>
  );
};

export default CakeHome;
