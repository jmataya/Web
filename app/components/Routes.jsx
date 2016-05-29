import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Site from './layout/Site.jsx';
import Storefront from './layout/Storefront.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Terms from './pages/Terms.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Site }>
          <Route component={ Storefront }>
            <IndexRoute component={ Home }></IndexRoute>
            <Route path="about" component={ About }></Route>
            <Route path="terms" component={ Terms }></Route>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default Routes;