import React from 'react'
import { Paper, Button, Typography, Grid, Container, Card, FormControl, TextField } from '@mui/material';

export default function AdoptFormat() {
  return (
    <Container align="center">
      <Paper>
        <Typography variant='h3'>Formato de Adopción</Typography>
        <form>
          <FormControl>
            <TextField
              name='name'
              label='Nombre Completo'
              required
              variant='filled'
              color='primary'
            />
          </FormControl>
          <FormControl>
            <TextField
              name='email'
              label='Correo electrónico'
              required
              variant='filled'
              color='primary'
            />
          </FormControl>
          <FormControl>
            <TextField
              name='phone'
              label='Teléfono'
              required
              variant='filled'
              color='primary'
            />
          </FormControl>
          <FormControl>
            <TextField
              name='address'
              label='Dirección'
              required
              variant='filled'
              color='primary'
            />
          </FormControl>
          <FormControl>
            <TextField
              name='reason'
              label='¿Por qué quieres adoptar a esta mascota?'
              required
              variant='filled'
              color='primary'
              rows='4'
            />
          </FormControl>
          <FormControl>
            <Button
              type='submit'
              variant='contained'
              color="button"
              sx={{
                    marginLeft: "auto",
                    fontFamily: "'Baloo Da 2', 'cursive'",
                    fontSize: "20px"
              }}
              disableElevation
              >
                Enviar
              </Button>
          </FormControl>
        </form>
      </Paper>
    </Container>
  )
}
