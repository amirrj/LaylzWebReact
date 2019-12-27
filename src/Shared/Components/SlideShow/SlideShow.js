import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import Button from '../../UIElements/Button/Button';

import SlideShowBeautyImg1 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img1.jpg';
import SlideShowBeautyImg2 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img2.jpg';
import SlideShowBeautyImg3 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img3.jpg';
import SlideShowBeautyImg4 from '../../../Assets/Beauty/Slideshow-img/slideshow-beauty-img4.jpg';
import SlideShowCakeImg1 from '../../../Assets/Cakes/SlideShow-img/slideshow-cake-img1.jpg';
import SlideShowCakeImg2 from '../../../Assets/Cakes/SlideShow-img/slideshow-cake-img2.jpg';
import SlideShowCakeImg3 from '../../../Assets/Cakes/SlideShow-img/slideshow-cake-img3.jpg';
import SlideShowCakeImg4 from '../../../Assets/Cakes/SlideShow-img/slideshow-cake-img4.jpg';

import './SlideShow.css';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BeautyImages: [
        { id: 'BI1', image: SlideShowBeautyImg1, show: true },
        { id: 'BI2', image: SlideShowBeautyImg2, show: false },
        { id: 'BI3', image: SlideShowBeautyImg3, show: false },
        { id: 'BI4', image: SlideShowBeautyImg4, show: false }
      ],
      CakeImages: [
        { id: 'CI1', image: SlideShowCakeImg1, show: true },
        { id: 'CI2', image: SlideShowCakeImg2, show: false },
        { id: 'CI3', image: SlideShowCakeImg3, show: false },
        { id: 'CI4', image: SlideShowCakeImg4, show: false }
      ]
    };
  }

  makeImageActiveHandler = id => {
    const displayImage =
      this.props.type === 'beauty'
        ? this.state.BeautyImages.filter(image => image.id === id)
        : this.state.CakeImages.filter(image => image.id === id);
    const notDisplayImage =
      this.props.type === 'beauty'
        ? this.state.BeautyImages.filter(image => image.id !== id)
        : this.state.CakeImages.filter(image => image.id !== id);

    notDisplayImage.map(image => {
      image.show = false;
      return null;
    });
    displayImage[0].show = true;
    const newBeautyImages = this.state.BeautyImages;
    const newCakeImages = this.state.CakeImages;
    this.setState({ BeautyImages: newBeautyImages, CakeImages: newCakeImages });
  };

  render() {
    const beautyImages = this.state.BeautyImages.map(images => {
      if (images.show) {
        return (
          <HeaderLogoWrapper
            className="slideShow__photos"
            key={images.id}
            img={images.image}
          />
        );
      }

      return null;
    });

    const cakeImages = this.state.CakeImages.map(images => {
      if (images.show) {
        return (
          <HeaderLogoWrapper
            className="slideShow__photos"
            key={images.id}
            img={images.image}
          />
        );
      }

      return null;
    });

    const displayItems =
      this.props.type === 'beauty'
        ? this.state.BeautyImages
        : this.state.CakeImages;

    return (
      <React.Fragment>
        <header className="slideShow">
          {this.props.type === 'beauty' ? beautyImages : cakeImages}
          <Button
            changeActiveHandler={this.makeImageActiveHandler}
            displayItems={displayItems}
          />
        </header>
      </React.Fragment>
    );
  }
}

export default SlideShow;
