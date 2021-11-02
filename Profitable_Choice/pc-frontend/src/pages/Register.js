import axios from "axios";
import React, { Component } from "react";
export default class RegisterUser extends React.Component {
    state = {
        userName: ''
        // firstName: '',
        // lastName: '',
        // email: '',
        // password: ''
    }
    handleChange = event => {
        this.setState({userName: event.target.value,
                        // firstName: event.target.value,
                        // lastName: event.target.value,
                        // email: event.target.value })
        })
    }
    handleSubmit = event => { 
        event.preventDefault();
        const user = {
            userName: this.state.userName
            // firstName: this.state.firstName,
            // lastname: this.state.lastName,
            // email: this.state.email,
            // password: this.state.password
        }
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
                            userName="userName"
                            onChange={this.handleSubmit} />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}