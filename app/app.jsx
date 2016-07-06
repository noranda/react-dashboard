import React from 'npm:react';
import ReactDOM from 'npm:react-dom';
import ReactRedux from 'npm:react-redux';
import Redux from 'npm:redux';

import App from './components/app';
import reducers from './reducers';

const { Provider } = ReactRedux;
const { createStore, applyMiddleware } = Redux;
const createStoreWithMiddleware = applyMiddleware()(createStore);

export default {
  create() {
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
      , document.getElementById('app')
    );
  }
};
