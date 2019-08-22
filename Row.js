import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DecreaseButton, IncreaseButton } from './Buttons'

const Row = ({ label, value, onIncrease, onDecrease }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}: {value}</Text>
    <View style={styles.buttons}>
      <IncreaseButton onIncrease={onIncrease} />
      <DecreaseButton onDecrease={onDecrease} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: '#682F28',
    fontSize: 20
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default Row
