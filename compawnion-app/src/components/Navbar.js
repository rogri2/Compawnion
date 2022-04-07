import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}));

export default function Navbar() {
  const classes = useStyles()
  return (
    <Fragment>  
        <AppBar position='fixed'>
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
      <div className={classes.offset} />
    </Fragment>
  )
}
