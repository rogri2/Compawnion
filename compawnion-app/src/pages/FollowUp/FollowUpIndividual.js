import React from 'react'
import { Button, Typography, Grid, Container } from '@mui/material';

import MainFollowUpCard from '../../components/MainFollowUpCard';
import CommentComponent from '../components/CommentComponent';

export default function FollowUpIndividual() {
  return (
    <Container>
        <MainFollowUpCard />

        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
    </Container>
  )
}
