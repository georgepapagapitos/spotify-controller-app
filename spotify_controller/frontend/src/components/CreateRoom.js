import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CreateRoom() {

  const defaultVotes = 2;

  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotesToSkip] = useState(defaultVotes);

  const history = useHistory();

  const handleVotesChange = (e) => {
    setVotesToSkip(Number(e.target.value));
  }

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true : false);
  }

  const handleCreateRoom = async () => {
    try {
      const response = await axios.post('/api/create', { votes_to_skip: votesToSkip, guest_can_pause: guestCanPause });
      history.push('/room/' + response.data.code);
    } catch (err) {
      console.log('error', err)
    }
  }

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <Typography component='h4' variant='h4'>
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormHelperText component="div">
            <div>
              Guest Control of Playback State
            </div>
          </FormHelperText>
          <RadioGroup row defaultValue='true' onChange={handleGuestCanPauseChange}>
            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField required={true} type="number" defaultValue={defaultVotes} inputProps={{ min: 1, style: { textAlign: "center" } }} onChange={handleVotesChange} />
          <FormHelperText component="div">
            <div>
              Votes Required To Skip Song
            </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="contained" onClick={handleCreateRoom}>Create A Room</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="contained" to="/" component={Link}>Back</Button>
      </Grid>
    </Grid>
  );
}