import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({ userReducer, mathReducer });
// const myLogger = store => next => action => {
//   console.log('Logged Action:', action);
//   next(action);
// };
const store = createStore(reducers, {}, applyMiddleware(createLogger(), promise()));
export default store;
