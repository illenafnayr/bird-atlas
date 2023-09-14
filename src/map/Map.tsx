import React from 'react';
import { View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import style from './style';
import { MAPBOX_ACCESS_TOKEN } from '@env';

try {
  MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);
  MapboxGL.setTelemetryEnabled(false);
} catch (error) {
  console.error('Error setting mapbox token: ', error);
}

export class BirdMap extends React.Component<{}, {}> {
  render() {
    return (
      <View style={style.page}>
        <View style={style.container}>
          <MapboxGL.MapView
            style={style.map}
            styleURL="mapbox://styles/illenafnayr/clmgc41xb01j101qx1hqib24h"
          />
        </View>
      </View>
    );
  }
}
