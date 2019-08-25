import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PlayerTile from './views/PlayerTile'
import FontLoader from './views/FontLoader'
import BottomMenu from './views/BottomMenu'
import GAME_STATUS from './views/constants'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { players: ['new'], gameStatus: GAME_STATUS.END }
    this.addPlayer = this.addPlayer.bind(this)
    this.startGame = this.startGame.bind(this)
    this.endGame = this.endGame.bind(this)
  }

  addPlayer () {
    const playersLength = this.state.players.length
    this.setState({
      ...this.state,
      players: [
        ...this.state.players.slice(0, playersLength - 1),
        'player',
        ...this.state.players.slice(playersLength - 1)
      ]
    })
  }

  startGame () {
    const playersLength = this.state.players.length
    this.setState({ players: this.state.players.slice(0, playersLength - 1), gameStatus: GAME_STATUS.START })
  }

  endGame () {
    this.setState({ players: [...this.state.players, 'new'], gameStatus: GAME_STATUS.END })
  }

  render () {
    const { players, gameStatus } = this.state
    return (
      <FontLoader>
        <View style={styles.container}>
          <FlatList
            data={players}
            renderItem={(player) => (<PlayerTile player={player} addPlayer={this.addPlayer} gameStatus={gameStatus} />)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {players.length > 1 &&
          <BottomMenu
            gameStatus={gameStatus}
            startGame={this.startGame}
            endGame={this.endGame}
          />}
      </FontLoader>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#682F28'
  }
})
