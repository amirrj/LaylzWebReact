import React from 'react';
import axios from 'axios';

import tileBeautyImg1 from '../../../Assets/Beauty/homeMenuBG/beauty-tile1.jpg';
import tileBeautyImg2 from '../../../Assets/Beauty/homeMenuBG/beauty-tile2.jpg';
import tileBeautyImg3 from '../../../Assets/Beauty/homeMenuBG/beauty-tile3.jpg';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';
import Tiles from '../../../Shared/Components/Tiles/Tiles';
import Testimonials from '../../../Shared/Components/Testimonial/Testimonials';
import SocialButton from '../../../Shared/UIElements/SocialButton/SocialButton';
import FlexContainer from '../../../Shared/UIElements/FlexContainer/FlexContainer';
import InstagramLogo from '../../../Assets/Shared/instagramwhite.png';
import './BeautyHome.css';

class BeautyHome extends React.Component {
  state = {
    BeautySlideShowImages: [],
    beautyMenuItems: [
      { id: 'ML1', text: 'About', image: tileBeautyImg1 },
      { id: 'ML2', text: 'Work', image: tileBeautyImg2 },
      { id: 'ML3', text: 'Services', image: tileBeautyImg3 }
    ],
    BeautyTestimonials: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/beautyhome').then(res => {
      const BeautySlideShowImages = res.data.BeautySlideShow;
      const BeautyTestimonials = res.data.BeautyTestimonials;
      this.setState({
        BeautySlideShowImages: BeautySlideShowImages,
        BeautyTestimonials: BeautyTestimonials
      });
    });
  }

  changeActiveImage = id => {
    const displayImage = this.state.BeautySlideShowImages.filter(
      image => id === image.id
    );
    displayImage[0].show = true;

    const notDisplayImage = this.state.BeautySlideShowImages.filter(
      image => id !== image.id
    );
    notDisplayImage.map(item => {
      item.show = false;
      return null;
    });

    const newBeautyImages = this.state.BeautySlideShowImages;

    this.setState({
      BeautyImages: newBeautyImages
    });
  };

  changeActiveTestimonial = id => {
    const displayItem = this.state.BeautyTestimonials.filter(
      item => id === item.id
    );
    displayItem[0].show = true;

    const notdisplayItem = this.state.BeautyTestimonials.filter(
      item => id !== item.id
    );
    notdisplayItem.map(item => {
      item.show = false;
      return null;
    });

    const newTestimonials = this.state.BeautyTestimonials;

    this.setState({
      BeautyTestimonials: newTestimonials
    });
  };

  render() {
    return this.state.BeautySlideShowImages.length === 0 ||
      this.state.BeautyTestimonials.length === 0 ? (
      <p>Loading</p>
    ) : (
      <React.Fragment>
        <SlideShow
          imageChangeHandler={this.changeActiveImage}
          images={this.state.BeautySlideShowImages}
        />
        <Tiles type={'beauty'} tiles={this.state.beautyMenuItems} />
        <Testimonials
          changeActiveTestimonialHandler={this.changeActiveTestimonial}
          testimonials={this.state.BeautyTestimonials}
        />
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
  }
}

export default BeautyHome;
