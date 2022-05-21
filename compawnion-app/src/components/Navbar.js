import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddCircle } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};


const handleClick = (e) => {
  var answer = window.confirm("¿Desea cerrar sesión?");

  if (answer) {
    localStorage.clear();
    Window.location.reload();
  }
};

const handleClickPerfil = (e) => {
  const data = JSON.parse(localStorage.getItem("usuario"));
  //console.log("usuario", data._id);
  document.location.href = `/perfil/${data._id}`;
};

export default function Navbar() {
  const localUser = JSON.parse(localStorage.getItem("usuario"));

  const [userData, setUserData] = useState(localUser);

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            align="left"
            sx={{
              textDecoration: "none",
              boxShadow: "none",
              color: "inherit",
              fontFamily: "'Nanum Pen Script', 'cursive'",
              fontSize: "40px",
            }}
          >
            COMPAWNION
          </Typography>

          {userData === null ? (
            <>
              <Button
                component={Link}
                to="/follow-up"
                color="inherit"
                size="large"
                sx={{ marginLeft: "auto" }}
              >
                Follow Up
              </Button>
              <Button
                component={Link}
                to="/busqueda"
                color="inherit"
                size="large"
              >
                Buscar
              </Button>
              <Button component={Link} to="/login" color="inherit" size="large">
                Log In
              </Button>
            </>
          ) : userData.isAdmin === false ? (
            <>
              <IconButton
                aria-label="mascota"
                component={Link}
                color="inherit"
                to="/publicar"
                sx={{ marginLeft: "auto" }}
              >
                <AddCircle />
              </IconButton>
              <Button
                //component={Link}
                //to="/perfil/:id"
                color="inherit"
                size="large"
                onClick={handleClickPerfil}
              >
                Perfil
              </Button>
              <Button
                component={Link}
                to="/follow-up"
                color="inherit"
                size="large"
              >
                Follow Up
              </Button>
              <Button
                component={Link}
                to="/busqueda"
                color="inherit"
                size="large"
              >
                Buscar
              </Button>
              <Button
                component={Link}
                to="/"
                color="inherit"
                size="large"
                onClick={handleClick}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/adopciones"
                color="inherit"
                size="large"
                sx={{ marginLeft: "auto" }}
              >
                Solicitudes
              </Button>
              <Button
                component={Link}
                to="/"
                color="inherit"
                size="large"
                onClick={handleClick}
              >
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </Fragment>
  );
}
