import Layout from 'Layout';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Projects (){
return <Layout>
  <div style={{padding: "20px"}}>
  <a href="https://run-cmc.net/" tatget="blank" rel="noreferrer">
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Run-CMC.net
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Run//CMC is a full stack web application that curates a music collage utilizing album artwork (inspired by topsters), ignites music discovery, and provides an online community platform to discuss favorite albums and topsters. Run//CMC was built by five web developers using the following technologies: HTML, CSS, MDBootstrap, JavaScript, jQuery, Spring Boot, ThymeLeaf, Java, MySQL, and the Spotify Web API. Check out the deployed app here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>
</Layout>;
}