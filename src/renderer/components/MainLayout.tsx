import { Box } from '@mui/material'
import React from 'react'
import SideBar from './SideBar';

const MainLayout = ({ children }) => {
  return (
    <Box className={'layout-wrap'}
      sx={{
        display: 'flex',
      }}
    >
      <Box className={'side-bar'}
        sx={{
          position: 'sticky',
          top: '0px',
          height: '100vh',
          minWidth: '250px',
          maxWidth: '250px',
          background: theme => theme.palette.secondary.light,
          padding: '30px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',

        }}
      >
        <SideBar />
      </Box>
      <Box className={'main'}
        sx={{
          flexGrow: 1,
          padding: '30px 25px',
          paddingTop: 0,
          minWidth: '600px',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout;
