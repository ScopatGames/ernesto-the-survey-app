import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import { createReduxStore } from './store';
import { Provider } from 'react-redux';

require('./style.css');

// initialize data store
const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('app')
);
