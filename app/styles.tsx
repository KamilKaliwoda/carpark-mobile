import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    LoginView: {
        flex: 1,
        backgroundColor: 'darkorchid',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    BookingView: {
        backgroundColor: 'darkorchid',
        width: '100%',
        height: '100%',
    },
    BookingHeader: {
        backgroundColor: 'darkmagenta',
        height: '20%',
        width: '100%',
        marginTop: '10%',
    },
    BookingInfoSection: {
        height: '50%',
        width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    LogoutButtonBackground: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '50%'
    },
    BookingUserInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        fontSize: 20,
        color: 'white'
    },
    LoginForm: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '60%',
        height: '40%',
    },
    LoginTextInput: {
        backgroundColor: 'white',
        fontSize: 15,
        height: '15%',
        borderRadius: 10,
    },
    LoginTitleText: {
        color: 'white',
        fontSize: 30,
        padding: 20,
        marginTop: 50,
    },
    LoginNormalText: {
        fontSize: 20,
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
        fontSize: 20,
    },
  });
  