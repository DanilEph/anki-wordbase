import React, { useState } from 'react';
import { useContext } from 'react';
import Button from '../components/base/Button';
import { Context } from '../App';
import TextField from '../components/base/TextField';
import { Box, Typography } from '@mui/material';
import { LoginField, PasswordField } from '../components/base/TextField';
import Ref from '../components/base/Ref';

import React from 'react'

export const SignIn = ({handler}) => {
  const { user } = useContext(Context);

  const handlerButton = () => {
    user.setLogin('danileph');
  };


  return (
    <Box
      sx={{
        width: '250px',
      }}
    >
      <LoginField placeholder={'Login'} fullWidth />
      <PasswordField placeholder={'Password'} fullWidth/>
      <Button onClick={() => handlerButton()} fullWidth>Sign in</Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        <Typography variant='caption'>Not a member? <Ref onClick={() => handler()}>Sign up</Ref></Typography>
      </Box>
    </Box>
  );
};

export const SignUp = ({handler}) => {
  const { user } = useContext(Context);

  const handlerButton = () => {
    if (user.getLogin() == null) {
      user.setLogin('danileph');
    } else {
      user.setLogin(null);
    }
  };

  return (
    <Box
      sx={{
        width: '250px',
      }}
    >
      <LoginField placeholder={'New login'} fullWidth />
      <PasswordField placeholder={'New password'} fullWidth/>
      <PasswordField placeholder={'Repeat password'} fullWidth/>
      <Button onClick={() => handlerButton()} fullWidth>Sign up</Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        <Typography variant='caption'>Have an Account? <Ref onClick={() => handler()}>Sign in</Ref></Typography>
      </Box>
    </Box>
  );
};


const Auth = () => {
  const subComponents = {
    signIn: 'sign-in',
    signUp: 'sign-up',
  };
  const [subComponent, setSubComponent] = useState(subComponents.signIn);
  const handlerSubComponent = () => {
    if (subComponent === subComponents.signIn) {
      setSubComponent(subComponents.signUp);
    } else {
      setSubComponent(subComponents.signIn);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {subComponent === subComponents.signIn && <SignIn handler={handlerSubComponent} />}
      {subComponent === subComponents.signUp && <SignUp handler={handlerSubComponent} />}
    </Box>
  )
}

export default Auth;
