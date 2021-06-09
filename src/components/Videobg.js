import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Videobg.css';

function Videobg() {
  return (
    <div className='video-container'>
      <video src='/drive.mp4' autoPlay loop muted />
      <h1>Looking for music?</h1>
      <p>Just try Musix!</p>
      <div className='video-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Get started <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Videobg;