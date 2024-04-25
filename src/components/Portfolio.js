import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';

// Sample data for portfolio projects
const projects = [
  { title: 'ViMap', description: 'Work as iOS Developer at IOT Link Da Nang. Use map sdk and build navigation sdk, implement text to speech features.', image: 'https://map.map4d.vn/mapAppRoot/image/logo.svg' },
  { title: 'Nunchuk', description: 'This is iOS Bitcoin Wallet Application', image: 'https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Nunchuk_OG_72_1bae4e68d4.jpg' },
  { title: 'Awedio', description: 'Singapore radio app streaming', image: 'https://www.awedio.sg/_next/static/media/7d12e98ee2ca5895617c31e08c1a47dd.9ebcffbd.png' },
  
  // Add more projects as needed
];

// Sample data for open-source projects
const openSourceProjects = [
  { title: 'Twitter Lite with Firebase', description: 'This is demo how to use firebase to develop social application', image: 'path_to_image', url: 'https://github.com/congtung10t2/TwitterDemo' },
  { title: 'iOS WebRTC video call', description: 'This is show how to use web rtc to do video call through firebase.', image: 'path_to_image', url: 'https://github.com/congtung10t2/VideoCallWebRTCFirebase' },
  // Add more open-source projects as needed
];

function Portfolio() {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div" sx={{ mt: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card height='250'>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Typography variant="h4" gutterBottom component="div">
        Open Source Development
      </Typography>
      <Grid container spacing={2}>
        {openSourceProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div variant="contained" color="primary" sx={{ mt: 1 }}>
                    View on GitHub
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
