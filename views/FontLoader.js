import { Component } from 'react'
import * as Font from 'expo-font'
import { SplashScreen } from 'expo'
import quasimodo from '../assets/fonts/quasimodo.ttf'

class FontLoader extends Component {
  constructor (props) {
    super(props)
    this.state = { fontLoaded: false }
    SplashScreen.preventAutoHide()
  }

  async componentDidMount () {
    try {
      await Font.loadAsync({ quasimodo: quasimodo })
    } finally {
      this.setState({ fontLoaded: true })
      SplashScreen.hide()
    }
  }

  render () {
    return (
      this.state.fontLoaded ? this.props.children : null
    )
  }
}

export default FontLoader
