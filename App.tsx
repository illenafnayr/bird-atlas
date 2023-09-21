import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/home/Home';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import BirdRecordInput from './src/screens/BirdRecordInput/BirdRecordInput';

type RootStackParamList = {
  Home: undefined;
  CreateAccount: undefined;
  BirdRecordInput: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="BirdRecordInput" component={BirdRecordInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
