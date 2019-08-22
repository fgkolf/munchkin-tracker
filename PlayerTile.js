import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Row from './Row'

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
      <View style={styles.playerTile}>
        <Text style={styles.title}>{this.props.player.item}</Text>
        <Row
          label='level'
          value={this.state.level}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
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
  }
}

const styles = StyleSheet.create({
  playerTile: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 3,
    height: 200,
    backgroundColor: '#FBDCAE',
    padding: 3,
    borderRadius: 20
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    color: '#682F28'
  },
  total: {
    fontSize: 18,
    color: '#682F28'
  }
})
