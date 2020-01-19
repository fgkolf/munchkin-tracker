import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DecreaseButton, IncreaseButton } from './Buttons';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2
  },
  label: {
    color: '#682F28',
    fontSize: 17,
    fontFamily: 'quasimodo'
  },
  largeLabel: {
    color: '#682F28',
    fontSize: 22,
    fontFamily: 'quasimodo'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const Row = ({ label, value, onIncrease, onDecrease, size }) => (
  <View style={styles.row}>
    <Text style={size === 'large' ? styles.largeLabel : styles.label}>
      {label} {value}
    </Text>
    <View style={styles.buttons}>
      <DecreaseButton onDecrease={onDecrease} />
      <IncreaseButton onIncrease={onIncrease} />
    </View>
  </View>
);

export default Row;
