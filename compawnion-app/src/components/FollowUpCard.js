import React, { useState } from "react";
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

import { UpsertLikeFU } from "../services/LikeFUService";

export default function FollowUpCard(props) {
  const pet = props.pet;

  const localUser = JSON.parse(localStorage.getItem("usuario"));
  const [userData, setUserData] = useState(localUser);

  const handleLike = async (e) => {
    const dataToSend = {
      _usuario: userData._id,
      _followUp: pet._id,
    };

    const like = await UpsertLikeFU(dataToSend);
    if (like.message) {
      console.log("Error al hacer el like");
    } else {
      window.location.reload();
    }
  };

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={pet._adopcion._usuario._imgUsuario.archivo}
          >
            R
          </Avatar>
        }
        title={pet._adopcion._post.name}
        subheader="04 de Abril de 2022"
      />
      <CardMedia
        component="img"
        height="500"
        image={pet._imgFU.archivo}
        alt="post"
      />
      <CardContent>
        <Typography variant="body2">{pet.bio}</Typography>
      </CardContent>
      <CardActions disableSpacing>
          {userData !== null ? (
              <IconButton aria-label="like" onClick={handleLike}>
              <Pets />
            </IconButton>
          ) : (
            <></>
          )}
        
        <IconButton
          aria-label="bookmark"
          component={Link}
          to={`/follow-up/${pet._id}`}
        >
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
}
