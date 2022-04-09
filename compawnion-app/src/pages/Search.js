import React from 'react'
import SearchCard from '../components/SearchCard'
import { Container } from '@mui/material';
import PostCard from '../components/PostCard';

export default function Search() {
  return (
    <Container>
      <SearchCard />
      <PostCard />

    </Container>
  )
}
