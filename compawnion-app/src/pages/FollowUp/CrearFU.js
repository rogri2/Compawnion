import React from 'react'
import { Box, Button, Typography, Grid, Container, Card, TextField, CardContent, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, NativeSelect, InputLabel, FormGroup } from '@mui/material';
import { styled } from '@mui/styles';

const Input = styled('input')({
  display: 'none',
});

export default function CrearFU() {
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
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} item>
                <TextField
                  multiline
                  rows={5}
                  label="Cuéntanos como te ha ido con tu nueva mascota."
                  placeholder='Cuéntanos como te ha ido con tu nueva mascota.'
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