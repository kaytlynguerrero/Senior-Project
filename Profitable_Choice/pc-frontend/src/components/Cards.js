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
      stockNews: [{}]
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
      
                src='images/FMP.jpeg'
                text='Access all stocks discounted cash flow statements, market price, stock market news and learn more about Financial Modeling.'
                label='Financial Modeling Prep'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/investopedia.jpeg'
                text='Investopedia provides investment dictionaries, advice, reviews, ratings and comparisons of financial products.'
                label='Investopedia'
                path='/services'
              />
              <CardItem
                src='images/financial-times.png'
                text='A daily newspaper that focuses on business and economic current affairs.'
                label='Financial Times'
                path='/products'
              />
              <CardItem
                src='images/cnn-markets.jpeg'
                text='A news network that is finance-focused on markets.'
                label='CNN Markets'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Cards;