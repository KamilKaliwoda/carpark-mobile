import { StyleSheet } from 'react-native';
import { normalize } from '../utils/fontNormalizer';

export const styles = StyleSheet.create({
    LoginView: {
        flex: 1,
        backgroundColor: 'darkorchid',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    LoginForm: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '60%',
        height: '40%',
    },
    LoginTextInput: {
        backgroundColor: 'white',
        fontSize: normalize(15),
        height: '15%',
        borderRadius: 10,
    },
    LoginTitleText: {
        color: 'white',
        fontSize: normalize(30),
        padding: 20,
        marginTop: 50,
    },
    LoginNormalText: {
        fontSize: normalize(20),
        color: 'white',
        height: '10%',
    },
    LoginButtonBackground: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%'
    },
    LoginButtonText: {
        color: 'purple',
        fontSize: normalize(20),
    },
    text: {
        fontSize: normalize(40),
    },
  });
  