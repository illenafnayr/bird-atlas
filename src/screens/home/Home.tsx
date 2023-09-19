import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  BirdRecordInput: undefined;
};

interface HomeProps {
  // Define props here
}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('BirdRecordInput');
  };

  return (
    <SafeAreaView style={style.sectionContainer}>
      <Logo />
      <Button
        onPress={handleNavigate}
        title="Navigate Home"
        color="#841584"
        accessibilityLabel="Navigate to home Screen"
      />
    </SafeAreaView>
  );
};

export default Home;
