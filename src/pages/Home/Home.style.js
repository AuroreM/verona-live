// @flow

import { StyleSheet, Text, View } from 'react-native';
import theme from 'veronalive/src/theme';

export default StyleSheet.create({
  map: {
    flexGrow: 1,
    alignItems: 'flex-end',
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20,
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalTitle: {
    fontSize: 25,
  },
  modalPicture: { width: 300, height: 450 },
});
