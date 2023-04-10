import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect } from 'react';
import axios from 'axios';


export default function ChuckComponent() {

    const [joke, setjoke] = useState(0);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    useEffect(() => {obtainJoke()}, [like, dislike])
    
    function obtainJoke(){
        return axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => setjoke(response.data.value))
        .catch((e) => console.log("Error:", e));
    }

    return (
    <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image="/chuk.jpg"
            alt="chuck"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Chuck the killer!! 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {joke?.length > 0 ? joke : "Click behind button to load a joke" }
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={obtainJoke}>
                New Joke
            </Button>
        </CardActions>
        <div>
            <ThumbUpIcon color="success" onClick={()=> setLike(like + 1)} /> {like}
            &nbsp; &nbsp;  
            <ThumbDownIcon color="error" onClick={() => setDislike(dislike + 1)} /> {dislike}
        </div>
    </Card>
    );
}

