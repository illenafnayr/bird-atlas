import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

import Home from './src/screens/home/Home';
import { BirdRecordInput } from './src/screens/BirdRecordInput/BirdRecordInput';

type RootStackParamList = {
  Home: undefined;
  BirdRecordInput: undefined;
  // undefined because you aren't passing any params to the home screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BirdRecordInput" component={BirdRecordInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
