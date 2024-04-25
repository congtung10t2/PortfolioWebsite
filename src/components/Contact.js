import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Your Email" type="email" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Send Message
      </Button>
    </Box>
  );
}

export default Contact;
