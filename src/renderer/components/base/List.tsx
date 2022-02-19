import { Box, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from 'renderer/App';
import iconDatabase from '../../img/icons/database.svg';
import iconDatabaseClicked from '../../img/icons/database-clicked.svg';
import iconPlus from '../../img/icons/plus.svg';

export const ListItemBase = observer(({ children, sx, ...other }) => {
  const { user } = useContext(Context);
  const chosenWordbase = user.getChosenWordbase();

  const handlerClick = () => {
    user.setChosenWordbase(children);
  };

  return (
    <ListItem
      button
      onClick={() => handlerClick()}
      buttonSx={{
        ...(chosenWordbase === children && {
          background: theme => theme.palette.secondary.main,
          '& *': {
            color: theme => theme.palette.primary.main,
          }
        }),
      }}
      icon={
        <Box sx={{
          width: '15px',
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px',
        }}>
          {chosenWordbase === children && <img src={iconDatabaseClicked} style={{width: '100%'}} />}
          {chosenWordbase !== children && <img src={iconDatabase} style={{width: '100%'}} />}
        </Box>
      }
    >
      {children}
    </ListItem>
  );
});

export const ListName = ({ children, sx, ...other }) => {
  return (
    <Box
      sx={{

      }}
    >
      <Typography variant='caption' sx={{color: '#b5b5b5'}}>{children}</Typography>
    </Box>
  )
};

export const ListItem = ({ children, sx, button = false, buttonSx, icon, ...other}) => {
  return (
    <Box
      sx={{
        color: theme => theme.palette.secondary.dark,
        background: theme => theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        padding: '7px 12px',
        borderRadius: '7px',
        margin: '0px -12px',
        ...(button && {
          background: 'none',
          width: '100%',
          border: 'none',
          cursor: 'pointer',
          WebkitUserSelect: 'none',
          ...buttonSx,
        }),
        ...sx,
      }}
      {...other}
      >
        {icon}
        <Typography variant="body1">{children}</Typography>
    </Box>
  )};

  export const ListItemAdd = ({ children, ...other }) => {
    const handlerClick = () => {

    }

    return (
      <ListItem
        button
        onClick={() => handlerClick()}
        icon={
          <Box sx={{
            width: '15px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
          }}>
            <img src={iconPlus} style={{width: '100%'}} />
          </Box>
        }
        {...other}
      >
        {children}
      </ListItem>
    )
  }




const List = ({ children, sx, ...other }) => {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      {children}
    </Box>
  )
};


export default List;
