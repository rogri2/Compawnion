import React, { useState } from 'react'
import { TextField, Container, FormControl, Button } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Registro() {
  const [usuario, setUser] = useState({
    name: "",
    user: "",
    pass: "",
    val_pass: ""
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
            name='name'
            label='Nombre'
            required
            value={ usuario.name }
            onChange={ handleOnChangeInput }
            variant='standard'
          />
        </FormControl>
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
          <TextField 
            name='val_pass'
            label='Validar Contraseña'
            required
            value={ usuario.val_pass }
            onChange={ handleOnChangeInput }
            variant='standard'
            type='password'
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <Button type='submit' variant='contained'>Registrarse</Button>
        </FormControl>
      </form>
      <div>
        <p>¿Ya tienes una cuenta? </p>
        <Link to='/login'>Iniciar Sesión</Link>
      </div>
    </Container>
  )
}
