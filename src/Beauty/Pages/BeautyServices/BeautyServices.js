import React from 'react';
import axios from 'axios';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Beauty/Services/beautyServices-header.jpg';
import ServiceTile from '../../../Shared/Components/ServiceTile/ServiceTile';

import LogoAndTitle from '../../../Shared/UIElements/LogoAndTitle/LogoAndTitle';
import './BeautyServices.css';

class BeautyServices extends React.Component {
  state = {};

  componentDidMount() {
    axios.get('http://localhost:5000/api/beautyservices').then(res => {
      const BeautyServices = res.data;
      this.setState({
        BeautyServices
      });
    });
  }

  openServiceHandler = id => {
    const service = this.state.BeautyServices.filter(item => id === item._id);
    service['0'].open = !service['0'].open;
    const newServices = this.state.BeautyServices;
    this.setState({
      BeautyServices: newServices
    });
  };

  render() {
    return this.state.BeautyServices ? (
      <React.Fragment>
        <HeaderLogoWrapper darken img={HeaderImage}>
          <LogoAndTitle type={'beauty'} title={'services'} text={'scroll down to see some of the services i provide'}/>
        </HeaderLogoWrapper>
        <ServiceTile
          onClick={this.openServiceHandler}
          services={this.state.BeautyServices}
        />
      </React.Fragment>
    ) : (
      <p>loading</p>
    );
  }
}

export default BeautyServices;
