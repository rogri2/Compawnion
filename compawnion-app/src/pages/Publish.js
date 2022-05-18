import React, { useState, useEffect } from "react";
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
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  NativeSelect,
  InputLabel,
  FormGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/styles";

import { CreatePost } from "../services/PetService";

export default function Publish() {

  const localUser = JSON.parse(localStorage.getItem("usuario"));

  const [pet, setPet] = useState({
    user: "",
    name: "",
    isDog: true,
    isMale: true,
    size: "m",
    description: "",
    date: "",
    image: null,
  });

  const handleOnChangeInput = (e) => {
    const { value, name } = e.target;

    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleOnChangeFile = (e) => {
    console.log("selected file: ", e.target.files[0]?.name);

    setPet({
      ...pet,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(localUser === null) {
      alert("Necesitas iniciar sesión para poder publicar una mascota.");
    }
    else {
      setPet({
        ...pet,
        user: localUser._id
      });

      var file = document.getElementById("file");
  
      if (file.files.length === 0) {
        alert("Debe incluir una imagen de la mascota.");
      }
      else {
        //console.log("pet: ", pet);
  
        // REGISTRO DE MASCOTA
        const response = await CreatePost(pet);
  
        if (response.message) {
          alert("Error al crear post, intente más tarde.");
        } else {
          alert("Se ha creado el post con éxito.");
          document.location.href = "/";
        }
  
      }
    }
  };

  const handleOnClick = (e) => {
    const date = new Date();
    const opts = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    if(localUser !== null) {
      setPet({
        ...pet,
        user: localUser._id,
        date: date.toLocaleString("es-MX", opts)
      });
    }
  }

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
            Publicar Mascota
          </Typography>
          <Typography color="textSecondary" variant="body2" gutterBottom>
            Llene el formato de adopción para que nuestro staff pueda revisar su
            solicitud. El staff se comunicará con usted a través de su correo
            electrónico o número de teléfono.
          </Typography>
          <br></br>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={12} item>
                <FormControl fullWidth>
                  <TextField
                    name="name"
                    type="text"
                    label="Nombre de la mascota"
                    placeholder="Ingrese el nombre de la mascota"
                    variant="outlined"
                    required
                    value={pet.name}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} item>
                <FormControl>
                  <FormLabel>Animal</FormLabel>
                  <RadioGroup
                    defaultValue={true}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Perro"
                      name="isDog"
                      onChange={handleOnChangeInput}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="Gato"
                      name="isDog"
                      onChange={handleOnChangeInput}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} item>
                <FormControl>
                  <FormLabel>Género</FormLabel>
                  <RadioGroup
                    defaultValue={true}
                    name="isMale"
                    onChange={handleOnChangeInput}
                  >
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="Macho"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="Hembra"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                  <InputLabel variant="standard">Tamaño</InputLabel>
                  <Select
                    name="size"
                    label="Pet"
                    required
                    defaultValue={"m"}
                    onChange={handleOnChangeInput}
                  >
                    <MenuItem value={"s"}>Chico</MenuItem>
                    <MenuItem value={"m"}>Mediano</MenuItem>
                    <MenuItem value={"b"}>Grande</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <FormControl fullWidth>
                  <TextField
                    name="description"
                    multiline
                    rows={5}
                    label="Descripción"
                    placeholder="Descripción que quieras dar sobre la mascota"
                    variant="outlined"
                    required
                    value={pet.description}
                    onChange={handleOnChangeInput}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign="center">
                  <FormControl>
                    <Button
                      variant="contained"
                      component="label"
                      color="button"
                      sx={{
                        m: 1,
                        width: "200px",
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px",
                      }}
                    >
                      Subir Imágen
                      <input
                        type="file"
                        id="file"
                        hidden
                        onChange={handleOnChangeFile}
                      />
                    </Button>
                  </FormControl>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="button"
                    onClick={handleOnClick}
                    sx={{
                      m: 1,
                      width: "250px",
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px",
                    }}
                  >
                    Poner en adopción
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
