import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import minus from './assets/minus-symbol.png'
import plus from './assets/plus.png'

const Button = ({ onPress, icon }) => (
  <TouchableOpacity style={styles.icon} onPress={onPress}>
    <Image source={icon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40
  }
})

export const IncreaseButton = ({ onIncrease }) => (<Button onPress={onIncrease} icon={plus} />)
export const DecreaseButton = ({ onDecrease }) => (<Button onPress={onDecrease} icon={minus} />)
