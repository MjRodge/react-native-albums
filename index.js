//import component creation library
import React from 'react';
import { AppRegistry, View } from 'react-native';

//import components
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

//create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerTitle={'Albums'} />
      <AlbumList />
    </View>
  );
};

//render to device
AppRegistry.registerComponent('RnAlbums', () => App);
