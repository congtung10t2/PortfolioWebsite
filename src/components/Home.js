import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Welcome!</Typography>
      <Typography variant="body1">
        Welcome to my professional portfolio website. Here you can find some of the iOS applications I have developed.
      </Typography>
    </Box>
  );
}

export default Home;
