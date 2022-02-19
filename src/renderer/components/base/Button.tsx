import React from 'react';
import { Box } from '@mui/material';

const Button = ({ children, sx, fullWidth = false, textTrasform = 'normal', ...other }) => {
  return (
    <Box
      component="button"
      sx={{
        fontSize: theme => theme.typography.body1,
        width: fullWidth ? '100%' : null,
        padding: '7px 12px',
        border: 0,
        cursor: 'pointer',
        borderRadius: '4px',
        background: theme => theme.palette.primary.main,
        color: theme => theme.palette.primary.light,
        textTransform: textTrasform,
        ...sx
      }}
      {...other}
    >
      {children}
    </Box>
  )
};

export const ButtonRound = ({ sx, icon, ...other }) => {
  return (
    <Button
      sx={{
        borderRadius: '100%',
        padding: '10px',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          width: '12px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={icon} style={{width: '100%'}} />
      </Box>
    </Button>
  )
};

export default Button;
