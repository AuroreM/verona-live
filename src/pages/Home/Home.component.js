// @flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
      const location = { latitude: position.coords.latitude, longitude: position.coords.longitude };
      this.setState(location);
      this.props.setCurrentLocation(location);
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
        >
          {this.props.markers &&
            this.props.markers.map(marker => (
              <Marker
                coordinate={marker.coordinate}
                title={marker.title}
                onSelect={() => this.setState({ selectedMarker: marker.title })}
                key={marker.title}
              />
            ))}
        </MapView>
        {this.props.markers.length > 0 && (
          <Modal visible={!!this.state.selectedMarker}>
            <View style={{ margin: 25 }}>
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>{this.props.markers[0].title}</Text>
                <TouchableOpacity onPress={() => this.setState({ selectedMarker: '' })}>
                  <Text style>Close</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.modalPicture}
                source={{ uri: `data:image/png;base64,${this.props.markers[0].picture}` }}
              />
            </View>
          </Modal>
        )}
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
