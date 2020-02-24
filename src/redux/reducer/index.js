import {combineReducers} from 'redux';

import item from './item';

const appReducer = combineReducers({
  item,
});

export default appReducer;
