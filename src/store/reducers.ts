// @ts-nocheck
import { combineReducers } from 'redux';

// store
import groupedEndpoints from './words/reducer';

const reducers = { groupedEndpoints };

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

export default createRootReducer;
