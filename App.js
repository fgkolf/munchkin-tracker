import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PlayerTile from './PlayerTile'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: ['player1', 'player2', 'player3', 'player4', 'player5']
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.players}
          renderItem={(player) => (<PlayerTile player={player} />)}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
