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
       // this.setState({userName: event.target.value
                        // firstName: event.target.value,
                        // lastName: event.target.value,
                        // email: event.target.value })
       // })
    }
    handleSubmit = event => { 
        event.preventDefault();
        const user = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        console.log({user});
        //console.log(this.state);
        axios.post("http://localhost:8080/register", { user })
        .then( res => {
            console.log(res)
            console.log(res.data)
        })
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