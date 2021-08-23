import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid, Typography } from '@material-ui/core';

export default function JoinRoom() {

  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setRoomCode(e.target.value);
  }

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField error={error} label="Room Code" placeholder="Enter a room code..." value={roomCode} helperText={error} variant="outlined" onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleClick}>Enter Room</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  );
}