import React from 'react';

import Sprite from '../../../Assets/Shared/sprite.svg';
import './ServiceTile.css';

const ServiceTile = props => {
  const services = props.services.map(item => {
    const icon = item.open ? 'minus' : 'plus';

    const openServiceHandler = () => {
      props.onClick(item.id);
    };

    return (
      <div onClick={openServiceHandler} key={item.id} className="serviceTile">
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

  return services;
};

export default ServiceTile;
