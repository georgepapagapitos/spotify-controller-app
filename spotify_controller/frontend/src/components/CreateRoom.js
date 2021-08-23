import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CreateRoom() {

  const defaultVotes = 2;

  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(defaultVotes);

  const handleVotesChange = (e) => {
    setVotesToSkip(Number(e.target.value));
  }

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true : false);
  }

  const handleCreateRoom = async () => {
    try {
      const response = await axios.post('/api/create', { votes_to_skip: votesToSkip, guest_can_pause: guestCanPause });
      console.log(response.data);
    } catch (err) {
      console.log('error', err)
    }

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     votes_to_skip: votesToSkip,
    //     guest_can_pause: guestCanPause
    //   })
    // };
    // fetch('/create', requestOptions).then(response => response.json).then(data => console.log(data));
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component='h4' variant='h4'>
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText component="div">
            <div align="center">
              Guest Control of Playback State
            </div>
          </FormHelperText>
          <RadioGroup row defaultValue='true' onChange={handleGuestCanPauseChange}>
            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField required={true} type="number" defaultValue={defaultVotes} inputProps={{ min: 1, style: { textAlign: "center" } }} onChange={handleVotesChange} />
          <FormHelperText component="div">
            <div align="center">
              Votes Required To Skip Song
            </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained" onClick={handleCreateRoom}>Create A Room</Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  );
}