import React from 'react';
import axios from 'axios';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';
import Navigation from '../../../Navigation/Navigation';

import './CakeWorkDetail.css';

class CakeWorkDetail extends React.Component {
  state = {};

  imageChangeHandler = id => {
    const displayImage = this.state.work.images.filter(item => item.id === id);
    displayImage[0].show = true;
    const notDisplayItem = this.state.work.images.filter(
      item => item.id !== id
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
      .get(`http://localhost:5000/api/cakework/${this.props.match.params.id}`)
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
          imageChangeHandler={this.imageChangeHandler}
          images={this.state.work.images}
          className="slideShow__work__detail"
        />
        <h1 className="work__detail-title">{this.state.work.title}</h1>
        <p className="work__detail-text">{this.state.work.description}</p>
      </React.Fragment>
    ) : (
      <p>loading</p>
    );
  }
}

export default CakeWorkDetail;
