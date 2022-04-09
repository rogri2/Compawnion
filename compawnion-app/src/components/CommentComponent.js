import React from 'react'
import { Avatar, Box, Button, Typography, Grid, Container, Card, TextField, CardContent, CardHeader } from '@mui/material';
import { Comment } from '@mui/icons-material';
import { red } from '@mui/material/colors';

export default function CommentComponent() {
  return (
    <Card sx={{m:5}}>
        <CardHeader 
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
            }
            title="Usuario"
            subheader="04 de Abril de 2022"
        />
        <CardContent>
            <Typography variant="body2">
                sdfkjghsdf skdjfhglksdjfhg lsdkjfgh lksdjfhg lksjdfhg lksjdfh lskdjfhg lsdkjfh glskdjfh glskdjf glskdjf ghlskdjfh glksdjf hglksjd fhg
            </Typography>
        </CardContent>
    </Card>
  )
}
