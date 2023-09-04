import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  page: ViewStyle;
  container: ViewStyle;
  map: TextStyle;
}

const style = StyleSheet.create<Styles>({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});

export default style;
