import React from 'react'
import { Button, Typography, Grid, Container } from '@mui/material';

import MainPostCard from '../components/MainPostCard';
import CommentComponent from '../components/CommentComponent';

export default function Mascota() {
  return (
    <Container>
        <MainPostCard />

        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
    </Container>
  )
}
