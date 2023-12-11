import { Text, View, TextInput, TouchableOpacity, Appearance, ScrollView } from 'react-native';
import { getBookingData } from './BookingContentFunctions';
import { styles } from './styles';
import { useState, useEffect } from 'react';

export const BookingContent = (props: any): JSX.Element => {
    const datetimeFormat = props.selectedDate;
    const day = datetimeFormat.getDate().toString().padStart(2, '0');
    const month = (datetimeFormat.getMonth() + 1).toString().padStart(2, '0');
    const year = datetimeFormat.getFullYear().toString();
    const dateFormat = `${year}-${month}-${day}`;
    const [bookingData, setBookingData] = useState<Array<any> | null>(null);

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

    return <ScrollView style={styles.BookingContent}></ScrollView>
}