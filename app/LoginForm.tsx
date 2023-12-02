import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { validateLogin } from './LoginFormFunctions';
import { useState } from 'react';


export const LoginForm = (props: any): JSX.Element => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.LoginView}>
            <Text style={styles.LoginTitleText}>Log in account</Text>
            <View style={styles.LoginForm}>
                <Text style={styles.LoginNormalText}>username</Text>
                <TextInput style={styles.LoginTextInput} placeholder='username' autoComplete={'username'} onChangeText={newUsername => setUsername(newUsername)}/>
                <Text style={styles.LoginNormalText}>password</Text>
                <TextInput style={styles.LoginTextInput} placeholder='password' secureTextEntry={true} autoComplete={'current-password'} onChangeText={newPassword => setPassword(newPassword)}/>
                <TouchableOpacity style={styles.LoginButtonBackground} onPress={() => validateLogin(props, username, password)}>
                    <Text style={styles.LoginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  };
  