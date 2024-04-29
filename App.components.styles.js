import { StyleSheet } from 'react-native';
import color from './contains/color';

const styles = StyleSheet.create ( {
  container: {
    flex: 1,
    backgroundColor: color.backgound,
  },
  body: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.primary,
    paddingVertical: 20,
  },
  items: {
    marginTop: 25,
  },
});

export default styles;