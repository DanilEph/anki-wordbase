import { Typography, Box } from '@mui/material';
import React from 'react';
import { ButtonRound } from './base/Button';


import React from 'react';
import { Box } from '@mui/material';
import iconRefresh from '../img/icons/refresh.svg';
import iconDelete from '../img/icons/delete.svg';
import iconRename from '../img/icons/rename.svg';
import iconDisconnect from '../img/icons/power.svg';

const Header = ({children}) => {
  return (
    <Box
      sx={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1">{children}</Typography>
      <Box
        sx={{
          '& > *': {
            mx: '8px',
            '&:last-child': {
              mr: 0,
            }
          }
        }}
      >
        <ButtonRound icon={iconRefresh} />
        <ButtonRound icon={iconRename} />
        <ButtonRound icon={iconDelete} />
        <ButtonRound icon={iconDisconnect} />
      </Box>
    </Box>
  )
}

export default Header;
