import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';

import './WorkTile.css';

const WorkTile = props => {
  const tile = props.work.map(item => {
    return (
      <HeaderLogoWrapper
        to={
          props.type === 'beauty'
            ? `/beauty/work/${item.id}`
            : `/cake/work/${item.id}`
        }
        key={item.id}
        className="work__content"
        darken
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
