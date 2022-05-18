import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Typography, Grid, Container } from '@mui/material';

import MainPostCard from '../components/MainPostCard';
import CommentComponent from '../components/CommentComponent';

import { GetPostById } from '../services/PetService';
import { GetCommentsFromPost } from '../services/CommentService';

export default function Mascota() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    async function fetchComments() {
      const dataComm = await GetCommentsFromPost(postId);
      if (dataComm.message) {
        setComments(null);
      }
      else {
        setComments(dataComm);
      }
    }
    fetchComments();
  }, []);


  return post ? (
    <Container>
        <MainPostCard post={post}/>
        {comments === null ? (
          <>
          </>
        ) : (
            comments.map((comment, index) => {
              return(
                <CommentComponent key={index} comment={comment} />
              )
            })
        )}
    </Container>
  ) : (
    <h1>Post no encontrado.</h1>
  );
}
