import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';

import './WorkTile.css';

const WorkTile = props => {
  const tile = props.work.map(item => {
    return (
      <HeaderLogoWrapper
        darken
        to={
          props.type === 'beauty'
            ? `/beauty/work/${item._id}`
            : `/cake/work/${item._id}`
        }
        key={item._id}
        className="work__content"
        img={item.thumbnail}
      >
        <h3 className="work__title">{item.title}</h3>
        <p className="work__text">{item.text}</p>

        <p className="work__date">{item.date}</p>
      </HeaderLogoWrapper>
    );
  });

  return tile;
};

export default WorkTile;
