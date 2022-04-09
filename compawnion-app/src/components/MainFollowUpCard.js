import React from 'react'
import { Box, Card, CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions, IconButton, Button, Collapse, TextField } from '@mui/material'
import { Pets, Bookmark, Comment } from '@mui/icons-material/'
import { red } from '@mui/material/colors'
import { styled } from '@mui/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({theme}) => ({
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),  
}))

export default function MainFollowUpCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{marginLeft: "auto"}}
            >
                <Comment />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <form>
                    <TextField
                    multiline
                    rows={5}
                    label="Comentario"
                    placeholder='Comentar'
                    variant='outlined'
                    fullWidth
                    required
                    />
                    <Box textAlign="center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="button"
                            sx={{
                                m:1,
                                width: '125px',
                                fontFamily: "'Baloo Da 2', 'cursive'",
                                fontSize: "20px"
                            }}
                        >Comentar</Button>
                    </Box>
                </form>
            </CardContent>
        </Collapse>
    </Card>
  )
}
