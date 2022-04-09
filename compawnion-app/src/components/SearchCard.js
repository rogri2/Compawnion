import React, { Fragment, useState }  from 'react'
import { Card, TextField, CardActions, CardContent, CardMedia, Button, Typography, Container, Avatar, Grid, Divider, Box, InputLabel, MenuItem , FormControl, IconButton  } from '@mui/material'
import SearchIcon     from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { maxWidth, width } from '@mui/system';
import Select, { SelectChangeEvent } from '@mui/material/Select'

//Styles
const profileCardStyle = {position:"relative",top: '5vh' , maxWidth: '90rem', paddingBottom: '30px', alignItems:'center'}
const BackDrop = { width:'160%', height:'550px', position:"absolute", display:"flex", flexDirection: 'cloumn', borderRadius: '50%', backgroundColor: 'green', backgroundColor: 'linear-gradient(58deg, (pink)20%, (green)100%)' }
const ImgStyle = { width:'25%', height:'240px'}
const InfoStyle = { position:"relative", flex:'1 0 auto'} 


export default function ImgMediaCard() {
    const [Pet, setUser] = useState({
        namePet: "", 
        DogorCat: "",
        GeneroPet: "",
        sizePet: "" 
       
      });
    
      const handleOnChangeInput = (e) => {
        const { name, value } = e.target;
    
        setUser({
          ...Pet,
          [name]: value
        });
      }

  return (

    <Container style={profileCardStyle}> 
    <Card sx={{ display: 'flex' }}>
       <Box sx={{ display:'flex', flexDirection:'column', pt: 2}}>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div">
          ADOPTA UNA MASCOTA    
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Todas estas mascotas están actualmente buscando una familia que les de un hogar
        </Typography>

<FormControl variant="filled" sx={{ m: 2, minWidth: 120 }}>
        <TextField 
            name='namePet'
            label='Nombre de la mascota'
            required
            value={ Pet.namePet }
            onChange={ handleOnChangeInput }
            variant='standard'
          />
</FormControl>
<FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Animal</InputLabel>
        <Select
           name='DogorCat'
           label='Pet'
           required
          value={ Pet.DogorCat }
          onChange={ handleOnChangeInput }
        >
          <MenuItem value="">
            <em>Ambos</em>
          </MenuItem>
          <MenuItem value={10}>Gato</MenuItem>
          <MenuItem value={20}>Perro</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Genero</InputLabel>
        <Select
           name='GeneroPet'
           label='Pet'
           required
          value={ Pet.GeneroPet }
          onChange={ handleOnChangeInput }
        >
          <MenuItem value="">
            <em>Ambos</em>
          </MenuItem>
          <MenuItem value={10}>Masculino</MenuItem>
          <MenuItem value={20}>Femenino</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Tamaño</InputLabel>
        <Select
           name='sizePet'
           label='Pet'
           required
          value={ Pet.sizePet }
          onChange={ handleOnChangeInput }
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value={10}>Pequeño</MenuItem>
          <MenuItem value={20}>Mediano</MenuItem>
          <MenuItem value={30}>Grande</MenuItem>
        </Select>

        
      </FormControl>

      <FormControl variant="standard" sx={{ m: 3, minWidth: 10, paddingTop:'2px' }}>
      <IconButton>
            <SearchIcon />
      </IconButton>
      </FormControl>

      </CardContent>
      </Box>

    
    </Card>
    </Container>
  );
}