import React, { Component } from 'react';
import { Button, SafeAreaView } from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  BirdRecordInput: undefined;
};

interface HomeProps {
  // Define any props that your Home component should receive here
}

export default class Home extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  handleNavigate = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Navigate to the 'BirdRecordInput' screen
    navigation.navigate('BirdRecordInput');
  };

  render() {
    return (
      <SafeAreaView style={style.sectionContainer}>
        <Logo />
        <Button
          onPress={this.handleNavigate}
          title="Navigate Home"
          color="#841584"
          accessibilityLabel="Navigate to home Screen"
        />
      </SafeAreaView>
    );
  }
}
