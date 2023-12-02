import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export const LoginForm = (props: any): JSX.Element => {
    return (
        <View style={styles.LoginView}>
            <Text style={styles.LoginTitleText}>Log in account</Text>
            <View style={styles.LoginForm}>
                <Text style={styles.LoginNormalText}>username</Text>
                <TextInput style={styles.LoginTextInput} placeholder='username' autoComplete={'username'}/>
                <Text style={styles.LoginNormalText}>password</Text>
                <TextInput style={styles.LoginTextInput} placeholder='password' secureTextEntry={true} autoComplete={'current-password'}/>
                <TouchableOpacity style={styles.LoginButtonBackground}>
                    <Text style={styles.LoginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  };
  