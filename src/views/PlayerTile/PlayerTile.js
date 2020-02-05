import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './Row';
import PlayerName from './PlayerName';
import MunchkinText from '../Common/MunchkinText';
import { store, startGameAction } from '../../store/store';
import GAME_STATUS from '../../common/constants';

const styles = StyleSheet.create({
  playerTile: {
    flex: 0.5,
    flexDirection: 'column',
    height: 210,
    backgroundColor: '#F3D994',
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
  const {
    state: { gameStatus },
    dispatch
  } = useContext(store);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.END) {
      setLevel(0);
      setGear(0);
      dispatch(startGameAction());
    }
  }, [gameStatus]);

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
      <PlayerName index={index} level={level} />
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
