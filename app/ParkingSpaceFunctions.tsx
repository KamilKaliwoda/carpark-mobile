import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SelectSpaceNumber(props: any) {
    axios
      .get('http://192.168.1.76:9132/bookParkingSpace', {
        params: {
          space_number: props.space_number,
          username: await AsyncStorage.getItem('username'),
          selected_date: props.date_format,
        },
      })
      .then((response) => {
        if (response.data['status'] === 0) {
          alert('This space is already busy');
        }
        props.refreshStatus();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  export async function ReleaseSpaceNumber(props: any) {
    axios
      .get('http://192.168.1.76:9132/releaseParkingSpace', {
        params: {
          space_number: props.space_number,
          username: await AsyncStorage.getItem('username'),
          selected_date: props.date_format,
        },
      })
      .then(() => {
        props.refreshStatus();
      })
      .catch((error) => {
        console.error(error);
      });
  }