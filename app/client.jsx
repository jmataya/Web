/*
 * This file is the entry point of the application when rendered by the
 * client. It is included in public/index.html.
 */

import React from 'react';
import ReactDom from "react-dom";

import App from './components/App.jsx';

ReactDom.render(<App />, document.getElementById('app'));