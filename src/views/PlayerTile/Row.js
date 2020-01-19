import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DecreaseButton, IncreaseButton } from './Buttons';
import MunchkinText from '../Common/MunchkinText';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2
  },
  label: {
    fontSize: 20
  },
  largeLabel: {
    fontSize: 25
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const Row = ({ label, value, onIncrease, onDecrease, size }) => (
  <View style={styles.row}>
    <MunchkinText style={size === 'large' ? styles.largeLabel : styles.label}>
      {label} {value}
    </MunchkinText>
    <View style={styles.buttons}>
      <DecreaseButton onDecrease={onDecrease} />
      <IncreaseButton onIncrease={onIncrease} />
    </View>
  </View>
);

export default Row;
