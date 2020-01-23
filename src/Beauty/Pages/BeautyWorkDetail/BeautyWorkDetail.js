import React from 'react';
import axios from 'axios';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';
import Navigation from '../../../Navigation/Navigation';

import './BeautyWorkDetail.css';

class BeautyWorkDetail extends React.Component {
  state = {};

  imageChangeHandler = id => {
    const displayItem = this.state.work.images.filter(item => id === item.id);
    displayItem[0].show = true;
    const notDisplayItem = this.state.work.images.filter(
      item => id !== item.id
    );
    notDisplayItem.map(item => {
      item.show = false;
      return null;
    });
    const work = this.state.work;
    this.setState({ work });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/beautywork/${this.props.match.params.id}`)
      .then(res => {
        const work = res.data;
        this.setState({ work });
      });
  }

  render() {
    return this.state.work ? (
      <React.Fragment>
        <Navigation />
        <SlideShow
          className={'slideShow__work__detail'}
          images={this.state.work.images}
          imageChangeHandler={this.imageChangeHandler}
        />
        <h1 className="work__detail-title">{this.state.work.title}</h1>
        <p className="work__detail-text">{this.state.work.description}</p>
      </React.Fragment>
    ) : (
      <p>Loading</p>
    );
  }
}

export default BeautyWorkDetail;
