import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import Root from './containers/Root';
import reducer from './reducers'
import './index.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
);
