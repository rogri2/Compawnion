import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' component="div" sx={{flexGrow: 1}}>
            Compawnion
          </Typography>
          <Button component={Link} to="/" color='inherit' size="large">
            Home
          </Button>
          <Button component={Link} to="/perfil/:id" color='inherit' size="large">
            Perfil
          </Button>
          <Button component={Link} to="/busqueda" color='inherit' size="large">
            Buscar
          </Button>
          <Button component={Link} to="/" color='inherit' size="large">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
