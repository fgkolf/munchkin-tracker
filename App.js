import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlayerList from './src/views/PlayerList/PlayerList';
import FontLoader from './src/views/Common/FontLoader';
import BottomMenu from './src/views/Menu/BottomMenu';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#682F28'
  }
});

const INITIAL_PLAYERS = 4;

const App = () => {
  const [players, setPlayers] = useState(Array(INITIAL_PLAYERS).fill('player'));

  const addPlayer = () => {
    setPlayers([...players, 'player']);
  };

  const removePlayer = () => {
    setPlayers(players.slice(0, players.length - 1));
  };

  return (
    <FontLoader>
      <View style={styles.container}>
        <PlayerList players={players} />
        <BottomMenu addPlayer={addPlayer} removePlayer={removePlayer} />
      </View>
    </FontLoader>
  );
};

export default App;
