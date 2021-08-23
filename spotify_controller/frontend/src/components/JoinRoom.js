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
      <Grid xs={12}>
        <TextField error={error} label="Room Code" placeholder="Enter a room code..." value={roomCode} helperText={error} variant="outlined" />
      </Grid>
    </Grid>
  );
}