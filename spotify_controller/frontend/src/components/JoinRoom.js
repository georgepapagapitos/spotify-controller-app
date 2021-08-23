import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@material-ui/core';

export default function JoinRoom() {

  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState("");

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join A Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField error={error} label="Room Code" placeholder="Enter a room code..." value={roomCode} helperText={error} variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">Enter Room</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  );
}