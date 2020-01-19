import React from 'react';
import { View, Button } from 'react-native';

const BottomMenu = ({ addPlayer, removePlayer }) => (
  <View>
    <Button color="green" onPress={addPlayer} title="Add Player" />
    <Button color="red" onPress={removePlayer} title="Remove Player" />
  </View>
);

export default BottomMenu;
