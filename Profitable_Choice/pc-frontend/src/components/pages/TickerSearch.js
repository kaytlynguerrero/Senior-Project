// dummy component
// This component will be used as a page that is loaded by the router
// eslint-disable-next-line
import React, {useState, useEffect} from "react";
import axios from "axios"
import reportWebVitals from "../../reportWebVitals";
import { Link } from 'react-router-dom';
 

class stockProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {companyProfile: {} };
        
    }
    
    handleChange = (e) => {
        const {id, value} = e.target
       // this.state[id] = value
        this.setState({[id]:value})
        
    }
    
    handleSubmit = (e) => {
        /* This prevents the page from being refreshed when submitting the input */
    e.preventDefault();
    fetch("http://localhost:8080/search_ticker/"+this.state.ticker)
    .then(response => response.json())
    .then(data => this.setState({companyProfile:data}), () => console.log(this.state))
   // console.log(this.state);
    };
    

    render() { 
            return(
                <div className = "create">
                    <form onSubmit= {this.handleSubmit}>
                        <label>Company Search: </label>
                        <input
                        id = "ticker"
                        type = "text"
                        maxLength={4}
                        required
                    /* We are creating a function that is taking an event object and targeting the title value */
                        onChange = {this.handleChange}
                        />
                        <button> Submit </button>
                    </form>
                <h3>
                <ul>
                  <li> Company Name: {this.state.companyProfile.companyName}</li>
                  <li> Industry: {this.state.companyProfile.industry} </li>
                  <li> Company Price: {this.state.companyProfile.price} </li>  
                  <li> Sector: {this.state.companyProfile.sector} </li>
                  <li> Company Symbol: {this.state.companyProfile.symbol} </li> 
                  <li> Website: {this.state.companyProfile.website} </li>   
                </ul>
                </h3>
             </div>

            )   
      }
}
export default stockProfile;