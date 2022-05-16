import React, { Fragment, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Avatar,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { maxWidth, width } from "@mui/system";

const profileCardStyle = {
  position: "relative",
  top: "5vh",
  maxWidth: "90rem",
  paddingBottom: "30px",
};
const BackDrop = {
  width: "160%",
  height: "550px",
  position: "absolute",
  display: "flex",
  flexDirection: "cloumn",
  borderRadius: "50%",
  backgroundColor: "green",
  backgroundColor: "linear-gradient(58deg, (pink)20%, (green)100%)",
};
const ImgStyle = { width: "25%", height: "240px" };
const InfoStyle = { position: "relative", flex: "1 0 auto" };

export default function ImgMediaCard(props) {
  const usuario = props.usuario;

  return (
    <Container style={profileCardStyle}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          style={ImgStyle}
          component="img"
          alt="imgUsuario"
          height="240"
          image={usuario._imgUsuario.archivo}
        />
        <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {usuario.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {usuario.bio}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pt: 15 }}>
          <CardActions>
            <Button
              variant="contained"
              color="button"
              sx={{
                marginLeft: "auto",
                fontFamily: "'Baloo Da 2', 'cursive'",
                fontSize: "20px",
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
                fontSize: "20px",
              }}
              disableElevation
            >
              Paws
            </Button>
            <Button
              variant="contained"
              color="button"
              sx={{
                marginLeft: "auto",
                fontFamily: "'Baloo Da 2', 'cursive'",
                fontSize: "20px",
              }}
              disableElevation
            >
              Bookmarks
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
