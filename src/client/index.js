import 'babel-polyfill';
import 'whatwg-fetch';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react-dates-style-overrides.css';
import './bootstrap.css';
import './static/fonts.css';

import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// apply polyfill
if (!window.Intl) {
  window.Intl = intl;
}

ReactDOM.render(<App />, document.getElementById('app'));
