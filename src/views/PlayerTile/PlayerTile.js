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

const INITIAL_LEVEL = 1;
const INITIAL_GEAR = 0;

const PlayerTile = ({ index }) => {
  const [level, setLevel] = useState(INITIAL_LEVEL);
  const [gear, setGear] = useState(INITIAL_GEAR);
  const {
    state: { gameStatus },
    dispatch
  } = useContext(store);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.END) {
      setLevel(INITIAL_LEVEL);
      setGear(INITIAL_GEAR);
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
