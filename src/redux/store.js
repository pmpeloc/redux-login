import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const initialState = {};

// punto intermedio
const middleware = [thunk];

const store = createStore(
  // reducer
  reducer,
  // estado inicial
  initialState,
  // config adicionales thunk / dev tools
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
