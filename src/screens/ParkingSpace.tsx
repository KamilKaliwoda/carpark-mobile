import { Text, View, TextInput, TouchableOpacity, Appearance, ScrollView } from 'react-native';
import { styles } from '../styles/ParkingSpace';
import { SelectSpaceNumber, ReleaseSpaceNumber } from '../services/ParkingSpace';

export const ParkingSpaceFree = (props: any): JSX.Element => {
    if (props.isAlreadyBooked) {
      return (
        <View style={[styles.ParkingSpaceFree, { height: props.height, maxHeight: props.height }]}>
            <Text style={styles.SpaceNumber}>{props.space_number}</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.ParkingSpaceFree, { height: props.height, maxHeight: props.height }]}>
            <Text style={styles.SpaceNumber}>{props.space_number}</Text>
            <TouchableOpacity style={styles.BookingButton} onPress={() => SelectSpaceNumber(props)}>
                <Text style={styles.BookingButtonText}>Book</Text>
            </TouchableOpacity>
        </View>
      );
    }
  };
  
  export const ParkingSpaceBusy = (props: any): JSX.Element => {
    if (props.releaseAllowed) {
      return (
        <View style={[styles.ParkingSpaceBusy, { height: props.height, maxHeight: props.height }]}>
            <Text style={styles.SpaceNumber}>{props.space_number}</Text>
            <Text style={styles.Name}>{props.name}</Text>
            <Text style={styles.Surname}>{props.surname}</Text>
            <TouchableOpacity style={styles.ReleaseButton} onPress={() => ReleaseSpaceNumber(props)}>
                <Text style={styles.ReleaseButtonText}>Release</Text>
            </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[styles.ParkingSpaceBusy, { height: props.height, maxHeight: props.height }]}>
            <Text style={styles.SpaceNumber}>{props.space_number}</Text>
            <Text style={styles.Name}>{props.name}</Text>
            <Text style={styles.Surname}>{props.surname}</Text>
        </View>
      );
    }
  };