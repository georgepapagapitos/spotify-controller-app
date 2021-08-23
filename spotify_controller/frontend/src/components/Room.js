import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Room() {

  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);
  const { roomCode } = useParams();

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await axios.get('/api/get' + '?code=' + roomCode);
        setVotesToSkip(response.data.votes_to_skip);
        setGuestCanPause(response.data.guest_can_pause);
        setIsHost(response.data.is_host);
      } catch (err) {
        console.log('error', err);
      }
    }
    getRoomDetails();
  }, [])

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause ? 'yes' : 'no'}</p>
      <p>Host: {isHost ? 'yes' : 'no'}</p>
    </div>
  );
}