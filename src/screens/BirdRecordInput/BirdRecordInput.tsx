import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import style from './style';

type BirdRecordInputStackParamList = {
  Home: undefined;
};

interface BirdRecordInputProps {}

const BirdRecordInput: React.FC<BirdRecordInputProps> = () => {
  const [birdData, setBirdData] = useState({
    birdName: '',
    birdType: '',
    imgSrc: '',
    location: '',
    date: new Date().toLocaleDateString(),
    weather: '',
    season: '',
    quantitySpotted: 0,
    quantitySpottedString: '',
    birdFeatures: '',
    birdDescription: '',
  });

  const navigation = useNavigation<NavigationProp<BirdRecordInputStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  const submitBirdRecord = () => {
    console.log('Bird Record Submitted');
    handleNavigate();
  };

  return (
    <View style={style.sectionContainer}>
      <Text>Bird input fields</Text>
      <TextInput
        style={style.input}
        value={birdData.birdName}
        onChangeText={birdName => setBirdData({ ...birdData, birdName })}
        placeholder="Name Of bird"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.birdType}
        onChangeText={birdType => setBirdData({ ...birdData, birdType })}
        placeholder="Bird Type"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.imgSrc}
        onChangeText={imgSrc => setBirdData({ ...birdData, imgSrc })}
        placeholder="Image Source"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.location}
        onChangeText={location => setBirdData({ ...birdData, location })}
        placeholder="Location"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.date}
        onChangeText={date => setBirdData({ ...birdData, date })}
        placeholder="Date"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.weather}
        onChangeText={weather => setBirdData({ ...birdData, weather })}
        placeholder="Weather"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.season}
        onChangeText={season => setBirdData({ ...birdData, season })}
        placeholder="Season"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.quantitySpottedString}
        onChangeText={quantitySpottedString =>
          setBirdData({ ...birdData, quantitySpotted: parseInt(quantitySpottedString, 10) })
        }
        placeholder="Quantity Spotted"
        keyboardType="numeric"
      />

      <TextInput
        style={style.input}
        value={birdData.birdFeatures}
        onChangeText={birdFeatures => setBirdData({ ...birdData, birdFeatures })}
        placeholder="Features"
        keyboardType="default"
      />

      <TextInput
        style={style.input}
        value={birdData.birdDescription}
        onChangeText={birdDescription => setBirdData({ ...birdData, birdDescription })}
        placeholder="Description"
        keyboardType="default"
      />

      <Button
        onPress={submitBirdRecord}
        title="Submit Record"
        color="#841584"
        accessibilityLabel="Submit record of bird or birds spotted"
      />

      <Text>Name: {birdData.birdName}</Text>
      <Text>Type: {birdData.birdType}</Text>
      <Image source={{ uri: birdData.imgSrc }} />
      <Text>Location: {birdData.location}</Text>
      <Text>Date: {birdData.date}</Text>
      <Text>Weather: {birdData.weather}</Text>
      <Text>Season: {birdData.season}</Text>
      <Text>Quantity Spotted: {birdData.quantitySpotted}</Text>
      <Text>Features: {birdData.birdFeatures}</Text>
      <Text>Description: {birdData.birdDescription}</Text>
    </View>
  );
};

export default BirdRecordInput;
