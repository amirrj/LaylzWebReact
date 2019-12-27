import React from 'react';
import { Link } from 'react-router-dom';

import beautyImage1 from '../../../Assets/Beauty/homeMenuBG/beauty-tile1.jpg';
import beautyImage2 from '../../../Assets/Beauty/homeMenuBG/beauty-tile2.jpg';
import beautyImage3 from '../../../Assets/Beauty/homeMenuBG/beauty-tile3.jpg';
import cakeImage1 from '../../../Assets/Cakes/HomeMenuBg/cake-tile1.jpg';
import cakeImage2 from '../../../Assets/Cakes/HomeMenuBg/cake-tile2.jpg';
import cakeImage3 from '../../../Assets/Cakes/HomeMenuBg/cake-tile3.jpg';
import './Tiles.css';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beautyMenuItems: [
        { id: 'ML1', text: 'About', image: beautyImage1 },
        { id: 'ML2', text: 'Work', image: beautyImage2 },
        { id: 'ML3', text: 'Services', image: beautyImage3 }
      ],
      cakeMenuItems: [
        { id: 'ML1', text: 'About', image: cakeImage1 },
        { id: 'ML2', text: 'Work', image: cakeImage2 },
        { id: 'ML3', text: 'Services', image: cakeImage3 }
      ]
    };
  }

  render() {
    const menuItem =
      this.props.type === 'beauty'
        ? this.state.beautyMenuItems.map(item => {
            const textSize = [...item.text];
            return (
              <Link
                img={this.props.img}
                key={item.id}
                to={`/beauty/${item.text}`}
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
          })
        : this.state.cakeMenuItems.map(item => {
            const textSize = [...item.text];
            return (
              <Link
                img={this.props.img}
                key={item.id}
                to={`/cake/${item.text}`}
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
  }
}

export default Tiles;
