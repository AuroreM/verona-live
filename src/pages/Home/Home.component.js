// @flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import { Page } from 'veronalive/src/components';
import { getCurrentLocation } from 'veronalive/src/services/geolocation';

import styles from './Home.style';

export default class Home extends Component {
  props: PropsType;
  constructor(props) {
    super(props);
    this.state = {};
  }

  setLocation = () => {
    return getCurrentLocation().then(position => {
      this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    });
  };
  componentDidMount() {
    this.setLocation();
  }
  onListPress = () => this.props.navigation.navigate('list');
  onCameraPress = () => this.props.navigation.navigate('camera');
  render() {
    return (
      <Page>
        <MapView
          style={styles.map}
          initialRegion={
            this.state.latitude &&
            this.state.longitude && {
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.09,
              longitudeDelta: 0.05,
            }
          }
          showsUserLocation
        />
        <TouchableOpacity onPress={this.onCameraPress} style={styles.button}>
          <Text>Take a picture 📸</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onListPress} style={styles.button}>
          <Text>Go to the list page 🚀</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
