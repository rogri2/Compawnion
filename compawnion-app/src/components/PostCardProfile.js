import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { Pets, Bookmark } from "@mui/icons-material/";

export default function PostCardProfile() {
  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Post"
        subheader="04 de Abril de 2022"
      />
      <CardMedia
        component="img"
        height="500"
        image="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-por-que-los-perros-mueven-la-cola.png?itok=Kw0lwckl"
        alt="post"
      />
      <CardContent>
        <Typography variant="body2">
          sdfkjghsdf skdjfhglksdjfhg lsdkjfgh lksdjfhg lksjdfhg lksjdfh lskdjfhg
          lsdkjfh glskdjfh glskdjf glskdjf ghlskdjfh glksdjf hglksjd fhg
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Pets />
        </IconButton>
        <IconButton aria-label="bookmark">
          <Bookmark />
        </IconButton>

        <Box sx={{ marginLeft: "auto" }}>
          <Button
            variant="contained"
            color="editar"
            sx={{
              fontFamily: "'Baloo Da 2', 'cursive'",
              fontSize: "20px",
            }}
            disableElevation
          >
            Editar
          </Button>

          <Button
            variant="contained"
            color="borrar"
            sx={{
              fontFamily: "'Baloo Da 2', 'cursive'",
              fontSize: "20px",
            }}
            disableElevation
          >
            Borrar
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
