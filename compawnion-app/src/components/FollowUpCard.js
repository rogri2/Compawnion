import React from 'react'
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import { Pets, Bookmark } from '@mui/icons-material/'
import { red } from '@mui/material/colors'

export default function FollowUpCard() {
    return (
    <Card sx={{m:5}}>
        <CardHeader 
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
            }
            title="Post"
            subheader="04 de Abril de 2022"
        />
        <CardMedia
            component="img"
            height="500"
            image="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-por-que-los-perros-mueven-la-cola.png?itok=Kw0lwckl"
            alt="post"
        />
        <CardContent>
            <Typography variant="body2">
                sdfkjghsdf skdjfhglksdjfhg lsdkjfgh lksdjfhg lksjdfhg lksjdfh lskdjfhg lsdkjfh glskdjfh glskdjf glskdjf ghlskdjfh glksdjf hglksjd fhg
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="like">
                <Pets />
            </IconButton>
            <IconButton aria-label="bookmark">
                <Bookmark />
            </IconButton>
        </CardActions>
    </Card>
    )
}
