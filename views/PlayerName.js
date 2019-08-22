import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'

class PlayerName extends Component {
  constructor (props) {
    super(props)
    this.state = { editMode: false, name: `Player${this.props.index}` }
    this.handleEndEditing = this.handleEndEditing.bind(this)
    this.handleLongPress = this.handleLongPress.bind(this)
  }

  handleEndEditing ({ nativeEvent }) {
    this.setState({ editMode: false, name: nativeEvent.text })
  }

  handleLongPress () {
    this.setState({ editMode: true })
  }

  render () {
    return (
      this.state.editMode
        ? <TextInput style={styles.title} autoFocus onEndEditing={this.handleEndEditing} />
        : (
          <TouchableOpacity onLongPress={this.handleLongPress}>
            <Text style={styles.title}>{this.state.name}</Text>
          </TouchableOpacity>
        )
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    color: '#682F28',
    fontFamily: 'quasimodo'
  }
})

export default PlayerName
