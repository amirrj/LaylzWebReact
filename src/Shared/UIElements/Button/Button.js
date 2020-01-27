import React from 'react';

import './Button.css';

const Button = props => {
  const button = props.displayItems.map(item => {
    const changeActive = () => {
      props.changeActiveHandler(item._id);
    };
    return (
      <span
        key={item._id}
        onClick={changeActive}
        className={item.show ? 'button button--active' : 'button'}
      ></span>
    );
  });

  return <div className={`button-box ${props.className}`}>{button}</div>;
};

export default Button;
