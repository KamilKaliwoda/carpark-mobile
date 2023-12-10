import { Text, View, TextInput, TouchableOpacity, Appearance } from 'react-native';
import { LogOutUser, GetUserData } from './CarparkBookingPageFunctions';
import { styles } from './styles';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';


export const CarparkBookingPage = (props: any): JSX.Element => {
    const [userData, setUserData] = useState<string>('');
    const [isDatepickerVisible, showDatepicker] = useState<boolean>(true);
    const [selectedDate, setDate] = useState<any | null>(new Date());
    Appearance.setColorScheme('dark');

    GetUserData(setUserData);
    const start_date = new Date();
    const max_date = new Date();
    max_date.setDate(max_date.getDate() + 14);
    const old_date = new Date();
    old_date.setDate(old_date.getDate() - 14);

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
        hideDatepicker();
      };
    
    const hideDatepicker = () => {
        showDatepicker(false);
        setTimeout(() => {
            showDatepicker(true);
            }, 10);
    }

    return (
        <View style={styles.BookingView}>
            <View style={styles.BookingHeader}>
                <View style={styles.BookingInfoSection}>
                    <View style={styles.LogoutButtonSection}>
                        <TouchableOpacity style={styles.LogoutButtonBackground} onPress={() => LogOutUser(props)}>
                            <Text style={styles.LoginButtonText}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.BookingUserInfo}>{userData}</Text>
                </View>
                <View style={styles.BookingDatepickerSection}>
                    {isDatepickerVisible && (
                        <DateTimePicker
                            value={selectedDate}
                            minimumDate={start_date}
                            maximumDate={max_date}
                            mode="date"
                            display="calendar"
                            onChange={onChange}
                    />
                )}
                </View>
            </View>
        </View>
    );
  };
  