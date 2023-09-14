import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import style from './style';

interface BirdRecordInputProps {}

interface BirdRecordInputState {
  birdName: string;
  birdType: string;
  imgSrc: string;
  location: string;
  date: string;
  weather: string;
  season: string;
  quantitySpotted: number;
  quantitySpottedString: string;
  birdFeatures: string;
  birdDescription: string;
  // audio: File;
}

export class BirdRecordInput extends Component<BirdRecordInputProps, BirdRecordInputState> {
  constructor(props: BirdRecordInputProps) {
    super(props);
    this.state = {
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
      // audio: new File([], ''),
    };
  }
  render() {
    return (
      <View style={style.sectionContainer}>
        <Text>Bird input fields</Text>
        <TextInput
          style={style.input}
          value={this.state.birdName}
          onChangeText={birdName => this.setState({ birdName })}
          placeholder="Name Of bird"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.birdType}
          onChangeText={birdType => this.setState({ birdType })}
          placeholder="Bird Type"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.imgSrc}
          onChangeText={imgSrc => this.setState({ imgSrc })}
          placeholder="Image Source"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.location}
          onChangeText={location => this.setState({ location })}
          placeholder="Location"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.date}
          onChangeText={date => this.setState({ date })}
          placeholder="Date"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.weather}
          onChangeText={weather => this.setState({ weather })}
          placeholder="Weather"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.season}
          onChangeText={season => this.setState({ season })}
          placeholder="Season"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.quantitySpottedString}
          onChangeText={quantitySpottedString =>
            this.setState({ quantitySpotted: parseInt(quantitySpottedString, 10) })
          }
          placeholder="Quantity Spotted"
          keyboardType="numeric"
        />

        <TextInput
          style={style.input}
          value={this.state.birdFeatures}
          onChangeText={birdFeatures => this.setState({ birdFeatures })}
          placeholder="Features"
          keyboardType="default"
        />

        <TextInput
          style={style.input}
          value={this.state.birdDescription}
          onChangeText={birdDescription => this.setState({ birdDescription })}
          placeholder="Description"
          keyboardType="default"
        />

        <Text>Name: {this.state.birdName}</Text>
        <Text>Type: {this.state.birdType}</Text>
        <Image source={{ uri: this.state.imgSrc }} />
        <Text>Location: {this.state.location}</Text>
        <Text>Date: {this.state.date}</Text>
        <Text>Weather: {this.state.weather}</Text>
        <Text>Season: {this.state.season}</Text>
        <Text>Quantity Spotted: {this.state.quantitySpotted}</Text>
        <Text>Features: {this.state.birdFeatures}</Text>
        <Text>Description: {this.state.birdDescription}</Text>
      </View>
    );
  }
}
