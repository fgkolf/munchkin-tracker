import React from 'react';
import { FlatList } from 'react-native';
import PlayerTile from '../PlayerTile/PlayerTile';
import EmptyList from './EmptyList';

const PlayerList = ({ players }) => {
  return (
    <FlatList
      data={players}
      renderItem={({ index }) => <PlayerTile index={index} />}
      numColumns={2} // FIXME when adding or deleting the right in a row, the left seems to re-render to default ?? unsets name
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default PlayerList;
