import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import GAME_STATUS from './constants';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#682F28'
  }
});

const BottomMenu = ({ gameStatus, startGame, endGame }) => (
  <View style={styles.btn}>
    {gameStatus === GAME_STATUS.END && (
      <Button onPress={startGame} title="Begin Game" />
    )}
    {gameStatus === GAME_STATUS.START && (
      <Button onPress={endGame} color="red" title="End Game" />
    )}
  </View>
);

export default BottomMenu;
