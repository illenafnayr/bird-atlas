import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  logoContainer: TextStyle;
  sectionContainer: ViewStyle;
}

const style = StyleSheet.create<Styles>({
  logoContainer: {
    margin: 24,
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
});

export default style;
