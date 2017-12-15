import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import rootReducer from './ducks'

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

let store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
