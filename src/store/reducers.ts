// @ts-nocheck
import { combineReducers } from 'redux';

// store
import words from './words/reducer';

const reducers = { words };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
