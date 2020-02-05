import React from 'react';
import { StyleSheet } from 'react-native';
import MunchkinText from '../Common/MunchkinText';

const styles = StyleSheet.create({
  empty: {
    color: '#F3D994',
    fontSize: 25
  }
});

const EmptyList = () => (
  <MunchkinText style={styles.empty}>
    You can&apos;t play Munchkin like this.{'\n'}
    Add some players first!
  </MunchkinText>
);

export default EmptyList;
