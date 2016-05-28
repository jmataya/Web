import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
      </Router>
    )
  }
}

export default App;