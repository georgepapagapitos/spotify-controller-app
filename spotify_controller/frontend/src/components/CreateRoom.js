import React from 'react';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CreateRoom() {
  const defaultVotes = 2;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component='h4' variant='h4'>
          Create A Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">
              Guest Control of Playback State
            </div>
          </FormHelperText>
          <RadioGroup row defaultValue='true'>
            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}