// dummy component
// This component will be used as a page that is loaded by the router

import React, {useState, useEffect} from "react";
import axios from "axios"
import reportWebVitals from "../reportWebVitals";
 

class stockProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {companyProfile:""}
        
    }
    
    handleChange = (e) => {
        const {id, value} = e.target
        this.state[id] = value
    }

    handleSubmit = (e) => {
        /* This prevents the page from being refreshed when submitting the input */
    e.preventDefault();
    fetch("http://localhost:8080/search_ticker/"+this.state.ticker)
    .then(response => response.json())
    .then(data => this.state.companyProfile=data)
    console.log(this.state);
    };


    render() {
        return (
            <div className = "create">
                <h2> Input Ticker! </h2>
                <form onSubmit= {this.handleSubmit}>
                    <label>Ticker: </label>
                    <input
                    id = "ticker"
                    type = "text"
                    maxLength={4}
                    required
                /* We are creating a function that is taking an event object and targeting the title value */
                    onChange = {this.handleChange}
                    />
                    <button> Submit </button>
                    {/* Printing the tracked input from the input box */}
                    <p>
                    </p>
                </form>
            </div>
        )
      }
}
export default stockProfile;