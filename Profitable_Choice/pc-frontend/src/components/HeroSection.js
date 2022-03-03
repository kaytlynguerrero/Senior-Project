import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import useState from 'react-dom';


import { TutorialButton } from './TutorialButton';
import { withRouter } from 'react-router';


class HeroSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stockNews: [{}]
    };
  }

  handleChange = (e) => {
    const {id, value} = e.target
       // this.state[id] = value
        this.setState({[id]:value})
  }

  handleSubmit = (e) => {
    /* This prevents the page from being refreshed when submitting the input */
  e.preventDefault();  
  let uppercasetext = this.state.ticker.toUpperCase();
  this.props.history.push( {pathname: "/graphResults",
      state: {ticker: uppercasetext}})
  //console.log(this.state);
};



render() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LEARNING AWAITS</h1>

    <div className="form-container">

    <form onSubmit= {this.handleSubmit}>

    <label>Company Search: </label>

    <br/>
    <input className='input-container'
    id = "ticker"
    type = "text"
    maxLength={6}
    required
/* We are creating a function that is taking an event object and targeting the title value */
    onChange = {this.handleChange}
    />
    <button className="submit-button"> Submit </button>
  </form>
    </div>
      

      {/* <div className='hero-btns'>
        <TutorialButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Submit <i className='far fa-play-circle' />
        </TutorialButton> */}
      </div>
    // </div>
  );
}
}

  

export default withRouter(HeroSection);