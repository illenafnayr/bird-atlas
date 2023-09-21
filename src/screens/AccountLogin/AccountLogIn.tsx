import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
import style from './style';

// type AccountLogInParamList = {
//   Home: undefined;
// };

const AccountLogIn: React.FC = () => {
  const [accountLogInData, setAccountLogInData] = useState({
    email: '',
    password: '',
  });

  //   const navigation = useNavigation<NavigationProp<AccountLogInParamList>>();

  const navigateToAccountHome = () => {
    console.log('Navigate to Account Home');
    // navigation.navigate('AccountHome');
  };

  const createAccount = () => {
    console.log('Logged In ');
    navigateToAccountHome();
  };

  return (
    <SafeAreaView style={style.sectionContainer}>
      <ScrollView style={style.scrollView}>
        <Text>Create Account</Text>
        <TextInput
          style={style.input}
          value={accountLogInData.email}
          onChangeText={email => setAccountLogInData({ ...accountLogInData, email })}
          placeholder="Enter email..."
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountLogInData.password}
          onChangeText={email => setAccountLogInData({ ...accountLogInData, email })}
          placeholder="Enter password..."
          keyboardType="default"
        />

        <Button
          onPress={createAccount}
          title="Create Account"
          color="#841584"
          accessibilityLabel="Submit record of bird or birds spotted"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountLogIn;
