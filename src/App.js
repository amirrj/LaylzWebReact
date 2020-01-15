import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import StarterMenu from './Shared/Pages/StarterMenu/StarterMenu';
import BeautyHome from './Beauty/Pages/BeautyHome/BeautyHome';
import CakeHome from './Cakes/Pages/CakeHome/CakeHome';
import BeautyAbout from './Beauty/Pages/BeautyAbout/BeautyAbout';
import CakeAbout from './Cakes/Pages/CakeAbout/CakeAbout';
import BeautyWork from './Beauty/Pages/BeautyWork/BeautyWork';
import CakeWork from './Cakes/Pages/CakeWork/CakeWork';
import BeautyServices from './Beauty/Pages/BeautyServices/BeautyServices';
import CakeServices from './Cakes/Pages/CakeServices/CakeServices';
import BeautyWorkDetail from './Beauty/Pages/BeautyWorkDetail/BeautyWorkDetail';
// import CakeWorkDetail from './Cakes/Pages/CakeWorkDetail/CakeWorkDetail';

import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StarterMenu />
        </Route>
        <Route path="/beauty/home">
          <Navigation />
          <BeautyHome />
        </Route>
        <Route path="/cake/home">
          <Navigation />
          <CakeHome />
        </Route>
        <Route path="/beauty/about">
          <Navigation />
          <BeautyAbout />
        </Route>
        <Route path="/cake/about">
          <Navigation />
          <CakeAbout />
        </Route>
        <Route path="/beauty/work" exact>
          <Navigation />
          <BeautyWork />
        </Route>
        <Route path="/cake/work" exact>
          <Navigation />
          <CakeWork />
        </Route>
        <Route path="/beauty/work/:id" component={BeautyWorkDetail} />
        {/* <Route path="/cake/work/:id" component={CakeWorkDetail} /> */}
        <Route path="/beauty/services">
          <Navigation />
          <BeautyServices />
        </Route>
        <Route path="/cake/services">
          <Navigation />
          <CakeServices />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
