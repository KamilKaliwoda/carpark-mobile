import { CarparkBookingPage } from './src/screens/CarparkBookingPage'
import { LoginForm } from './src/screens/LoginForm';
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


