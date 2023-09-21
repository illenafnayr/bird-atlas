import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  sectionContainer: ViewStyle;
  scrollView: ViewStyle;
  input: ViewStyle;
}

const style = StyleSheet.create<Styles>({
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
