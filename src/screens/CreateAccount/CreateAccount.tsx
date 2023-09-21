import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import style from './style';

type CreateAccountStackParamList = {
  Home: undefined;
};

const BirdRecordInput: React.FC = () => {
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    dateCreated: new Date().toLocaleDateString(),
  });

  const navigation = useNavigation<NavigationProp<CreateAccountStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('Home');
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
          placeholder="Name Of bird"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.email}
          onChangeText={email => setAccountData({ ...accountData, email })}
          placeholder="Bird Type"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.password}
          onChangeText={password => checkPasswordMatch(password, accountData.checkPassword)}
          placeholder="Image Source"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={accountData.checkPassword}
          onChangeText={checkPassword => checkPasswordMatch(accountData.password, checkPassword)}
          placeholder="Location"
          keyboardType="default"
        />

        <Button
          onPress={createAccount}
          title="Create Account"
          color="#841584"
          accessibilityLabel="Submit record of bird or birds spotted"
        />

        <Text>Name: {accountData.name}</Text>
        <Text>Type: {accountData.email}</Text>
        <Text>Password: {accountData.password}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BirdRecordInput;
