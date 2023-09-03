import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import Logo from '../common/logo/Logo';

const Home: React.FC = () => {
  return (
    <View style={style.sectionContainer}>
      <Logo />
      <Text style={style.titleText}>asdf</Text>
    </View>
  );
};

export default Home;
