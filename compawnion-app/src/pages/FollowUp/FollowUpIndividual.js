import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Typography, Grid, Container } from '@mui/material';

import MainFollowUpCard from '../../components/MainFollowUpCard';
import CommentComponent from '../../components/CommentComponent';

import { GetFollowUpById } from '../../services/FollowUpService';

export default function FollowUpIndividual() {
  const { followUpId } = useParams();
  const [followUp, setFollowUp] = useState();

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


  return followUp ? (
    <Container>
        <MainFollowUpCard followUp={followUp} />
    </Container>
  ) : (
    <h1>Follow Up no encontrado.</h1>
  )
}
