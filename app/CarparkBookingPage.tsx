import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LogOutUser } from './CarparkBookingPageFunctions';
import { styles } from './styles';
import { useState } from 'react';


export const CarparkBookingPage = (props: any): JSX.Element => {
    return (
        <TouchableOpacity style={styles.LoginButtonBackground} onPress={() => LogOutUser(props)}>
            <Text style={styles.LoginButtonText}>Log out</Text>
        </TouchableOpacity>
    );
  };
  