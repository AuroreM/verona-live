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
    this.props.hydrate();
    this.setLocation();
  }
  onCameraPress = () => this.props.navigation.navigate('camera');

  onCloseModal = () => this.setState({ selectedMarkerTitle: '' });

  renderModal = () => {
    if (this.props.markers.length > 0) {
      const marker = this.props.markers.filter(marker => marker.title === this.state.selectedMarkerTitle)[0];
      if (marker) {
        return (
          <Modal visible={!!this.state.selectedMarkerTitle} onRequestClose={this.onCloseModal}>
            <View style={{ margin: 25 }}>
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>{marker.title}</Text>
                <TouchableOpacity hitSlop={{ bottom: 20, top: 20, right: 20, left: 20 }} onPress={this.onCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.modalPicture}
                source={{
                  uri: `data:image/png;base64,${marker.picture}`,
                }}
              />
            </View>
          </Modal>
        );
      }
    }
  };

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
                onPress={() => this.setState({ selectedMarkerTitle: marker.title })}
                key={marker.title}
              />
            ))}
        </MapView>
        {this.renderModal()}
        <TouchableOpacity onPress={this.onCameraPress} style={styles.button}>
          <Text>Take a picture 📸</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
