import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Room from './Room';

export default function Home() {

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
        <Route exact path='/'>{renderHomePage()}</Route>
        <Route path='/join' component={JoinRoom} />
        <Route path='/create' component={CreateRoom} />
        <Route path='/room/:roomCode' component={Room} />
      </Switch>
    </Router>
  )
}