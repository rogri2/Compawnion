import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Card,
  TextField,
  CardContent,
  FormControl,
} from "@mui/material";

import { CreateAdoption } from "../services/AdoptService";

export default function AdoptFormat() {
  const { mascotaId } = useParams();
  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);
  const [adoption, setAdoption] = useState({
    _post: mascotaId,
    _usuario: "",
    fullName: "",
    correo: "",
    telefono: "",
    direccion: "",
    texto: ""
  });

  const handleOnChangeInput = (e) => {
    const { value, name } = e.target;

    setAdoption({
      ...adoption,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    if (userData !== null) {
      setAdoption({
        ...adoption,
        _usuario: userData._id,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData === null) {
      alert("Necesitas tener una cuenta para poder adoptar.");
    }
    else {
      const res = await CreateAdoption(adoption);

      if (res.message) {
        alert("Error al adoptar, intente más tarde.");
      }
      else {
        alert("Se envió la solicitud a los administradores.");
        document.location.href = "/";
      }
    }
  };

  return (
    <Container sx={{ my: 6 }}>
      <Card
        style={{
          maxWidth: 690,
          margin: "0 auto",
          padding: "20px 5px",
        }}
      >
        <CardContent>
          <Typography align="center" variant="h4" gutterBottom>
            Formato de Adopción
          </Typography>
          <Typography color="textSecondary" variant="body2" gutterBottom>
            Llene el formato de adopción para que nuestro staff pueda revisar su
            solicitud. El staff se comunicará con usted a través de su correo
            electrónico o número de teléfono.
          </Typography>
          <br></br>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={6} item>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Nombre Completo"
                    placeholder="Ingrese su nombre completo"
                    variant="outlined"
                    required
                    name="fullName"
                    value={adoption.fullName}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <FormControl fullWidth>
                  <TextField
                    type="email"
                    label="Correo electrónico"
                    placeholder="Ingrese su correo electrónico"
                    variant="outlined"
                    required
                    name="correo"
                    value={adoption.correo}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <FormControl fullWidth>
                  <TextField
                    type="number"
                    label="Teléfono"
                    placeholder="Ingrese su número de teléfono"
                    variant="outlined"
                    required
                    name="telefono"
                    value={adoption.telefono}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <FormControl fullWidth>
                  <TextField
                    label="Dirección"
                    placeholder="Ingrese su direción"
                    variant="outlined"
                    required
                    name="direccion"
                    value={adoption.direccion}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows={5}
                    label="Razón de adopción"
                    placeholder="¿Por qué quiere adoptar ésta mascota?"
                    variant="outlined"
                    required
                    name="texto"
                    value={adoption.texto}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="button"
                    align="center"
                    onClick={handleClick}
                    sx={{
                      m: 1,
                      width: "125px",
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px",
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
