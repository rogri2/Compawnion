import React from 'react'
import { Box, Button, Typography, Grid, Container, Card, TextField, CardContent } from '@mui/material';

export default function AdoptFormat() {
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
          >Formato de Adopción</Typography>
          <Typography
            color='textSecondary'
            variant='body2'
            gutterBottom
          >Llene el formato de adopción para que nuestro staff pueda revisar su solicitud. El staff se comunicará con usted a través de su correo electrónico o número de teléfono.</Typography>
          <br></br>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={6} item>
                <TextField
                  type='text'
                  label="Nombre Completo"
                  placeholder='Ingrese su nombre completo'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} md={6} item>
                <TextField
                  type='email'
                  label="Correo electrónico"
                  placeholder='Ingrese su correo electrónico'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  type='number'
                  label="Teléfono"
                  placeholder='Ingrese su número de teléfono'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Dirección"
                  placeholder='Ingrese su direción'
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  multiline
                  rows={5}
                  label="Razón de adopción"
                  placeholder='¿Por qué quiere adoptar ésta mascota?'
                  variant='outlined'
                  fullWidth
                  required
                />
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
                  >Enviar</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}
