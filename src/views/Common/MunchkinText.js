import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  munchkin: {
    color: '#682F28',
    fontFamily: 'quasimodo'
  }
});

const MunchkinText = ({ children, style }) => (
  <Text style={{ ...styles.munchkin, ...style }}>{children}</Text>
);

MunchkinText.defaultProps = {
  style: {}
};

export default MunchkinText;
