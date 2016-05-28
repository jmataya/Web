/*
 * This file is the entry point of the application when rendered by the
 * client. It is included in public/index.html
 */

import React from 'react';
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )

  }
}

ReactDom.render(<App />, document.getElementById('app'));