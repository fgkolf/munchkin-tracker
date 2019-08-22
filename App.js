import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PlayerTile from './views/PlayerTile'
import FontLoader from './views/FontLoader'
import BottomMenu from './views/BottomMenu'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { players: ['new'] }
    this.addPlayer = this.addPlayer.bind(this)
  }

  addPlayer () {
    const playersLength = this.state.players.length
    this.setState({
      players: [
        ...this.state.players.slice(0, playersLength - 1),
        'player',
        ...this.state.players.slice(playersLength - 1)
      ]
    })
  }

  render () {
    return (
      <FontLoader>
        <View style={styles.container}>
          <FlatList
            data={this.state.players}
            renderItem={(player) => (<PlayerTile player={player} addPlayer={this.addPlayer} />)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {this.state.players.length > 2 && <BottomMenu />}
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
