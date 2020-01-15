import React from 'react';
import { Link } from 'react-router-dom';

import './Tiles.css';

const Tiles = props => {
  const menuItem = props.tiles.map(item => {
    const textSize = [...item.text];
    return (
      <Link
        key={item.id}
        to={
          props.type === 'beauty'
            ? `/beauty/${item.text}`
            : `/cake/${item.text}`
        }
        className="tile"
        style={{
          background: `url(${item.image}) center center no-repeat`,
          backgroundSize: 'cover'
        }}
      >
        <div className="tile__text-box">
          <h2
            className={
              textSize.length <= 5
                ? 'tile__text'
                : 'tile__text tile__text-shrink'
            }
          >
            {item.text}
          </h2>
        </div>
      </Link>
    );
  });

  return <React.Fragment>{menuItem}</React.Fragment>;
};

export default Tiles;
