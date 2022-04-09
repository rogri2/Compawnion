import React, { useState } from 'react'
import { TextField, Container, FormControl, Button , Paper, Avatar, Grid} from '@mui/material';
import { Link } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets';
import ArrowForwardIcon  from '@mui/icons-material/ArrowForward';

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

  const ContainerStyle={paddingLeft: "45rem" ,paddingTop:"2rem"}
  const paperStyle={paddingTop: "10vh" , padding :35, height:'80vh', width:360, margin:"20px auto", borderRadius: "15px"}
  const avatarStyle ={width: 100, height: 100 }
  const buttonStyle ={paddingTop: "25px"}
  const NoAccStyle = {paddingTop: "4rem", fontSize: '15px' , color:"grey"}
  const UserStyle = { paddingTop:"1rem"}

  return (

    <Container style={ContainerStyle}>
      <Paper elevation={10} style={paperStyle} align='center'>
      <Avatar style={avatarStyle} ><PetsIcon sx={{ fontSize: 80 }}/></Avatar>
      <h1>Iniciar Sesión</h1>
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

       

      </form>

      <Grid style={buttonStyle} align="right">
        <FormControl>
          <h4>Registrarme</h4>
          <Button type='submit' variant='outlined' color="secondary"><ArrowForwardIcon/></Button>
        </FormControl>
        </Grid>

      <div style={NoAccStyle} align="left">
        <p>FCFM 2022</p>
       
      </div>
      </Paper>
    </Container>
  )
}
