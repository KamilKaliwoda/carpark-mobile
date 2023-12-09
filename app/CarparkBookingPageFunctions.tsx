import AsyncStorage from '@react-native-async-storage/async-storage';

export function LogOutUser(props: any) {
    props.onFormSwitch('login');
  }

export async function GetUserData(setUserData: any) {
  const username = await AsyncStorage.getItem('username');
  setUserData(username);
}