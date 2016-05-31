/*
 * This file is the entry point of the application when rendered by the
 * client. It is included in public/index.html.
 */

// `reset.css` - we need to make sure this is imported before any other css

// TODO(Steve): this should probably just be a separate stylesheet referenced
// by index.html.  We'd need to have it copied to the public/assets folder as
// part of the build process, and then incorporate some kind of cache-busting
// mechanism (e.g. etags, etc.).  In order to do that our public/index.html
// file needs to be dynamically generated too.
import reset from './styles/reset.css';

import React from 'react';
import ReactDom from 'react-dom';

import App from 'app';
ReactDom.render(<App />, document.getElementById('app'));