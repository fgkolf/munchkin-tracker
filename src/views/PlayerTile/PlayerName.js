import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  TextInput,
  Easing
} from 'react-native';
import EndGameModal from './EndGameModal';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    color: '#682F28',
    fontFamily: 'quasimodo' // todo check if MunchkinText can be used as Animated custom stateless component
  }
});

const BlinkingText = ({ children, stopBlinking }) => {
  const [opacity] = useState(new Animated.Value(1));
  useEffect(() => {
    if (!stopBlinking) {
      const anim = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 1000,
            easing: Easing.inOut(Easing.ease)
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease)
          })
        ])
      );
      anim.start();
    }
  });
  return (
    <Animated.Text style={{ ...styles.title, opacity }}>
      {children}
    </Animated.Text>
  );
};

const PlayerName = ({ index, level }) => {
  const DEFAULT_NAME = `Player ${index + 1}`;
  const [name, setName] = useState(DEFAULT_NAME);
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(false);

  const handleEndEditing = ({ nativeEvent }) => {
    setName(nativeEvent.text || DEFAULT_NAME);
    setEditMode(false);
  };

  const handleLongPress = () => {
    setEditMode(true);
    setEdited(true);
  };

  return (
    <>
      {editMode ? (
        <TextInput
          style={styles.title}
          autoFocus
          onEndEditing={handleEndEditing}
        />
      ) : (
        <TouchableOpacity onLongPress={handleLongPress}>
          <BlinkingText stopBlinking={edited}>{name}</BlinkingText>
        </TouchableOpacity>
      )}
      {level > 9 && <EndGameModal name={name} />}
    </>
  );
};

export default PlayerName;
