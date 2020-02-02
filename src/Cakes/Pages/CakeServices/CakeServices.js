import React from 'react';
import axios from 'axios';

import HeaderImg from '../../../Assets/Cakes/CakeServices/cakeservices-header.jpg';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import ServiceTile from '../../../Shared/Components/ServiceTile/ServiceTile';

import LogoAndTitle from '../../../Shared/UIElements/LogoAndTitle/LogoAndTitle';
import './CakeServices.css';

class CakeServices extends React.Component {
  state = {};

  componentDidMount() {
    axios.get('http://localhost:5000/api/cakeservices').then(res => {
      const CakeServices = res.data;
      this.setState({
        CakeServices
      });
    });
  }

  openServiceHandler = id => {
    const service = this.state.CakeServices.filter(item => id === item._id);
    service['0'].open = !service['0'].open;
    const newServices = this.state.CakeServices;
    this.setState({
      BeautyServices: newServices
    });
  };

  render() {
    return this.state.CakeServices ? (
      <React.Fragment>
        <HeaderLogoWrapper darken img={HeaderImg}>
          <LogoAndTitle
            type={'cake'}
            title={'Services'}
            text={'What can i do for you?'}
          />
        </HeaderLogoWrapper>
        <ServiceTile
          onClick={this.openServiceHandler}
          services={this.state.CakeServices}
        />
      </React.Fragment>
    ) : (
      <p>loading</p>
    );
  }
}

export default CakeServices;
