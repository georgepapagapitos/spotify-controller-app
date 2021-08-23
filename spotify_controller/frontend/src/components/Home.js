import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><p>This is the home page</p></Route>
        <Route path='/join' component={JoinRoom} />
        <Route path='/create' component={CreateRoom} />
      </Switch>
    </Router>
  )
}