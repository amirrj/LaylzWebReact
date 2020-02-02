import React from 'react';
import {
  Mobile,
  Default
} from '../../UIElements/MediaBreakPoints/MediaBreakPoints';

import Sprite from '../../../Assets/Shared/sprite.svg';
import './ServiceTile.css';

const ServiceTile = props => {
  const MobileServices = props.services.map(item => {
    const icon = item.open ? 'minus' : 'plus';

    const openServiceHandler = () => {
      props.onClick(item._id);
    };

    return (
      <div onClick={openServiceHandler} key={item._id} className="serviceTile">
        <div
          style={{
            background: `url(${item.img}) center center no-repeat`,
            backgroundSize: 'cover'
          }}
          className="serviceTile__box"
        >
          <h1 className="serviceTile__box-title">{item.service}</h1>
          <svg className="serviceTile__box-icons">
            <use
              className=" serviceTile__box-icon serviceTile__box-icon--plus"
              xlinkHref={`${Sprite}#icon-${icon}`}
            />
          </svg>
        </div>
        {item.open ? (
          <React.Fragment>
            <p className="serviceTile__text">{item.detail}</p>
            <p className="serviceTile__price">
              Base Price: £{item.price.toFixed(2)}
            </p>
          </React.Fragment>
        ) : null}
      </div>
    );
  });

  const services = props.services.map(service => {
    return (
      <div key={service._id} className="tablet__service__tile">
        <img
          className="tablet__service__tile-image"
          src={service.img}
          alt="laylz services"
        />
        <div className="tablet__service__tile-innerbox">
          <h2 className="tablet__service__tile-title">{service.service}</h2>
          <p className="tablet__service__tile-text">{service.detail}</p>
          <p className="tablet__service__tile-price">
            £ {service.price.toFixed(2)}
          </p>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Mobile>{MobileServices}</Mobile>
      <Default>{services}</Default>
    </React.Fragment>
  );
};

export default ServiceTile;
