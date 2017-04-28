/**
 * @module reducer
 */
import { combineReducers } from 'redux';
import home from './home';

const reducers = {
  home,
};

export default combineReducers(reducers);

class ReducerStatic {

  constructor() {
    this.home = home;
  }
}
