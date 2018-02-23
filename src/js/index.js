import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App';

const mathInitialState = {
  result: 1,
  lastValues: [],
};

const userInitialState = {
  name: 'Adan',
  age: 25,
};

const mathReducer = (state = mathInitialState, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        result: state.result + action.payload,
        lastValues: state.lastValues.concat(action.payload),
      });
    case 'SUBSTRACT':
      return Object.assign({}, state, {
        result: state.result - action.payload,
        lastValues: state.lastValues.concat(action.payload),
      });
    default:
      return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        name: action.payload,
      });
    case 'SET_AGE':
      return Object.assign({}, state, {
        age: action.payload,
      });
    default:
      return state;
  }
};

// const myLogger = store => next => action => {
//   console.log('Logged Action:', action);
//   next(action);
// };

const reducers = combineReducers({ userReducer, mathReducer });
const store = createStore(reducers, {}, applyMiddleware(createLogger()));

store.subscribe(() => {

});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
