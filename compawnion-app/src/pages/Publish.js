import React from 'react'
import { Box, Button, Typography, Grid, Container, Card, TextField, CardContent, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, NativeSelect, InputLabel } from '@mui/material';

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
                <FormControl>
                  <InputLabel variant='standard'>Tamaño</InputLabel>
                  <NativeSelect
                    defaultValue={"m"}
                  >
                    <option value={"s"}>Chico</option>
                    <option value={"m"}>Mediano</option>
                    <option value={"b"}>Grande</option>
                  </NativeSelect>
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
                  <Button
                    type="file"
                    variant="contained"
                    color="button"
                    align="center"
                    sx={{
                      m:1,
                      width: '125px',
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px"
                    }}
                  >Subir Imágen</Button>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Box textAlign='center'>
                  <Button
                    type="submit"
                    variant="contained"
                    color="button"
                    align="center"
                    sx={{
                      m:1,
                      width: '125px',
                      fontFamily: "'Baloo Da 2', 'cursive'",
                      fontSize: "20px"
                    }}
                  >Subir</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
