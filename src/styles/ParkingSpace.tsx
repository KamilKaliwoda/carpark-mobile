import { StyleSheet } from 'react-native';
import { normalize } from '../utils/fontNormalizer';

export const styles = StyleSheet.create({
    ParkingSpaceFree: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingTop: '5%',
        paddingBottom: '5%',
        height: 150, 
        maxHeight: 150,
        width: '80%', 
        borderWidth: 5,
        backgroundColor: 'green',   
        alignItems: 'center',
    },
    ParkingSpaceBusy: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingTop: '5%',
        paddingBottom: '5%',
        height: 150, 
        maxHeight: 150,
        width: '80%',  
        backgroundColor: 'red', 
        borderWidth: 5,
        alignItems: 'center',
    },
    SpaceNumber: {
        fontSize: normalize(30),
        color: 'black',
    },
    BookingButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%', 
        width: '80%',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'black',
    },
    ReleaseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 4,
        backgroundColor: 'white',
        height: '30%', 
        width: '80%',
    },
    BookingButtonText: {
        fontSize: normalize(20),
        color: 'black',
    },
    ReleaseButtonText: {
        fontSize: normalize(20),
        color: 'black',
    },
    Name: {
        fontSize: normalize(20),
        color: 'black',
    },
    Surname: {
        fontSize: normalize(20),
        color: 'black',
    },
  });
  