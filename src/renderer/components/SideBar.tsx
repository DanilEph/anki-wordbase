import React, {useContext} from 'react';
import {Box, Typography} from '@mui/material';
import iconPerson from '../img/icons/user.svg';
import Divider from './base/Divider';
import List, { ListItem, ListItemAdd, ListItemBase, ListName } from './base/List';
import Ref from './base/Ref';
import { Context } from 'renderer/App';

const SideBar = () => {
  const { user } = useContext(Context);

  const handlerLogout = () => {
    user.setLogin('null');
  };

  return (
    <>
      <Typography
        variant='h2'
        sx={{
          fontWeight: 'bold',
        }}
      >
        Hi, danileph!
      </Typography>
      <Divider sx={{background: 'transparent'}} />
      <List>
        <ListName>Wordbases</ListName>
        <ListItemBase >English club</ListItemBase>
        <ListItemBase >My vocabulary</ListItemBase>
        <ListItemBase >Top 500 words</ListItemBase>
        <ListItemAdd >Add a wordbase</ListItemAdd>
      </List>
      <Box
        sx={{
          flexGrow: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Ref onClick={() => handlerLogout()}>Logout</Ref>
      </Box>
    </>
  )
}

export default SideBar;
