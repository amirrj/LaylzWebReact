import React from 'react';
import axios from 'axios';

import TileCakeImg1 from '../../../Assets/Cakes/HomeMenuBg/cake-tile1.jpg';
import TileCakeImg2 from '../../../Assets/Cakes/HomeMenuBg/cake-tile2.jpg';
import TileCakeImg3 from '../../../Assets/Cakes/HomeMenuBg/cake-tile3.jpg';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';
import Tiles from '../../../Shared/Components/Tiles/Tiles';
import Testimonials from '../../../Shared/Components/Testimonial/Testimonials';
import SocialButtons from '../../../Shared/UIElements/SocialButton/SocialButton';
import './CakeHome.css';

class CakeHome extends React.Component {
  state = {
    CakeMenuItems: [
      { id: 'ML1', text: 'About', image: TileCakeImg1 },
      { id: 'ML2', text: 'Work', image: TileCakeImg2 },
      { id: 'ML3', text: 'Services', image: TileCakeImg3 }
    ]
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/cakehome').then(res => {
      const SlideShowImages = res.data[0].SlideShowImages;
      const Testimonials = res.data[0].Testimonials;
      SlideShowImages[0].show = true;
      Testimonials[0].show = true;
      this.setState({
        CakeSlideShowImages: SlideShowImages,
        CakeTestimonials: Testimonials
      });
    });
  }

  changeImageHandler = id => {
    const displayImage = this.state.CakeSlideShowImages.filter(
      image => id === image._id
    );
    displayImage[0].show = true;

    const notDisplayImage = this.state.CakeSlideShowImages.filter(
      image => id !== image._id
    );

    notDisplayImage.map(image => {
      image.show = false;
      return null;
    });

    const newImages = this.state.CakeSlideShowImages;

    this.setState({ CakeImages: newImages });
  };

  changeActiveTestimonialHandler = id => {
    const displayItem = this.state.CakeTestimonials.filter(
      item => item._id === id
    );
    displayItem[0].show = true;

    const notDisplayItem = this.state.CakeTestimonials.filter(
      item => id !== item._id
    );
    notDisplayItem.map(item => {
      item.show = false;
      return null;
    });

    const newTestimonials = this.state.CakeTestimonials;

    this.setState({
      CakeTestimonials: newTestimonials
    });
  };

  render() {
    return !this.state.CakeSlideShowImages || !this.state.CakeTestimonials ? (
      <p>Loading</p>
    ) : (
      <React.Fragment>
        <SlideShow
          imageChangeHandler={this.changeImageHandler}
          images={this.state.CakeSlideShowImages}
        />
        <Tiles tiles={this.state.CakeMenuItems} />
        <Testimonials
          changeActiveTestimonialHandler={this.changeActiveTestimonialHandler}
          testimonials={this.state.CakeTestimonials}
        />
        <SocialButtons />
      </React.Fragment>
    );
  }
}

export default CakeHome;
