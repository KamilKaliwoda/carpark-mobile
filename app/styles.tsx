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
        fontSize: 20,
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
    text: {
        fontSize: 40,
    },
    BookingContentSection: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '100%',
        marginTop: '5%',
    },
    BookingContent: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'darkmagenta',
        borderColor: 'darkmagenta',
        borderRadius: 10,
        padding: 10,
        borderWidth: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        rowGap: '15%',
        columnGap: '15%',
    },
    ParkingSpaceFree: {
        height: '30%',     
        width: '30%', 
        borderWidth: 5,
        backgroundColor: 'green',    
    },
    ParkingSpaceBusy: {
        height: '30%',     
        width: '30%', 
        backgroundColor: 'red', 
        borderWidth: 5,

    },
    SpaceNumber: {
        fontSize: 20,
        color: 'black',
    },
    BookingButton: {
        backgroundColor: 'white',
        height: '30%', 
        width: '80%',
    },
    ReleaseButton: {
        backgroundColor: 'white',
        height: '30%', 
        width: '80%',
    },
    BookingButtonText: {
        fontSize: 20,
        color: 'black',
    },
    ReleaseButtonText: {
        fontSize: 20,
        color: 'black',
    },
    Name: {
        fontSize: 20,
        color: 'black',
    },
    Surname: {
        fontSize: 20,
        color: 'black',
    },
  });
  