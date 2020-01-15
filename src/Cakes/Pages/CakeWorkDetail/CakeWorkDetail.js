import React from 'react';
import axios from 'axios';

import SlideShow from '../../../Shared/Components/SlideShow/SlideShow';

import './CakeWorkDetail.css';

class CakeWorkDetail extends React.Component {
  state = {
    work: []
  };

  componentDidMount() {
    axios
      .get(
        `https://my-json-server.typicode.com/amirrj/demo/cakework/${this.props.match.params.id}`
      )
      .then(res => {
        const work = res.data;
        this.setState({ work });
      });
  }

  render() {
    return this.state.work.images ? (
      <SlideShow
        images={this.state.work.images}
        className="slideShow__work__detail"
      />
    ) : (
      <p>loading</p>
    );
  }
}

export default CakeWorkDetail;
