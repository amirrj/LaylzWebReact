import React from 'react';

import CakeWorkImg1 from '../../../Assets/Cakes/cake-work-img1.jpg';
import CakeWorkImg2 from '../../../Assets/Cakes/cake-work-img2.jpg';

import WorkTile from '../../../Shared/Components/WorkTile/WorkTile';
import './CakeWork.css';

class CakeWork extends React.Component {
  state = {
    CakeWork: [
      {
        id: 'cw1',
        title: 'Baby Shower',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.',
        date: 'OCT.8, 2019',
        thumbnail: CakeWorkImg1
      },
      {
        id: 'cw2',
        title: 'Birthday Party',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.',
        date: 'OCT.8, 2019',
        thumbnail: CakeWorkImg2
      }
    ]
  };

  render() {
    return <WorkTile work={this.state.CakeWork} />;
  }
}

export default CakeWork;
