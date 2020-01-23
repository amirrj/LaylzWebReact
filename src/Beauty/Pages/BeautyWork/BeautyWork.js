import React from 'react';
import axios from 'axios';

import WorkTile from '../../../Shared/Components/WorkTile/WorkTile';
import './BeautyWork.css';

class BeautyWork extends React.Component {
  state = {};

  componentDidMount() {
    axios.get('http://localhost:5000/api/beautywork').then(res => {
      const BeautyWork = res.data;
      this.setState({
        BeautyWork
      });
    });
  }

  render() {
    return this.state.BeautyWork ? (
      <WorkTile type={'beauty'} work={this.state.BeautyWork} />
    ) : (
      <p>Loading</p>
    );
  }
}

export default BeautyWork;
