import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Room from './Room';

export default function Home() {

  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    const userInRoom = async () => {
      try {
        const response = await axios.get('/api/user-in-room');
        response.data.code !== '' ? setRoomCode(response.data.code) : setRoomCode(null);
      } catch (err) {
        console.log('error', err);
      }
    }
    userInRoom();
  }, []);

  const renderHomePage = () => {
    return (
      <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            Spotify Music Controller
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained">
            <Button color="primary" to="/join" component={Link}>Join A Room</Button>
            <Button color="secondary" to="/create" component={Link}>Create A Room</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => {
          { roomCode ? (<Redirect to={`/room/${roomCode}`} />) : renderHomePage() }
        }} />
        <Route path='/join' component={JoinRoom} />
        <Route path='/create' component={CreateRoom} />
        <Route path='/room/:roomCode' component={Room} />
      </Switch>
    </Router>
  )
}