import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Typography, Grid, Container, Card, TextField, CardContent, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, NativeSelect, InputLabel, FormGroup } from '@mui/material';
import { styled } from '@mui/styles';

import { CreateFollowUp } from '../../services/FollowUpService';

const Input = styled('input')({
  display: 'none',
});

export default function CrearFU() {
  const { adopcionId } = useParams();
  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [input, setInput] = useState({
    bio: "",
    _adopcion: adopcionId,
    date: ""
  });
  const [image, setImage] = useState();

  const handleOnChangeInput = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnChangeFile = (e) => {
    console.log("selected file: ", e.target.files[0]?.name);

    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (localUser === null) {
      alert("Necesitas iniciar sesión para poder publicar.");
    }
    else {
      var file = document.getElementById("file");

      if (file.files.length === 0){
        alert("Debe incluir una imagen de la mascota.");
      }
      else {
        const response = await CreateFollowUp(input, image);

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
    setInput({
      ...input,
      date: date.toLocaleString("es-MX", opts)
    });
  };

  return (
    <Container sx={{my:6}}>
      <Card style={{
        maxWidth: 690,
        margin: "0 auto",
        padding: "20px 5px"
      }}>
        <CardContent>
          <Typography
            align='center'
            variant='h4'
            gutterBottom
          >Follow Up</Typography>
          <Typography
            color='textSecondary'
            variant='body2'
            gutterBottom
          >Éste es un apartado de la página donde uno puede contar sus experiencias con su mascota ya después de la adopción, para que el resto de las personas puedan ver como ha sido cambiada la vida del animal que adoptó.</Typography>
          <br></br>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows={5}
                    label="Cuéntanos como te ha ido con tu nueva mascota."
                    placeholder='Cuéntanos como te ha ido con tu nueva mascota.'
                    variant='outlined'
                    required
                    name="bio"
                    value={input.bio}
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
                <Box textAlign='center'>
                  <Button
                    type="submit"
                    variant="contained"
                    color="button"
                    onClick={handleOnClick}
                    sx={{
                      m:1,
                      width: '250px',
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px"
                    }}
                  >Crear Follow Up</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}