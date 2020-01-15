import React from 'react';
import axios from 'axios';

import WorkTile from '../../../Shared/Components/WorkTile/WorkTile';
import './BeautyWork.css';

class BeautyWork extends React.Component {
  state = {
    BeautyWork: []
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/amirrj/demo/BeautyWork')
      .then(res => {
        const BeautyWork = res.data;
        this.setState({
          BeautyWork
        });
      });
  }

  render() {
    return <WorkTile type={'beauty'} work={this.state.BeautyWork} />;
  }
}

export default BeautyWork;
