import AsyncStorage from '@react-native-async-storage/async-storage';

export function LogOutUser(props: any) {
    props.onFormSwitch('login');
  }

export async function GetUserData(setUserData: any) {
  const name = await AsyncStorage.getItem('name');
  const surname = await AsyncStorage.getItem('surname');
  const userIdentity = name + " " + surname;
  setUserData(userIdentity);
}