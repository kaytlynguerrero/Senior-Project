import React, {useState, useEffect} from "react";
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom';


class Cards extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
   
  }
  handleChange = (e) => {
    const {id, value} = e.target
    this.setState({[id]:value})
  }

  // going to call whatever we are going to pass and and get the response (graph data?)
  handleSubmit = (e) => {
    e.preventDefault();
  };
  
  // routeChange=()=> {
  //   let path = `/services`;
  //   let history = useHistory();
  //   history.push(path);
  // }
  redirectToGraph = () => {
    const { history } = this.props;
    if(history) history.push('/graphResults');
   }
 
  


  render() {
  const { history } = this.props;
    return(
      <div className='cards'>
        <div className='cards__container'>
        <form onSubmit={this.handleSubmit}>
        <h1>Search Company Symbol! </h1>
          <input
          id="ticker"
          type="text"
          maxLength={4}
          required
          onChange = {this.handleChange}
          />
          <button onClick={this.redirectToGraph} > Submit </button>
        </form>
      </div>
      </div>
      
    )
  }
}
export default withRouter(Cards);



// function Cards() {

//   return (
//     <div className='cards'>
//       <h1>Search Company Symbol!</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-9.jpg'
//               text='Explore the hidden waterfall deep inside the Amazon Jungle'
//               label='Adventure'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-2.jpg'
//               text='Travel through the Islands of Bali in a Private Cruise'
//               label='Luxury'
//               path='/services'
//             />
//           </ul>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-3.jpg'
//               text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
//               label='Mystery'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-4.jpg'
//               text='Experience Football on Top of the Himilayan Mountains'
//               label='Adventure'
//               path='/products'
//             />
//             <CardItem
//               src='images/img-8.jpg'
//               text='Ride through the Sahara Desert on a guided camel tour'
//               label='Adrenaline'
//               path='/sign-up'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;