import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Collapse,
  TextField,
  FormControl,
} from "@mui/material";
import { Pets, Bookmark, Comment } from "@mui/icons-material/";
import { styled } from "@mui/styles";

import { CreateComment } from "../services/CommentService";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MainPostCard(props) {
  const post = props.post;

  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);
  const [comment, setComment] = useState({
    post: props.post._id,
    user: "",
    text: "",
    date: "",
  })
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnChangeInput = (e) => {
    const { value, name } = e.target;

    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    const date = new Date();
    const opts = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    if(localUser !== null) {
      setComment({
        ...comment,
        user: localUser._id,
        date: date.toLocaleString("es-MX", opts)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    if (localUser === null) {
      alert("Necesitas iniciar sesión para poder comentar.");
    }
    else {
      setComment({
        ...comment, 
        user: localUser._id
      });

      const response = await CreateComment(comment);

      if (response.message) {
        alert("Error al comentar, intente más tarde.");
      }
      else {
        document.location.href = `/mascota/${props.post._id}`;
      }
    }

  };

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={post._usuario._imgUsuario.archivo}>
            R
          </Avatar>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="500"
        image={post._imgPost.archivo}
        alt="post"
      />
      <CardContent>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {userData === null ? (
          <></>
        ) : (
          <>
            <IconButton aria-label="like">
              <Pets />
            </IconButton>
            <IconButton aria-label="bookmark">
              <Bookmark />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ marginLeft: "auto" }}
            >
              <Comment />
            </ExpandMore>
          </>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                multiline
                rows={5}
                label="Comentario"
                placeholder="Comentar"
                variant="outlined"
                required
                name="text"
                value={comment.text}
                onChange={handleOnChangeInput}
              />
            </FormControl>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="button"
                onClick={handleClick}
                sx={{
                  m: 1,
                  width: "125px",
                  fontFamily: "'Baloo Da 2', 'cursive'",
                  fontSize: "20px",
                }}
              >
                Comentar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
}
