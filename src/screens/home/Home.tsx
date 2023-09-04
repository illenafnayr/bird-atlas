import React from 'react';
import {SafeAreaView} from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';
import BirdMap from '../../map/Map';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={style.sectionContainer}>
      <Logo />
      <BirdMap />
    </SafeAreaView>
  );
};

export default Home;
