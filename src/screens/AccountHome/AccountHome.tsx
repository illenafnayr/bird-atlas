// import React, { useState } from 'react';
import React from 'react';
import { Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import style from './style';

import { BirdMap } from '../../map/Map';

type AccountHomeStackParamList = {
  BirdRecordInput: undefined;
};

const AccountHome: React.FC = () => {
  //   const [accountData, setAccountData] = useState({

  //   });

  const navigation = useNavigation<NavigationProp<AccountHomeStackParamList>>();

  const navigateToBirdRecordInput = () => {
    navigation.navigate('BirdRecordInput');
  };

  return (
    <SafeAreaView style={style.sectionContainer}>
      <ScrollView style={style.scrollView}>
        <Text>Account Home</Text>
        <BirdMap />
        <Button
          onPress={navigateToBirdRecordInput}
          title="Add New Bird Record"
          color="#841584"
          accessibilityLabel="Add New Bird Record"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountHome;
