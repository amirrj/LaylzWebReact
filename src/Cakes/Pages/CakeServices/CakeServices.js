import React from 'react';
import axios from 'axios';

import HeaderImg from '../../../Assets/Cakes/CakeServices/cakeservices-header.jpg';

import HeaderLogoWrapper from '../../../Shared/UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import ServiceTile from '../../../Shared/Components/ServiceTile/ServiceTile';
import './CakeServices.css';

class CakeServices extends React.Component {
  state = {
    CakeServices: []
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/amirrj/demo/CakeServices')
      .then(res => {
        const CakeServices = res.data;
        this.setState({
          CakeServices
        });
      });
  }

  openServiceHandler = id => {
    const service = this.state.CakeServices.filter(item => id === item.id);
    service['0'].open = !service['0'].open;
    const newServices = this.state.CakeServices;
    this.setState({
      BeautyServices: newServices
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderLogoWrapper darken img={HeaderImg}>
          <h1 className="services__title">
            What Can <br></br> I Do For <br></br> You<br></br>?
          </h1>
        </HeaderLogoWrapper>
        <ServiceTile
          onClick={this.openServiceHandler}
          services={this.state.CakeServices}
        />
      </React.Fragment>
    );
  }
}

export default CakeServices;
