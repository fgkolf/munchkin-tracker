import React from 'react';
import { FloatingAction } from 'react-native-floating-action';

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

const BottomMenu = ({ addPlayer, removePlayer }) => (
  <FloatingAction
    color="#F3D994"
    actions={actions}
    onPressItem={name => {
      if (name === 'add_player') {
        addPlayer();
      }
      if (name === 'remove_player') {
        removePlayer();
      }
    }}
  />
);

export default BottomMenu;
