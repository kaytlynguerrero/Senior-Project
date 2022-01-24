import React, {useState, useEffect} from "react";
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';


// class Cards extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {companyProfile:{}};
   
//   }
//   handleChange = (e) => {
//     const {id, value} = e.target
//     this.setState({[id]:value})
//   }

//   // going to call whatever we are going to pass and and get the response (graph data?)
//   handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/search_ticker/"+this.state.ticker)
//     .then(response => response.json())
//     .then(data => this.setState({companyProfile:data}), () => console.log(this.state))
//   };
  
 
//   // redirectToGraph = () => {
//   //   const { history } = this.props;
//   //   if(history) history.push('/graphResults');
//   //  }
 
  

//   render() {
//   // const { history } = this.props;
//     return(
//       <div className='cards'>
//         <div className='cards__container'>
    
//         <form onSubmit= {this.handleSubmit}>
//                         <label>Company Search: </label>
//                         <input
//                         id = "ticker"
//                         type = "text"
//                         maxLength={4}
//                         required
//                     /* We are creating a function that is taking an event object and targeting the title value */
//                         onChange = {this.handleChange}
//                         />
//                         <button> Submit </button>
//                     </form>
//                     <h3>
//                 <ul>
//                   <li> Company Name: {this.state.companyProfile.companyName}</li>
//                   <li> Industry: {this.state.companyProfile.industry} </li>
//                   <li> Company Price: {this.state.companyProfile.price} </li>  
//                   <li> Sector: {this.state.companyProfile.sector} </li>
//                   <li> Company Symbol: {this.state.companyProfile.symbol} </li> 
//                   <li> Website: {this.state.companyProfile.website} </li>   
//                 </ul>
//                 </h3>
            
//         {/* <form onSubmit={this.handleSubmit}>
//         <h1>Search Company Symbol! </h1>
//           <input
//           id="ticker"
//           type="text"
//           maxLength={4}
//           required
//           onChange = {this.handleChange}
//           />
//           <button onClick={this.redirectToGraph} > Submit </button>
//         </form> */}
        
//       </div>
//       </div>
            
 
//     )
//   }
// }
// export default Cards;



function Cards() {


  return (
    <div className='cards'>
     
      <div className='cards__container'>

        <div className='cards__wrapper'>

          <ul className='cards__items'>
          {/* <Link to ={{pathname: "https://www.marketwatch.com/markets" }} target="_blank" /> */}
            <CardItem 
              src='images/marketwatch.jpeg'
              text='Explore up to date financial data'
              label='Market Watch'
              path='https://www.marketwatch.com/markets'

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
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;