import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Header from './scr/component/Header';

export default function App() {
  return (
    <View>
      <Header headText={'Albums'} />
      <StatusBar style="auto" />
    </View>
  );
}

