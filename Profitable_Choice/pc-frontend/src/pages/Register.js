import axios from "axios";
import React, { Component } from "react";
export default class Register extends React.Component {
    state = {
        userName: '',
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: ''

    }
    handleChange = event => {
        const {id, value} = event.target
        this.setState({[id]:value})
    }

    handleSubmit = async event => { 
        event.preventDefault();

         const requestData = {
        method: 'POST',
        headers:{
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      console.log(requestData);
      const response = await fetch('http://localhost:8080/register', requestData);
      const data = await response.json();
      console.log(data);
      
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: 
                        <input type="text"
                            id ="userName"
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        First Name:
                        <input type ="text"
                            id = "firstName"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input type ="text"
                            id = "lastName"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Gender:
                        <input type ="text"
                            id = "gender"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input type ="text"
                            id = "email"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input type ="text"
                            id = "password"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Confirm Password:
                        <input type ="text"
                            id = "confirmPassword"
                            type = "text"
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}