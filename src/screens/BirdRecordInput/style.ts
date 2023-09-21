import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  text: TextStyle;
  sectionContainer: ViewStyle;
  scrollView: ViewStyle;
  input: ViewStyle;
}

const style = StyleSheet.create<Styles>({
  text: {
    color: 'red',
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 2,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default style;
