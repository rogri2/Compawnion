import React, { useState } from 'react'
import { TextField, Container, FormControl, Button , Paper, Avatar, Grid} from '@mui/material';
import { Link } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets';
import ArrowForwardIcon  from '@mui/icons-material/ArrowForward';

import { CreateUser } from "../services/UsuarioService";

export default function Registro() {
  const regex = new RegExp("(?=.{8,})");

  const [usuario, setUser] = useState({
    name: "",
    user: "",
    pass: "",
    image: null,
  });

  const handleOnChangeInput = (e) => {
    const { value, name } = e.target;

    setUser({
      ...usuario,
      [name]: value
    });
  };

  const handleOnChangeFile = (e) => {
    console.log("selected file: ", e.target.files[0]?.name);

    setUser({
      ...usuario,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var file = document.getElementById("file");

    if (!regex.test(usuario.pass)) {
      alert("La contraseña debe tener más de 8 caracteres.");
    }
    else if (file.files.length === 0) {
      alert("Debe incluir una imagen de perfil.");
    }
    else {
      console.log("la contraseña si es igual");
  
      await CreateUser(usuario);
  
      setUser({
        name: "",
        user: "",
        pass: "",
        val_pass: "",
        image: null,
      });
    }
  };

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
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
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
          <Button variant="contained" component="label" color="button">
            Subir Archivo
            <input type="file" id="file" hidden onChange={handleOnChangeFile}/>
          </Button>
        </FormControl>

       

      <Grid style={buttonStyle} align="right">
          <h4>Registrarme</h4>
          <Button type='submit' variant='contained' color="button" disableElevation><ArrowForwardIcon/></Button>
        </Grid>
      </form>


      <Grid style={NoAccStyle} align="left">
        <p>¿Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link> </p>
       
      </Grid>
      </Paper>
    </Container>
  )
}
