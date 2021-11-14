import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import create from './store';
import App from './App';

const store = create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
