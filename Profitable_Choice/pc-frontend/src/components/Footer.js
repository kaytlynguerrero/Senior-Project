import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Profitable Choice
        </p>
        <p className='footer-subscription-text'>
          Sabur Khan and Kaytlyn Guerrero
        </p>
      
      </section>
      
    </div>
  );
}

export default Footer;