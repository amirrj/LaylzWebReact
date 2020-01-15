import React from 'react';

import HeaderLogoWrapper from '../../UIElements/HeaderLogoWrapper/HeaderLogoWrapper';
import Button from '../../UIElements/Button/Button';

import './SlideShow.css';

const SlideShow = props => {
  let displayItem = props.images.map(images => {
    if (images.show) {
      return (
        <HeaderLogoWrapper
          className={'slideShow__photos'}
          key={images.id}
          img={images.image}
        />
      );
    }

    return null;
  });

  const imageChangeHandler = id => {
    props.imageChangeHandler(id);
  };

  return (
    <React.Fragment>
      <header className={`slideShow ${props.className}`}>
        {displayItem}
        <Button
          changeActiveHandler={imageChangeHandler}
          displayItems={props.images}
        />
      </header>
    </React.Fragment>
  );
};

export default SlideShow;
