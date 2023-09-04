import React from 'react';
import {View} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import style from './style';

Mapbox.setAccessToken(
  'MAPBOX_TOKEN',
);

const BirdMap: React.FC = () => (
  <View style={style.page}>
    <View style={style.container}>
      <Mapbox.MapView style={style.map} />
    </View>
  </View>
);

export default BirdMap;
