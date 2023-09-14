import React from 'react';
import {SafeAreaView} from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';
import {BirdRecordInput} from '../BirdRecordInput/BirdRecordInput';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={style.sectionContainer}>
      <Logo />
      {/* <BirdMap /> */}
      <BirdRecordInput />
    </SafeAreaView>
  );
};

export default Home;
