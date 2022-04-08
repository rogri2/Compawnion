import React, { Fragment } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Avatar, Grid, Divider, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { maxWidth, width } from '@mui/system';

const profileCardStyle = {position:"relative",top: '5vh' , maxWidth: '90rem'}
const BackDrop = { width:'160%', height:'550px', position:"absolute", display:"flex", flexDirection: 'cloumn', borderRadius: '50%', backgroundColor: 'green', backgroundColor: 'linear-gradient(58deg, (pink)20%, (green)100%)' }
const ImgStyle = { width:'25%', height:'240px'}
const InfoStyle = { position:"relative", flex:'1 0 auto'} 



export default function ImgMediaCard() {
  return (

   
    <Container style={profileCardStyle}> 
    <Card sx={{ display: 'flex' }}>
    <CardMedia style={ImgStyle}
        component="img"
        alt="perro"
        height="240"
        image='https://bandlabimages.azureedge.net/v1.0/users/52e88841-bd1d-4cdc-8e72-ba8e661bb261/640x640'
      />
       <Box sx={{ display:'flex', flexDirection:'column', pt: 2}}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Shimmah
        </Typography>
        <Typography variant="body2" color="text.secondary">
          (~._.)~  ~(._.)~  ~(._.~)
        </Typography>
      </CardContent>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' , pt: 10, pl: 10}}>
      <CardActions>
      <Button
               
                variant="contained"
                color="button"
                sx={{
                        marginLeft: "auto",
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px"
                    }}
                disableElevation
            >
                Post
            </Button>

            <Button
                
                variant="contained"
                color="button"
                sx={{
                        marginLeft: "auto",
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px"
                    }}
                disableElevation
            >
                Follow ups
            </Button>

            <Button
              
                variant="contained"
                color="button"
                sx={{
                        marginLeft: "auto",
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px"
                    }}
                disableElevation
            >
                Paws
            </Button>

      </CardActions>
      </Box>
    
    </Card>
    </Container>
  );
}