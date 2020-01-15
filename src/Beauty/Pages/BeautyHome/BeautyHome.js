import React from 'react';

import SlideShowBeautyImg1 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img1.jpg';
import SlideShowBeautyImg2 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img2.jpg';
import SlideShowBeautyImg3 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img3.jpg';
import SlideShowBeautyImg4 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img4.jpg';

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
    BeautySlideShowImages: [
      { id: 'BI1', image: SlideShowBeautyImg1, show: true },
      { id: 'BI2', image: SlideShowBeautyImg2, show: false },
      { id: 'BI3', image: SlideShowBeautyImg3, show: false },
      { id: 'BI4', image: SlideShowBeautyImg4, show: false }
    ],
    beautyMenuItems: [
      { id: 'ML1', text: 'About', image: tileBeautyImg1 },
      { id: 'ML2', text: 'Work', image: tileBeautyImg2 },
      { id: 'ML3', text: 'Services', image: tileBeautyImg3 }
    ],
    BeautyTestimonials: [
      {
        id: 'BT1',
        author: 'Person1',
        text: 'Lorem ipsum dolor sit amet.',
        show: true
      },
      {
        id: 'BT2',
        author: 'Person2',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
        show: false
      },
      {
        id: 'BT3',
        author: 'Person3',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
        show: false
      }
    ]
  };

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
    return (
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
