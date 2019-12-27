import React from 'react';

import './TextContainer.css';

const TextContainer = props => {
  return <p className="text">{props.children}</p>;
};

export default TextContainer;
