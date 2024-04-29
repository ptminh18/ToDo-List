import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create ( {
      item: {
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      content: {
        width: '80%',
        fontSize: 16,
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      even: {
        backgroundColor: color.third,
      },
      odd: {
        backgroundColor: color.second,
      },
      number: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
      },
})

export default styles;