// @flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Page } from 'veronalive/src/components';

import styles from './Home.style';

export default class Home extends Component {
  props: PropsType;

  onPress = () => this.props.navigation.navigate('list');

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to the Homepage 🏔</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>Go to the list page 🚀</Text>
          </TouchableOpacity>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
