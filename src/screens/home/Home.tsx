import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type HomeStackParamList = {
  CreateAccount: undefined;
};

interface HomeProps {
  // Define props here
}

const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  const navigateToAccountLogin = () => {
    console.log('Navigate to Account Login');
    // navigation.navigate('AccountLogin');
  };

  const navigateToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <SafeAreaView style={style.sectionContainer}>
      <Logo />
      <Button
        onPress={navigateToAccountLogin}
        title="Log In"
        color="#841584"
        accessibilityLabel="Log In"
      />
      <Button
        onPress={navigateToCreateAccount}
        title="Create Account"
        color="#841584"
        accessibilityLabel="Create Account"
      />
    </SafeAreaView>
  );
};

export default Home;
