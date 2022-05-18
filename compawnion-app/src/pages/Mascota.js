import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Typography, Grid, Container } from '@mui/material';

import MainPostCard from '../components/MainPostCard';
import CommentComponent from '../components/CommentComponent';

import { GetPostById } from '../services/PetService';

export default function Mascota() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await GetPostById(postId);
      if (data.message) {
        setPost(null);
      }
      else {
        setPost(data);
      }
    }
    fetchData();
  }, []);


  return post ? (
    <Container>
        <MainPostCard post={post}/>

        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
    </Container>
  ) : (
    <h1>Post no encontrado.</h1>
  );
}
