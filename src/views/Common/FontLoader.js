import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import quasimodo from '../../../assets/fonts/quasimodo.ttf';

const FontLoader = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const loadFont = async () => {
    try {
      SplashScreen.preventAutoHide();
      await Font.loadAsync({ quasimodo });
    } finally {
      setFontLoaded(true);
      SplashScreen.hide();
    }
  };
  useEffect(() => {
    loadFont();
  }, []);

  return fontLoaded ? children : null;
};
export default FontLoader;
