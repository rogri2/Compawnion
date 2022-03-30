import React, { useState } from 'react'
import { TextField, Container, FormControl, Button } from '@mui/material';
import { Link } from 'react-router-dom'

export default function LogIn() {
  const [usuario, setUser] = useState({
    user: "",
    pass: ""
  });

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...usuario,
      [name]: value
    });
  }

  return (
    <Container>
      <div>Iniciar Sesión</div>
      <form>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            name='user'
            label='Usuario'
            required
            value={ usuario.user }
            onChange={ handleOnChangeInput }
            variant='standard'
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField 
            name='pass'
            label='Contraseña'
            required
            value={ usuario.pass }
            onChange={ handleOnChangeInput }
            variant='standard'
            type='password'
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Button type='submit' variant='contained'>Iniciar Sesión</Button>
        </FormControl>
      </form>
      <div>
        <p>¿No tienes una cuenta? </p>
        <Link to='/registro'>Crear una cuenta</Link>
      </div>
    </Container>
  )
}
