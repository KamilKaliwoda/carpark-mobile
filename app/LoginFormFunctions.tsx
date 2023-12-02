import axios from 'axios';

export async function validateLogin(props: any, username: string, password: string) {
  if (username === '' || password === '') {
    alert('Invalid login or password');
    return;
  }
  const user_data = await axios
    .get('http://172.30.204.8:9132/validateLogIn', {
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
//   if (user_data.length === 0) {
//     alert('Invalid login or password');
//     return;
//   }
  console.log('success')
}
