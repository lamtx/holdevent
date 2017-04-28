import { AsyncStorage } from 'react-native';
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {
  persistStore,
  autoRehydrate
} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import reducers from '../reducer';
import * as Configuration from './Configuration';

/**
 * Created by HieuVP on 11/4/16.
 */
const logger = createLogger({
  predicate: () => Configuration.isLoggable && Configuration.isDebuggable,
  collapsed: true,
  duration: true,
});

const middlewares = compose(applyMiddleware(thunk, logger), autoRehydrate());

export default function configureStore() {
  const store = createStore(reducers, undefined, middlewares);
  if (Configuration.isDebuggable) {
    persistStore(store, {storage: AsyncStorage, transforms: [immutableTransform()]});
  }
  return store;
}
