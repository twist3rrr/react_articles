import { combineReducers } from 'redux';
import counter from './counter';
import articles from './articles';
import filtering from './filtering';

export default combineReducers({
  counter,
  articles,
  filtering
});
