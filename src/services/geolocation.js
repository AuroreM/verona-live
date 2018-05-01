// @flow
import Permissions from 'react-native-permissions';

const checkLocationPermission = () => {
  return Permissions.check('location').then(status => {
    switch (status) {
      case 'authorized':
        return true;
      case 'undetermined':
        Permissions.request('location').then(response => response === 'authorized');
      case 'restricted':
      case 'denied':
      default:
        return false;
    }
  });
};

export const getCurrentLocation = () => {
  return checkLocationPermission().then(() => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
  });
};
