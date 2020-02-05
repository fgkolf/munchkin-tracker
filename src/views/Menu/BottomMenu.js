import React, { useState } from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const styles = StyleSheet.create({
  toggler: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 0,
    backgroundColor: '#F3D994'
  }
});

const actions = [
  {
    text: 'Add Player',
    name: 'add_player',
    color: '#F3D994'
  },
  {
    text: 'Remove Player',
    name: 'remove_player',
    color: '#F3D994'
  }
];

const BottomMenu = ({ addPlayer, removePlayer }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <TouchableOpacity
        style={styles.toggler}
        onPress={() => setVisible(!visible)}
      >
        <Text>toggle</Text>
      </TouchableOpacity>
      <FloatingAction
        color="#F3D994"
        actions={actions}
        visible={visible}
        onPressItem={name => {
          if (name === 'add_player') {
            addPlayer();
          }
          if (name === 'remove_player') {
            removePlayer();
          }
        }}
      />
    </>
  );
};

export default BottomMenu;
