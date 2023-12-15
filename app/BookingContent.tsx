import { Text, View, TextInput, TouchableOpacity, Appearance, ScrollView, Dimensions } from 'react-native';
import { getBookingData } from './BookingContentFunctions';
import { ParkingSpaceFree, ParkingSpaceBusy } from './ParkingSpace';
import { styles } from './styles';
import { useState, useEffect } from 'react';

export const BookingContent = (props: any): JSX.Element => {
    const datetimeFormat = props.selectedDate;
    const day = datetimeFormat.getDate().toString().padStart(2, '0');
    const month = (datetimeFormat.getMonth() + 1).toString().padStart(2, '0');
    const year = datetimeFormat.getFullYear().toString();
    const dateFormat = `${year}-${month}-${day}`;
    const [bookingData, setBookingData] = useState<Array<any> | null>(null);

	const spaceHeight = Dimensions.get('window').height * 0.2;

    const refreshStatus = (): void => {
      props.refreshData();
    };

    useEffect(() => {
        getBookingData(dateFormat)
          .then((data) => {
            setBookingData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [dateFormat]);
    
      if (bookingData === null) {
        // Data is still being fetched
        return <Text>Loading...</Text>;
      }

    const freeSpaces: Array<JSX.Element> = [];
    const busySpaces: Array<JSX.Element> = [];
  let isAlreadyBooked = false;
  bookingData.forEach((element) => {
    if (element['username'] === props.currentUsername) {
      isAlreadyBooked = true;
    }
  });
  let releaseAllowed = false;
  bookingData.forEach((element) => {
    if (element['username'] === null) {
      freeSpaces.push(
        <ParkingSpaceFree
          key={element['space_number']}
          space_number={element['space_number']}
          date_format={dateFormat}
          isAlreadyBooked={isAlreadyBooked}
          refreshStatus={refreshStatus}
		  height={spaceHeight}
        />,
      );
    } else {
      if (element['username'] === props.currentUsername) {
        releaseAllowed = true;
      } else {
        releaseAllowed = false;
      }
      busySpaces.push(
        <ParkingSpaceBusy
          key={element['space_number']}
          space_number={element['space_number']}
          date_format={dateFormat}
          name={element['name']}
          surname={element['surname']}
          releaseAllowed={releaseAllowed}
          refreshStatus={refreshStatus}
		  height={spaceHeight}
        />,
      );
    }
  });
  

    return <View style={styles.BookingContentContainer}>
		<View style={styles.BookingContentContainerDeeper}>
			<ScrollView contentContainerStyle={styles.BookingContent}>{freeSpaces}</ScrollView>
		</View>
		<View style={styles.BookingContentContainerDeeper}>
			<ScrollView contentContainerStyle={styles.BookingContent}>{busySpaces}</ScrollView>
		</View>
	</View>
    
}