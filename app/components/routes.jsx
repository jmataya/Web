import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Site from 'layout/site';
import Storefront from 'layout/storefront';

import Home from 'pages/home';
import About from 'pages/about';
import Terms from 'pages/terms';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Site}>
          <Route component={Storefront}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="terms" component={Terms}></Route>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default Routes;