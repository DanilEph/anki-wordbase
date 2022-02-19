import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Ref = ({children, to='', href='', ...other}) => {
  let refType = 'span';
  if (to !== '') {
    refType = Link;
  } else if (href !== '') {
    refType = 'a';
  } else if (href !== '' || to !== ''){
    refType = Link;
  }

  return (
    <Box
      component={refType}
      to={to}
      href={href}
      sx={{
        textDecoration: 'none',
        color: theme => theme.palette.primary.main,
        fontFamily: '',
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        cursor: 'pointer',
        WebkitUserSelect: 'none',
        '&:hover': {
          textDecoration: 'underline dotted',
        }
      }}
      {...other}
    >{children}</Box>
  )
}

export default Ref;
