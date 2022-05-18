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
} from "@mui/material";
import { Pets, Bookmark, Comment } from "@mui/icons-material/";
import { styled } from "@mui/styles";

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <TextField
              multiline
              rows={5}
              label="Comentario"
              placeholder="Comentar"
              variant="outlined"
              fullWidth
              required
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="button"
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
