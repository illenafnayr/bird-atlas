import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const HelloBird: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>Hello, Bird!</Text>
    </View>
  );
};

export default HelloBird;
