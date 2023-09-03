import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  titleText: TextStyle;
  sectionContainer: ViewStyle;
}

const style = StyleSheet.create<Styles>({
  titleText: {
    color: 'red',
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
});

export default style;
