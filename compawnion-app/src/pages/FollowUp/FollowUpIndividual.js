import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Typography, Grid, Container } from '@mui/material';

import MainFollowUpCard from '../../components/MainFollowUpCard';
import CommentComponent from '../../components/CommentComponent';

import { GetFollowUpById } from '../../services/FollowUpService';
import { GetCommentsFromFollowUp } from '../../services/CommentFUService';

export default function FollowUpIndividual() {
  const { followUpId } = useParams();
  const [followUp, setFollowUp] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetFollowUpById(followUpId);
      if (data.message) {
        setFollowUp(null);
      }
      else {
        setFollowUp(data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchComments() {
      const dataComm = await GetCommentsFromFollowUp(followUpId);
      if (dataComm.message) {
        setComments(null);
      }
      else {
        setComments(dataComm);
      }
    }
    fetchComments();
  }, []);

  return followUp ? (
    <Container>
        <MainFollowUpCard followUp={followUp} />
        {comments === null ? (
          <></>
        ) : (
          comments.map((comment, index) => {
            const dataComment = {
              _usuario: comment._usuario,
              texto: comment.texto,
              date: comment.date,
            }
            return <CommentComponent key={index} comment={dataComment} />
          })
        )

        }
    </Container>
  ) : (
    <h1>Follow Up no encontrado.</h1>
  )
}
