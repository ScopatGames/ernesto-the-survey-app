import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { createReduxStore } from './store';

require('./style.css');

// initialize data store
const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('app')
);
