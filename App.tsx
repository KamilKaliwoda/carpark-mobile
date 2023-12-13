import { Text, View } from 'react-native';
import { styles } from './app/styles';
import { CarparkBookingPage } from './app/CarparkBookingPage'
import { LoginForm } from './app/LoginForm';
import React, { useState } from 'react';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [username, setUsername] = useState('');
  const toggleForm = (formName: any) => {
      setCurrentForm(formName);
  };
  const toggleUsername = (usernameProp: any) => {
    setUsername(usernameProp);
};
  return (
    <React.Fragment>
    {currentForm === 'login' ? (
      <LoginForm onFormSwitch={toggleForm} username={username} onChangeUsername={toggleUsername} />
    ) : (
      <CarparkBookingPage onFormSwitch={toggleForm} username={username} />
    )}
  </React.Fragment>
  );
}


