// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from 'veronalive/src/modules/store';
import RootNavigation from './RootNavigation';

const store = createStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
