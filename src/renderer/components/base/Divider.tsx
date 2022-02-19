import { Box } from '@mui/material'
import React from 'react'

const Divider = ({sx, ...other}) => {
  return (
      <Box
      sx={{
        margin: '20px -25px',
        height: '1px',
        left: 0,
        background: theme => theme.palette.secondary.main,
        ...sx,
      }}
    />
  )
}

export default Divider;
