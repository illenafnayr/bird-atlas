import React from 'react';
import {View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import style from './style';
import {MAPBOX_ACCESS_TOKEN} from '@env';

try {
  MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);
} catch (error) {
  console.error('ERROR: ', error);
}
const BirdMap: React.FC = () => (
  <View style={style.page}>
    <View style={style.container}>
      <MapboxGL.MapView style={style.map} />
    </View>
  </View>
);

export default BirdMap;
