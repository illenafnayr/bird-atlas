import React, { Component } from 'react';
import { Button, SafeAreaView } from 'react-native';
import style from './style';
import Logo from '../../common/logo/Logo';

export class Home extends Component<{}, {}> {
  render() {
    return (
      <SafeAreaView style={style.sectionContainer}>
        <Logo />
        <Button
          onPress={() => {
            console.log('Navigate to home screen button press');
          }}
          title="Navigate Home"
          color="#841584"
          accessibilityLabel="Navigate to home Screen"
        />
      </SafeAreaView>
    );
  }
}
