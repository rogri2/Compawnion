import React from "react";
import {
  Avatar,
  Box,
  Button,
  Typography,
  Grid,
  Container,
  Card,
  TextField,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Comment } from "@mui/icons-material";

export default function CommentComponent(props) {
  const comment = props.comment;

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={comment._usuario._imgUsuario.archivo}
          >
            R
          </Avatar>
        }
        title={comment._usuario.name}
        subheader={comment.date}
      />
      <CardContent>
        <Typography variant="body2">{comment.texto}</Typography>
      </CardContent>
    </Card>
  );
}
