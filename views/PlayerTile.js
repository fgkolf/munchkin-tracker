import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Row from './Row';
import PlayerName from './PlayerName';

const styles = StyleSheet.create({
  playerTile: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 3,
    height: 210,
    backgroundColor: '#FBDCAE',
    padding: 3,
    borderRadius: 20
  },
  total: {
    fontSize: 17,
    color: '#682F28',
    fontFamily: 'quasimodo'
  },
  title: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    color: '#682F28',
    fontFamily: 'quasimodo'
  }
});

export default class PlayerTile extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 1, gear: 0 };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleGearIncrease = this.handleGearIncrease.bind(this);
    this.handleGearDecrease = this.handleGearDecrease.bind(this);
  }

  handleIncrease() {
    const { level } = this.state;
    if (level < 10) {
      this.setState(prevState => ({
        ...prevState,
        level: prevState.level + 1
      }));
    }
  }

  handleDecrease() {
    const { level } = this.state;
    if (level > 1) {
      this.setState(prevState => ({
        ...prevState,
        level: prevState.level - 1
      }));
    }
  }

  handleGearIncrease() {
    this.setState(prevState => ({
      ...prevState,
      gear: prevState.gear + 1
    }));
  }

  handleGearDecrease() {
    this.setState(prevState => ({
      ...prevState,
      gear: prevState.gear - 1
    }));
  }

  render() {
    const { player, addPlayer } = this.props;
    const { level, gear } = this.state;
    return player.item === 'new' ? (
      <NewPlayerTile addPlayer={addPlayer} />
    ) : (
      <View style={styles.playerTile}>
        <PlayerName index={player.index} />
        <Row
          label="level"
          value={level}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          size="large"
        />
        <Row
          label="gear"
          value={gear}
          onIncrease={this.handleGearIncrease}
          onDecrease={this.handleGearDecrease}
        />
        <Text style={styles.total}>Total {level + gear}</Text>
      </View>
    );
  }
}

const NewPlayerTile = ({ addPlayer }) => (
  <TouchableOpacity style={styles.playerTile} onPress={addPlayer}>
    <Text style={styles.title}>Add a new player</Text>
  </TouchableOpacity>
);
