import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import MunchkinText from '../Common/MunchkinText';
import { store, endGameAction } from '../../store/store';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FBDCAE',
    padding: 22,
    borderRadius: 15
  },
  contentTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 12
  },
  btnWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  contentBtn: {
    backgroundColor: '#682F28',
    color: '#FBDCAE',
    fontSize: 20,
    padding: 10,
    borderRadius: 15
  }
});

const EndGameModal = ({ name }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { dispatch } = useContext(store);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const resetGame = () => {
    toggleModal();
    dispatch(endGameAction());
  };

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['right', 'left']}
      onSwipeComplete={() => setIsVisible(false)}
      backdropColor="#B4B3DB"
      backdropOpacity={0.6}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      hideModalContentWhileAnimating
    >
      <View style={styles.content}>
        <MunchkinText style={styles.contentTitle}>
          Well done {name}, you won!
        </MunchkinText>
        <View style={styles.btnWrap}>
          <TouchableOpacity onPress={toggleModal}>
            <MunchkinText style={styles.contentBtn}>No wait!</MunchkinText>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetGame}>
            <MunchkinText style={styles.contentBtn}>Reset Game</MunchkinText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EndGameModal;
