import Layout from 'Layout';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const project = [
  {
  image: "/img/IMG_1553.jpeg",
  href:"https://run-cmc.net/",
  title: "RunCMC",
  description: "Run//CMC is a full stack web application that curates a music collage utilizing album artwork (inspired by topsters), ignites music discovery, and provides an online community platform to discuss favorite albums and topsters. Run//CMC was built by five web developers using the following technologies: HTML, CSS, MDBootstrap, JavaScript, jQuery, Spring Boot, ThymeLeaf, Java, MySQL, and the Spotify Web API. Check out the deployed app here."
},
{
  image: "/img/ad-image.png",
  href:"https://github.com/Team-1-Adlister/adlister-project",
  title: "The Ad-Lister",
  description: "The Ad-lister Project was a group project using backend server side logic for a dynamic user experience.  It utilizes Object-Oriented Programming via Java.  Communication to the server is done via MySQL, Javabeans, Servlets, and JSPs. The project has the ability to perform CRUD operations and is implemented using the MVC (Model-View-Controller) methodology. The program is designed to perform similar to Craigslist. It provides a user the freedom to login to the site, create and view ads, as well as search and delete ads accordingly using intentional redirection as the user navigates through the site."
},
{
  image: "/img/IMG_1553.jpeg",
  href:"https://github.com/OJ-Albert-Movies-App",
  title: "Movie Project",
  description: "The Movie Project was created dynamically using the movie database API that allows users to search movie titles and add them to their saved movie list.  Users can rate movie titles in real time, view box art and movie descriptions at the click of a button.  This was a paired programming project utilizing HTML, CSS, JavaScript, and jQuery to provide CRUD implementation.."
},
{
  image: "/img/IMG_1553.jpeg",
  href:"https://github.com/ojhill/codeup-web-exercises/blob/main/js/weather_map.js",
  title: "Weather Map Project",
  description: "The Weather Map Project was developed utilizing the Mapbox API, OpenWeather API, HTML, CSS, JavaScript, and Bootstrap  It allows users to dynamically select a city to view an interactive map, look up the current weather conditions and five day forecast.."
},
{
  image: "/vercel.svg",
  href:"/tictactoe",
  title: "tic tac toe",
  description: "tic tac toe react tuturial"
}
]
export default function Projects (){
return <Layout>
  <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
  {project.map((project) => (
    <Card key={project.href} sx ={{ maxWidth: 300 }}>
    <a href={project.href} tatget="blank" rel="noreferrer">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt="run cmc logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </a>
    </Card>
    ))}
    </div>
</Layout>;
}