import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
    return (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 500,
                height: 550,
            },
        }}
    >
        <Paper elevation={3}>
            <h1>Thomas Diaque</h1>
            <h2>About Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque in dictum non consectetur a erat nam.
                Ipsum dolor sit amet consectetur adipiscing elit pellentesque.
                Semper eget duis at tellus at urna condimentum mattis.
                Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.
            </p>
        </Paper>
    </Box>
    );
  }