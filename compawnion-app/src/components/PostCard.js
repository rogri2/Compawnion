import React, { useState, useEffect } from "react";
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

import { UpdateBookmarks, GetBookmark } from "../services/WatchListService";

export default function PostCard(props) {
  const pet = props.pet;

  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);
  const [bookmark, setBookmark] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (localUser !== null) {
        const data = await GetBookmark(userData._id);
        if (data.message) {
          setBookmark(null);
        } else {
          setBookmark(data);
        }
      }
    }
    fetchData();
  }, []);

  const handleBookmark = async (e) => {
    const myBookmarks = bookmark._posts;

    if (!myBookmarks.includes(pet._id)) {
      myBookmarks.push(pet._id);
    } else {
      myBookmarks.splice(myBookmarks.indexOf(pet._id), 1);
    }

    await UpdateBookmarks(bookmark._id, myBookmarks);
    window.location.reload();
  };

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
        {userData === null ? (
          <>
            <IconButton
              aria-label="comment"
              component={Link}
              to={`/mascota/${pet._id}`}
            >
              <Comment />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton aria-label="like">
              <Pets />
            </IconButton>
            <IconButton aria-label="bookmark" onClick={handleBookmark}>
              <Bookmark />
            </IconButton>
            <IconButton
              aria-label="comment"
              component={Link}
              to={`/mascota/${pet._id}`}
            >
              <Comment />
            </IconButton>
            <Button
              component={Link}
              to={`/formato-adopcion/${pet._id}`}
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
          </>
        )}
      </CardActions>
    </Card>
  );
}
