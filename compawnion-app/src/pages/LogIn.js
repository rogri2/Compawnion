import React, { useState } from 'react'
import { TextField, Container, FormControl, Button, Grid, Paper, Avatar } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import ArrowForwardIcon  from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import { height } from '@mui/system';


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


  const ContainerStyle={paddingLeft: "45rem" ,paddingTop:"5rem"}
  const paperStyle={paddingTop: "10vh", padding :20, height:'70vh', width:360, margin:"20px auto", borderRadius: "15px"}
  const avatarStyle ={backgroundColor: 'red', width: 100, height: 100 }
  const buttonStyle ={paddingTop: "25px"}
  const NoAccStyle = {paddingTop: "4rem"}
  const UserStyle = { paddingTop:"1rem"}
  return (

    <Container style={ContainerStyle}>
         <Grid >
           <Paper elevation={10} style={paperStyle}>
             <Grid align='center'>
             <Avatar style={avatarStyle} ><PetsIcon sx={{ fontSize: 80 }}/></Avatar>
             <h1>Iniciar Sesión</h1>
             <form>
               <Grid style={UserStyle}>
        <FormControl fullWidth>
          <TextField 
            name='user'
            label='Usuario'
            required
            value={ usuario.user }
            onChange={ handleOnChangeInput }
            variant='standard'
          />
        </FormControl>
        <FormControl fullWidth >
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
        </Grid>
        
      </form>

      <Grid style={buttonStyle}>
        <FormControl>
          
          <Button type='submit' variant='outlined' color="secondary"><ArrowForwardIcon/></Button>
        </FormControl>
        </Grid>

      <Grid style={NoAccStyle} align="left">
        <p>¿No tienes una cuenta? <Link to='/registro'>Registrarme</Link> </p>
      </Grid>

             </Grid>

           </Paper>
         </Grid>

    

    
    </Container>
  )
}
