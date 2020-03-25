import React, { useContext } from 'react';
import { FloatingAction } from 'react-native-floating-action';
import { store, endGameAction } from '../../store/store';

const actions = [
  {
    text: 'Reset Game',
    name: 'reset_game',
    color: '#F3D994'
  },
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
  const { dispatch } = useContext(store);

  return (
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
        if (name === 'reset_game') {
          dispatch(endGameAction());
        }
      }}
    />
  );
};

export default BottomMenu;
