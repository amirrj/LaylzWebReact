import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StarterMenu from './Shared/Pages/StarterMenu/StarterMenu';
import BeautyHome from './Beauty/Pages/BeautyHome/BeautyHome';
import CakeHome from './Cakes/Pages/CakeHome/CakeHome';
import BeautyAbout from './Beauty/Pages/BeautyAbout/BeautyAbout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StarterMenu />
        </Route>
        <Route path="/beauty/home">
          <BeautyHome />
        </Route>
        <Route path="/cake/home">
          <CakeHome />
        </Route>
        <Route path="/beauty/about">
          <BeautyAbout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
