import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Sidedraw.css';

const Sidedraw = props => {
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames="slide-in"
      mountOnEnter
      unmountOnExit
    >
      <nav className="sidedraw">{props.children}</nav>
    </CSSTransition>
  );
};

export default Sidedraw;
