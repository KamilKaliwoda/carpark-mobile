import { StyleSheet } from 'react-native';
import { normalize } from '../utils/fontNormalizer';

export const styles = StyleSheet.create({
    LoginButtonText: {
        color: 'purple',
        fontSize: normalize(20),
    },
    BookingContentSection: {
        height: '70%',
        width: '100%',
        marginTop: '5%',
    },
    BookingView: {
        backgroundColor: 'darkorchid',
        width: '100%',
        height: '100%',
    },
    BookingHeader: {
        backgroundColor: 'darkmagenta',
        height: '15%',
        width: '100%',
        marginTop: '10%',
    },
    BookingInfoSection: {
        flex: 1,
        height: '70%',
        width: '100%',
        backgroundColor: 'darkorchid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    LogoutButtonSection: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '50%',
    },
    LogoutButtonBackground: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '80%',
    },
    BookingUserInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        fontSize: normalize(20),
        color: 'white',
        textAlign: 'center'
    },
    BookingDatepickerSection: {
        height: '30%',
        width: '100%',
        backgroundColor: 'darkorchid',
        justifyContent: 'center',
        alignItems: 'center',
    },
    DatepickerButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 
        width: '40%',
        borderRadius: 15,
    },
    DatepickerText: {
        fontSize: normalize(20),
        color: 'darkmagenta',
    },
  });
  