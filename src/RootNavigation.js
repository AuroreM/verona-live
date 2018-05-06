// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { View, Text } from 'react-native';
import * as Pages from 'veronalive/src/pages';
import { navListener } from 'veronalive/src/modules/Nav/module';

export const AppNavigator = StackNavigator(
  {
    home: {
      screen: Pages.Home,
    },
    camera: {
      screen: Pages.Camera,
    },
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  }
);

class App extends React.Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: navListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
