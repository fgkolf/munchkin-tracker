import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import minus from '../../../assets/minus.png';
import plus from '../../../assets/plus.png';

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    marginLeft: 2
  }
});

const Button = ({ onPress, icon }) => (
  <TouchableOpacity style={styles.icon} onPress={onPress}>
    <Image source={icon} />
  </TouchableOpacity>
);

export const IncreaseButton = ({ onIncrease }) => (
  <Button onPress={onIncrease} icon={plus} />
);
export const DecreaseButton = ({ onDecrease }) => (
  <Button onPress={onDecrease} icon={minus} />
);
