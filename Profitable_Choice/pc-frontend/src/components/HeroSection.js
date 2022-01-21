import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { TutorialButton } from './TutorialButton';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LEARNING AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <TutorialButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BEGIN TUTORIAL <i className='far fa-play-circle' />
        </TutorialButton>
      </div>
    </div>
  );
}

export default HeroSection;