import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';

// Sample data for portfolio projects
const projects = [
  { title: 'ViMap', 
  description: 'Work as iOS Developer at IOT Link Da Nang. Use map sdk and build navigation sdk, implement text to speech features.', 
  image: 'https://map.map4d.vn/mapAppRoot/image/logo.svg', 
  url: 'https://apps.apple.com/vn/app/map4d/id1460565423' },
  { title: 'Nunchuk', 
  description: 'Work as freelancer under Nunchuk to build architecture and workflow for this Bitcoin Wallet.', 
  image: 'https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Nunchuk_OG_72_1bae4e68d4.jpg', 
  url: 'https://apps.apple.com/us/app/nunchuk-bitcoin-wallet/id1563190073' },
  { title: 'Awedio', 
  description: 'Work as IC under SPH Media Limited to maintain and build new features for a Radio app streaming', 
  image: 'https://www.awedio.sg/_next/static/media/7d12e98ee2ca5895617c31e08c1a47dd.9ebcffbd.png', 
  url: 'https://apps.apple.com/sg/app/awedio-by-sph/id554075345' },
  { title: 'Chroma', 
  description: 'Work as freelancer hourly contractor under Scopic Software to maintain and build new feature using AI to generate Image as user prefer. Color book application help user to relax and making beautiful picture', 
  image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/36/36/47/3636478a-9fc4-457c-0b7e-6a582769fe0d/AppIcon-1x_U007epad-0-10-0-sRGB-85-220-0.png/460x0w.webp', 
  url: 'https://apps.apple.com/vn/app/chroma-adult-coloring-book/id1170208778?l=vi' },
  
  // Add more projects as needed
];

// Sample data for open-source projects
const openSourceProjects = [
  { title: 'Github', description: 'All of my open sources', 
  image: 'path_to_image', 
  url: 'https://github.com/congtung10t2' },
  { title: 'Twitter Lite with Firebase', 
  description: 'This is demo how to use firebase to develop social application', 
  image: 'path_to_image', url: 'https://github.com/congtung10t2/TwitterDemo' },
  { title: 'iOS WebRTC video call', 
  description: 'This is show how to use web rtc to do video call through firebase.', 
  image: 'path_to_image', url: 'https://github.com/congtung10t2/VideoCallWebRTCFirebase' },
  { title: 'iOS Map4d Navigation SDK', 
  description: 'This is navigation sdk for Map4d clients', 
  image: 'https://map.map4d.vn/mapAppRoot/image/logo.svg', 
  url: 'https://github.com/map4d/map4d-navigation-ios-sdk' }
  // Add more open-source projects as needed
];

// Sample data for open-source projects
const crossplatformProjects = [
  { title: 'Bee Legends', 
  description: 'This is 2D game I have built in my university.', 
  image: 'https://image.winudf.com/v2/image/Y29tLmNvZHRlYW0uQmVlTGVnZW5kc19pY29uXzBfZmM1N2FjMWY/icon.webp?w=280&fakeurl=1&type=.webp', 
  url: 'https://apkpure.com/bee-legends/com.codteam.BeeLegends' },

];

function Portfolio() {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div" sx={{ mt: 4 }}>
        My Professional Apps
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
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div variant="contained" color="primary" sx={{ mt: 1 }}>
                    Download on Appstore
                  </div>
                </a>
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

      <Divider sx={{ my: 5 }} />

      <Typography variant="h4" gutterBottom component="div">
        Game Development
      </Typography>
      <Grid container spacing={2}>
        {crossplatformProjects.map((project, index) => (
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
                    View more
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
