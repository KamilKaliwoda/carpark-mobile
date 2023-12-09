import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LogOutUser, GetUserData} from './CarparkBookingPageFunctions';
import { styles } from './styles';
import { useState } from 'react';


export const CarparkBookingPage = (props: any): JSX.Element => {
    const [userData, setUserData] = useState<string>('');
    GetUserData(setUserData);
    return (
        <View style={styles.BookingView}>
            <View style={styles.BookingHeader}>
                <View style={styles.BookingInfoSection}>
                    <TouchableOpacity style={styles.LogoutButtonBackground} onPress={() => LogOutUser(props)}>
                        <Text style={styles.LoginButtonText}>Log out</Text>
                    </TouchableOpacity>
                    <Text style={styles.BookingUserInfo}>{userData}</Text>
                </View>
            </View>
        </View>
    );
  };
  