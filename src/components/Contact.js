import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailTo = "congtung10t2@gmail.com";
    const subject = `New message from ${name}`;
    const emailBody = `Sender's Name: ${name}\nSender's Email: ${email}\n\nMessage: ${message}`;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Your Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
        Send Message
      </Button>
      <Typography variant="body2" sx={{ mt: 4 }}>
        Connect with me:
      </Typography>
      <div/>
      <Stack direction="row" spacing={2} justifyContent="center">
        <a href="https://github.com/congtung10t2" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/hoangcongtung/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
      </Stack>
    </Box>
  );
}

export default Contact;
