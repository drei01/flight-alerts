import 'babel-polyfill';
import 'whatwg-fetch';
import './bootstrap.css';

import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

ReactDOM.render(<App />, document.getElementById('app'));
