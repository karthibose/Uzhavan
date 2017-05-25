import { combineReducers } from 'redux';
import feeds from './feeds';
import loader from './loader';

const reducer = combineReducers({
  feeds,
  loader
})

export default reducer;