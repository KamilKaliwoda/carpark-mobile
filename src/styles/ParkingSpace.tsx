import { StyleSheet } from 'react-native';

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
        fontSize: 30,
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
  