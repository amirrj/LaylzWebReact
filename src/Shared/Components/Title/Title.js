import React from 'react';

import './Title.css';

const Title = props => {
  const title = props.type === 'beauty' ? 'LaylzBeauty' : 'LaylzCakes';

  return <h1 className="title">{title}</h1>;
};

export default Title;
