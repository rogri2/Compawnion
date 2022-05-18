import React, { Fragment, useState } from "react";
import {
  Card,
  TextField,
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
  InputLabel,
  MenuItem,
  FormControl,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { maxWidth, width } from "@mui/system";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//Styles
const profileCardStyle = {
  position: "relative",
  top: "5vh",
  maxWidth: "90rem",
  paddingBottom: "30px",
  alignItems: "center",
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
  const [search, setSearch] = useState({
    name: "",
    isDog: "",
    isMale: "",
    size: "",
  });

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(search);
    props.setPropPadre(search);
  };

  return (
    <Container style={profileCardStyle}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              ADOPTA UNA MASCOTA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Todas estas mascotas están actualmente buscando una familia que
              les de un hogar
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl variant="filled" sx={{ m: 2, minWidth: 120 }}>
                <TextField
                  name="name"
                  label="Nombre de la mascota"
                  value={search.name}
                  onChange={handleOnChangeInput}
                  variant="standard"
                />
              </FormControl>
              <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Animal
                </InputLabel>
                <Select
                  name="isDog"
                  label="Pet"
                  value={search.isDog}
                  onChange={handleOnChangeInput}
                >
                  <MenuItem value="">
                    <em>Ambos</em>
                  </MenuItem>
                  <MenuItem value={false}>Gato</MenuItem>
                  <MenuItem value={true}>Perro</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Genero
                </InputLabel>
                <Select
                  name="isMale"
                  label="Pet"
                  value={search.isMale}
                  onChange={handleOnChangeInput}
                >
                  <MenuItem value="">
                    <em>Ambos</em>
                  </MenuItem>
                  <MenuItem value={true}>Masculino</MenuItem>
                  <MenuItem value={false}>Femenino</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Tamaño
                </InputLabel>
                <Select
                  name="size"
                  label="Pet"
                  value={search.size}
                  onChange={handleOnChangeInput}
                >
                  <MenuItem value="">
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={"s"}>Pequeño</MenuItem>
                  <MenuItem value={"m"}>Mediano</MenuItem>
                  <MenuItem value={"b"}>Grande</MenuItem>
                </Select>
              </FormControl>

              <IconButton
                type="submit"
                variant="standard"
                sx={{ m: 3, minWidth: 10, paddingTop: "2px" }}
              >
                <SearchIcon />
              </IconButton>
            </form>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}
