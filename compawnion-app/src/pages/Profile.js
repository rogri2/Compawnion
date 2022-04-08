import React from 'react'
import { TextField, Container, FormControl, Button, Grid, Paper, Avatar, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard';
import PostCardProfile from '../components/PostCardProfile'
import { maxWidth } from '@mui/system';

export default function Profile() {

  return (


    <Container sx = {{maxWidth: 950}}>
    <ProfileCard />
<Container>
<PostCardProfile />
</Container>
    </Container>

  )
}
