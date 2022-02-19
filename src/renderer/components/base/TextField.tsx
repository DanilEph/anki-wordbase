import { Box } from '@mui/material';
import iconPerson from '../../img/icons/person.svg';
import iconOpenedEye from '../../img/icons/opened-eye.svg';
import iconClosedEye from '../../img/icons/closed-eye.svg';
import iconLock from '../../img/icons/lock.svg';
import iconSearch from '../../img/icons/search.svg';

const classes = {
 textFieldIcon: {
    width: '15px',
    position: 'absolute',
    top: 0,
    left: '12px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
};

export const LoginField = ({...other}) => {
  return (
    <Box
      className={'text-field-wrap'}
      sx={{
        position: 'relative',
      }}
    >
      <Box
        className={'text-field-icon'}
        sx={classes.textFieldIcon}
      >
        <img src={iconPerson} style={{width: '100%'}} />
      </Box>
      <TextField sx={{paddingLeft: '35px',}} {...other}/>
    </Box>
  )
};

export const PasswordField = ({iconProps, hide = true, ...other}) => {
  return (
    <Box className={'text-field-wrap'}
      sx={{
        position: 'relative',
      }}
    >
      <Box
        className={'text-field-icon'}
        sx={classes.textFieldIcon}
        {...iconProps}
      >
        <img src={iconLock} style={{width: '100%'}}/>
      </Box>
      <TextField sx={{paddingLeft: '35px',}} security={hide} {...other}/>
    </Box>
  );
};

export const SearchField = ({sx, ...other}) => {
  return (
    <Box
      className={'text-search-wrap'}
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
    <Box
      className={'text-search-icon'}
      sx={classes.textFieldIcon}
    >
      <img src={iconSearch} style={{width: '100%'}} />
    </Box>
    <TextField sx={{paddingLeft: '35px'}} {...other}/>
  </Box>
  );
};

const TextField = ({placeholder, sx, fullWidth, security = false, ...other}) => {
  return (
    <Box
      component={'input'}
      placeholder={placeholder}
      sx={{
        fontSize: theme => theme.typography.body1,
        margin: '10px 0',
        width: fullWidth ? '100%' : null,
        display: 'block',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        background: theme => theme.palette.secondary.light,
        color: theme => theme.palette.secondary.dark,
        padding: '7px  10px',
        borderRadius: '4px',
        boxSizing: 'border-box',
        WebkitTextSecurity: security ? 'disc' : null,
        "::-webkit-input-placeholder": {
          color: theme => theme.palette.secondary.dark,
        },
        border: theme => `1px solid transparent`,
        '&:focus': {
          border: theme => `1px solid ${theme.palette.secondary.dark}`,
          background: theme => theme.palette.secondary.light,
          color: theme => theme.palette.secondary.dark,
        },
        ...sx,
      }}
    />
  )
}

export default TextField;
