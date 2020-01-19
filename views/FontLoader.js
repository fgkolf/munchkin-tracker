import { Component } from 'react';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import quasimodo from '../assets/fonts/quasimodo.ttf';

// todo use a hook here
class FontLoader extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
    SplashScreen.preventAutoHide();
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({ quasimodo });
    } finally {
      this.setState({ fontLoaded: true });
      SplashScreen.hide();
    }
  }

  render() {
    const { fontLoaded } = this.state;
    const { children } = this.props;
    return fontLoaded ? children : null;
  }
}

export default FontLoader;
