// @flow

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Page } from 'veronalive/src/components';

import styles from './List.style';

export default class List extends Component {
  props: PropsType;

  onPress = () => this.props.navigation.goBack();

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to the List page 🏝</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>Take me back to the Homepage 🚂</Text>
          </TouchableOpacity>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
