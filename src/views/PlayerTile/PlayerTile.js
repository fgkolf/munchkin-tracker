import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import PlayerName from './PlayerName';
import MunchkinText from '../Common/MunchkinText';

const styles = StyleSheet.create({
  playerTile: {
    flex: 0.5,
    flexDirection: 'column',
    height: 210,
    backgroundColor: '#FBDCAE',
    borderRadius: 20,
    margin: 3,
    padding: 3
  },
  total: {
    fontSize: 20
  }
});

const PlayerTile = ({ index }) => {
  const [level, setLevel] = useState(1);
  const [gear, setGear] = useState(0);

  const handleIncrease = () => {
    if (level < 10) {
      setLevel(level + 1);
    }
  };

  const handleDecrease = () => {
    if (level > 1) {
      setLevel(level - 1);
    }
  };

  const handleGearIncrease = () => {
    setGear(gear + 1);
  };

  const handleGearDecrease = () => {
    setGear(gear - 1);
  };

  return (
    <View style={styles.playerTile}>
      <PlayerName index={index} />
      <Row
        label="level"
        value={level}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        size="large"
      />
      <Row
        label="gear"
        value={gear}
        onIncrease={handleGearIncrease}
        onDecrease={handleGearDecrease}
      />
      <MunchkinText style={styles.total}>Total {level + gear}</MunchkinText>
    </View>
  );
};

export default PlayerTile;
