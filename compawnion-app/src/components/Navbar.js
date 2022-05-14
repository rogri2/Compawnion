import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { AddCircle } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}));

export default function Navbar() {
  const classes = useStyles()
  return (
    <Fragment>  
        <AppBar position='fixed' elevation={0}>
          <Toolbar>
            <Typography variant='h5' component={Link} to="/" align='left' sx={{textDecoration: "none", boxShadow: "none", color: "inherit" , fontFamily: "'Nanum Pen Script', 'cursive'", fontSize: '40px'}}>
              COMPAWNION
            </Typography>
            <IconButton aria-label="mascota" component={Link} color="inherit" to="/publicar" sx={{marginLeft: "auto"}}>
                <AddCircle />
            </IconButton>
            <Button component={Link} to="/perfil/:id" color='inherit' size="large">
              Perfil
            </Button>
            <Button component={Link} to="/follow-up" color='inherit' size="large">
              Follow Up
            </Button>
            <Button component={Link} to="/busqueda" color='inherit' size="large">
              Buscar
            </Button>
            <Button component={Link} to="/login" color='inherit' size="large">
              Log In
            </Button>
          </Toolbar>
        </AppBar>
      <div className={classes.offset} />
    </Fragment>
  )
}
