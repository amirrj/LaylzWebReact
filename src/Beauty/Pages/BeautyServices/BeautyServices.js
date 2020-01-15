import React from 'react';
import axios from 'axios';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import HeaderImage from '../../../Assets/Beauty/Services/beautyServices-header.jpg';
import ServiceTile from '../../../Shared/Components/ServiceTile/ServiceTile';
import './BeautyServices.css';

class BeautyServices extends React.Component {
  state = {
    BeautyServices: []
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/amirrj/demo/BeautyServices')
      .then(res => {
        const BeautyServices = res.data;
        this.setState({
          BeautyServices
        });
      });
  }

  openServiceHandler = id => {
    const service = this.state.BeautyServices.filter(item => id === item.id);
    service['0'].open = !service['0'].open;
    const newServices = this.state.BeautyServices;
    this.setState({
      BeautyServices: newServices
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderLogoWrapper darken img={HeaderImage}>
          <h1 className="services__title">
            What Can <br></br> I Do For <br></br> You<br></br>?
          </h1>
        </HeaderLogoWrapper>
        <ServiceTile
          onClick={this.openServiceHandler}
          services={this.state.BeautyServices}
        />
      </React.Fragment>
    );
  }
}

export default BeautyServices;