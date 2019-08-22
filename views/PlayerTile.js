import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Row from './Row'
import PlayerName from './PlayerName'

export default class PlayerTile extends Component {
  constructor (props) {
    super(props)
    this.state = { level: 1, gear: 0 }
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleGearIncrease = this.handleGearIncrease.bind(this)
    this.handleGearDecrease = this.handleGearDecrease.bind(this)
  }

  handleIncrease () {
    if (this.state.level < 10) {
      this.setState({ ...this.state, level: this.state.level + 1 })
    }
  }

  handleDecrease () {
    if (this.state.level > 1) {
      this.setState({ ...this.state, level: this.state.level - 1 })
    }
  }

  handleGearIncrease () {
    this.setState({ ...this.state, gear: this.state.gear + 1 })
  }

  handleGearDecrease () {
    this.setState({ ...this.state, gear: this.state.gear - 1 })
  }

  render () {
    return (
      this.props.player.item === 'new' ? <NewPlayerTile addPlayer={this.props.addPlayer} />
        : (
          <View style={styles.playerTile}>
            <PlayerName index={this.props.player.index} />
            <Row
              label='level'
              value={this.state.level}
              onIncrease={this.handleIncrease}
              onDecrease={this.handleDecrease}
              size='large'
            />
            <Row
              label='gear'
              value={this.state.gear}
              onIncrease={this.handleGearIncrease}
              onDecrease={this.handleGearDecrease}
            />
            <Text style={styles.total}>Total: {this.state.level + this.state.gear}</Text>
          </View>
        )
    )
  }
}

const NewPlayerTile = ({ addPlayer }) => (
  <TouchableOpacity style={styles.playerTile} onPress={addPlayer}>
    <Text style={styles.title}>Add a new player</Text>
  </TouchableOpacity>
)

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
    fontSize: 15,
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
})
