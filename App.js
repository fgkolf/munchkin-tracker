import React, { Component } from 'react'
import { SplashScreen } from 'expo';
import { FlatList, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import PlayerTile from './views/PlayerTile'
import quasimodo from './assets/fonts/quasimodo.ttf'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: ['player1', 'player2', 'player3', 'player4'],
      fontLoaded: false
    }
    SplashScreen.preventAutoHide()
  }

  async componentDidMount () {
    try {
      await Font.loadAsync({ quasimodo: quasimodo })
    } finally {
      this.setState({ ...this.state, fontLoaded: true })
      SplashScreen.hide()
    }
  }

  render () {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <FlatList
            data={this.state.players}
            renderItem={(player) => (<PlayerTile player={player} />)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : null
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
