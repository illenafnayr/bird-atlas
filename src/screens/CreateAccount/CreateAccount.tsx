import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import style from './style';

type CreateAccountStackParamList = {
  AccountHome: undefined;
};

const CreateAccount: React.FC = () => {
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    dateCreated: new Date().toLocaleDateString(),
  });

  const navigation = useNavigation<NavigationProp<CreateAccountStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('AccountHome');
  };

  const createAccount = () => {
    console.log('Account Created');
    handleNavigate();
  };

  const checkPasswordMatch = (password: string, checkPassword: string) => {
    if (password !== checkPassword) {
      console.log("passwords don't match:", password, checkPassword);
      return;
    }
    console.log('Passwords match: ', password, checkPassword);
  };

  return (
    <SafeAreaView style={style.sectionContainer}>
      <ScrollView style={style.scrollView}>
        <Text>Create Account</Text>
        <TextInput
          style={style.input}
          value={accountData.name}
          onChangeText={name => setAccountData({ ...accountData, name })}
          placeholder="Enter your name..."
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.email}
          onChangeText={email => setAccountData({ ...accountData, email })}
          placeholder="Enter email..."
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.password}
          onChangeText={password => checkPasswordMatch(password, accountData.checkPassword)}
          placeholder="Enter password..."
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.checkPassword}
          onChangeText={checkPassword => checkPasswordMatch(accountData.password, checkPassword)}
          placeholder="Confirm password..."
          keyboardType="default"
        />

        <Button
          onPress={createAccount}
          title="Create Account"
          color="#841584"
          accessibilityLabel="Create Account"
        />

        <Text>Name: {accountData.name}</Text>
        <Text>Type: {accountData.email}</Text>
        <Text>Password: {accountData.password}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
