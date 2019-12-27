import React from 'react';

import './FlexContainer.css';

const FlexContainer = props => {
  return (
    <div style={props.style} className={`flex-container ${props.className}`}>
      {props.children}
    </div>
  );
};

export default FlexContainer;
