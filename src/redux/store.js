
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/reducersproduct';

export default createStore(
 combineReducers({
   productReducer,
 }),
 {},
 composeWithDevTools(applyMiddleware(createLogger(), thunk, promise()))
);