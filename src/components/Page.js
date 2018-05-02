// @flow

import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from 'veronalive/src/theme';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default (props: PropsType) => (
  <View
    style={[
      styles.page,
      {
        backgroundColor: props.backgroundColor,
      },
    ]}
  >
    {props.children}
  </View>
);

type PropsType = {
  children: React$Element<*> | React$Element<*>[],
  noMargin: boolean,
  noNavBar: boolean,
  backgroundColor: string,
};
