import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from "react-native-config";
import { SERVER_IP, SERVER_PORT } from '@env';


export async function validateLogin(props: any, username: string, password: string) {
  if (username === '' || password === '') {
    alert('Invalid login or password');
    return;
  }
  const user_data = await axios
    .get('http://' + String(SERVER_IP) + ':' + String(SERVER_PORT) + '/validateLogIn', {
      params: {
        username: username,
        password: password,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => { 
        // Handle any errors that occur 
        console.error(error); 
    }); 
  if (user_data.length === 0) {
    alert('Invalid login or password');
    return;
  }
  await AsyncStorage.setItem(
    'username',
    user_data[0]['username'],
  );
  await AsyncStorage.setItem(
    'name',
    user_data[0]['name'],
  );
  await AsyncStorage.setItem(
    'surname',
    user_data[0]['surname'],
  );

  props.onFormSwitch('booking');
}
