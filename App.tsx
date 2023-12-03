import { Text, View } from 'react-native';
import { styles } from './app/styles';
import { CarparkBookingPage } from './app/CarparkBookingPage'
import { LoginForm } from './app/LoginForm';
import React, { useState } from 'react';

export default function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName: any) => {
      setCurrentForm(formName);
  };
  return (
    <React.Fragment>
    {currentForm === 'login' ? (
      <LoginForm onFormSwitch={toggleForm} />
    ) : (
      <CarparkBookingPage onFormSwitch={toggleForm} />
    )}
  </React.Fragment>
  );
}


