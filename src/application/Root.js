import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from './Application';
import configureStore from './configureStore';

/**
 * Created by HieuVP on 11/4/16.
 */
export default class Root extends Component {

  render() {
    return (
      <Provider store={configureStore()}>
        <Application />
      </Provider>
    );
  }
}
