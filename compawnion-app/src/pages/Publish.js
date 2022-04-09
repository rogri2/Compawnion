import React, { useState } from 'react'
import { Box, Button, Typography, Grid, Container, Card, TextField, CardContent, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, NativeSelect, InputLabel, FormGroup, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/styles';

const Input = styled('input')({
  display: 'none',
});

export default function Publish() {
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
          >Publicar Mascota</Typography>
          <Typography
            color='textSecondary'
            variant='body2'
            gutterBottom
          >Llene el formato de adopción para que nuestro staff pueda revisar su solicitud. El staff se comunicará con usted a través de su correo electrónico o número de teléfono.</Typography>
          <br></br>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={12} item>
                <TextField
                  type='text'
                  label="Nombre de la mascota"
                  placeholder='Ingrese el nombre de la mascota'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} sm={6} item>
                <FormControl>
                  <FormLabel>
                    Animal
                  </FormLabel>
                  <RadioGroup defaultValue={"dog"}>
                    <FormControlLabel
                      value="dog"
                      control={<Radio />}
                      label="Perro"
                    />
                    <FormControlLabel
                      value="cat"
                      control={<Radio />}
                      label="Gato"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid xs={6} sm={6} item>
                <FormControl>
                  <FormLabel>
                    Género
                  </FormLabel>
                  <RadioGroup defaultValue={"male"}>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Macho"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Hembra"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="standard" sx={{ minWidth: 150 }}>
                  <InputLabel variant='standard'>Tamaño</InputLabel>
                  <Select
                    name='SizePet'
                    label='Pet'
                    required
                    defaultValue={"m"}
                  >
                    <MenuItem value={"s"}>Chico</MenuItem>
                    <MenuItem value={"m"}>Mediano</MenuItem>
                    <MenuItem value={"b"}>Grande</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  multiline
                  rows={5}
                  label="Descripción"
                  placeholder='Descripción que quieras dar sobre la mascota'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign='center'>  
                  <label htmlFor='button-file'>
                    <Input accept="image/*" id="button-file" type="file" required />
                    <Button
                      component="span"
                      variant="contained"
                      color="button"
                      sx={{
                        m:1,
                        width: '200px',
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px"
                      }}
                    >Subir Imágen</Button>
                  </label>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign='center'>
                  <Button
                    type="submit"
                    variant="contained"
                    color="button"
                    sx={{
                      m:1,
                      width: '250px',
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px"
                    }}
                  >Poner en adopción</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
