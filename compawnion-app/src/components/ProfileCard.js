import React, { Fragment, useState, useEffect } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { maxWidth, width } from "@mui/system";

import { GetAllAdoptionsOfUser } from "../services/AdoptService";

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

  const [input, setInput] = useState({
    _post: ""
  });
  const [adoptados, setAdoptados] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await GetAllAdoptionsOfUser(usuario._id);
      if (data.message) {
        setAdoptados(null);
      }
      else {
        setAdoptados(data);
      }
    }
    fetchData();
  }, []);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnClick = (e, option) => {
    props.setPropPadre(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    document.location.href = `/follow-up/crear/${input._post}`;
  };

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
              {usuario.user}
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
              onClick={(e) => handleOnClick(e, "posts")}
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
              onClick={(e) => handleOnClick(e, "paws")}
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
              onClick={(e) => handleOnClick(e, "bookmarks")}
            >
              Bookmarks
            </Button>
            <Box sx={{pt:15}}>
              {
                adoptados ? (
                  adoptados.length !== 0 ? (
                    <form onSubmit={handleSubmit}>
                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                      <InputLabel>Mascotas Adoptadas</InputLabel>
                      <Select
                        name="_post"
                        label="Pet"
                        value={input._post}
                        required
                        //defaultValue="a"
                        onChange={handleOnChangeInput}
                      >
                        {
                          adoptados.map((mascota, index) => {
                            return <MenuItem key={index} value={mascota._id}>{mascota._post.name}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="button"
                      type="submit"
                      sx={{
                        marginLeft: "auto",
                        fontFamily: "'Baloo Da 2', 'cursive'",
                        fontSize: "20px",
                      }}
                      disableElevation
                    >
                      Follow Up!
                    </Button>
                  </form>
                  ) : (
                    <></>
                  )
                  
                ) : (
                  <></>
                )
              }
            </Box>
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}
