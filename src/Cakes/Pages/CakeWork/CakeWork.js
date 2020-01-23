import React from 'react';
import axios from 'axios';

import WorkTile from '../../../Shared/Components/WorkTile/WorkTile';
import './CakeWork.css';

class CakeWork extends React.Component {
  state = {};

  componentDidMount() {
    axios.get('http://localhost:5000/api/cakework').then(res => {
      const CakeWork = res.data;
      this.setState({ CakeWork });
    });
  }

  render() {
    return this.state.CakeWork ? (
      <WorkTile work={this.state.CakeWork} />
    ) : (
      <p>Loading</p>
    );
  }
}

export default CakeWork;
