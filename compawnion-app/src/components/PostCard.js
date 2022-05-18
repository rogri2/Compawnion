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
} from "@mui/material";
import { Pets, Bookmark, Comment } from "@mui/icons-material/";

export default function PostCard(props) {
  const pet = props.pet;

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={pet._usuario._imgUsuario.archivo}>
            R
          </Avatar>
        }
        title={pet.name}
        subheader={pet.date}
      />
      <CardMedia
        component="img"
        height="500"
        image={pet._imgPost.archivo}
        alt="post"
      />
      <CardContent>
        <Typography variant="body2">{pet.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Pets />
        </IconButton>
        <IconButton aria-label="bookmark">
          <Bookmark />
        </IconButton>
        <IconButton aria-label="bookmark" component={Link} to={`/mascota/${pet._id}`}>
          <Comment />
        </IconButton>
        <Button
          component={Link}
          to="/formato-adopcion"
          variant="contained"
          color="button"
          sx={{
            marginLeft: "auto",
            fontFamily: "'Baloo Da 2', 'cursive'",
            fontSize: "20px",
          }}
          disableElevation
        >
          Adoptar
        </Button>
      </CardActions>
    </Card>
  );
}
