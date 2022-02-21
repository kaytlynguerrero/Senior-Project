import React, {useState, useEffect} from "react";
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stockNews: [{},{},{},{},{},{},{},{}]
    };
  }
  fetchStockNews(){
    const pointerToThis = this;
    let API_CALL = `http://localhost:8080/homepageNews`;

    fetch(API_CALL)
    .then(response => response.json())
    .then(data => this.setState({stockNews:data}), () => console.log(this.state))
    console.log(pointerToThis);
  }
  componentDidMount() {
    this.fetchStockNews();
  }

  render(){
    return (
      <div className='cards'>
       
        <div className='cards__container'>
  
          <div className='cards__wrapper'>
  
            <ul className='cards__items'>
            {/* <Link to ={{pathname: "https://www.marketwatch.com/markets" }} target="_blank" /> */}
              <CardItem 
                src={this.state.stockNews[0].image}
                text={this.state.stockNews[0].text}
                label={this.state.stockNews[0].title}
                path={this.state.stockNews[0].url}
              />
              <CardItem 
      
                src={this.state.stockNews[1].image}
                text={this.state.stockNews[1].text}      
                label={this.state.stockNews[1].title} 
                path={this.state.stockNews[1].url} 
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
               src={this.state.stockNews[2].image}
               text={this.state.stockNews[2].text}      
               label={this.state.stockNews[2].title} 
               path={this.state.stockNews[2].url} 
              />
              <CardItem
                src={this.state.stockNews[3].image}
                text={this.state.stockNews[3].text}      
                label={this.state.stockNews[3].title} 
                path={this.state.stockNews[3].url} 
              />
              <CardItem
                src={this.state.stockNews[4].image}
                text={this.state.stockNews[4].text}      
                label={this.state.stockNews[4].title} 
                path={this.state.stockNews[4].url} 
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Cards;