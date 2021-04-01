
import React from 'react';
import { View } from 'react-native';

import Header from './scr/component/Header';
import AlbumList from './scr/component/AlbumList';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header headText={'Albums'} />
      <AlbumList />
    </View>
  );
}
