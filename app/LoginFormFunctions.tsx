import axios from 'axios';
import Config from "react-native-config";


export async function validateLogin(props: any, username: string, password: string) {
  if (username === '' || password === '') {
    alert('Invalid login or password');
    return;
  }
  const user_data = await axios
    .get('http://192.168.1.76:9132/validateLogIn', {
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
  props.onFormSwitch('booking');
}
