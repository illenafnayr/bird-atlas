import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  text: TextStyle;
  sectionContainer: ViewStyle;
}

const style = StyleSheet.create<Styles>({
  text: {
    color: 'red',
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
});

export default style;
