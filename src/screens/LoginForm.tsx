import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/LoginForm';
import { validateLogin } from '../services/LoginForm';
import { useState } from 'react';


export const LoginForm = (props: any): JSX.Element => {
    const [password, setPassword] = useState('');
    return (
        <View style={styles.LoginView}>
            <Text style={styles.LoginTitleText}>Log in account</Text>
            <View style={styles.LoginForm}>
                <Text style={styles.LoginNormalText}>username</Text>
                <TextInput style={styles.LoginTextInput} placeholder='username' autoComplete={'username'} onChangeText={newUsername => props.onChangeUsername(newUsername)}/>
                <Text style={styles.LoginNormalText}>password</Text>
                <TextInput style={styles.LoginTextInput} placeholder='password' secureTextEntry={true} autoComplete={'current-password'} onChangeText={newPassword => setPassword(newPassword)}/>
                <TouchableOpacity style={styles.LoginButtonBackground} onPress={() => validateLogin(props, props.username, password)}>
                    <Text style={styles.LoginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  };
  