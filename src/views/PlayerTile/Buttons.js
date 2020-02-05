import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MunchkinText from '../Common/MunchkinText';

const styles = StyleSheet.create({
  wrapper: {
    width: 32,
    height: 32,
    marginLeft: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#682F28'
  },
  iconBtn: {
    fontSize: 55
  }
});

const Button = ({ onPress, icon }) => (
  <TouchableOpacity style={styles.wrapper} onPress={onPress}>
    <MunchkinText style={styles.iconBtn}>{icon}</MunchkinText>
  </TouchableOpacity>
);

export const IncreaseButton = ({ onIncrease }) => (
  <Button onPress={onIncrease} icon="+" />
);
export const DecreaseButton = ({ onDecrease }) => (
  <Button onPress={onDecrease} icon="-" />
);
