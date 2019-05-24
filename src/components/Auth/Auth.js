import React, { Component } from 'react';
import {connect} from "react-redux"
import axios from "axios"

class Auth extends Component {
    constructor(){
        super()
        this.state={
            username: null,
            password: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleRegister = () => {
        let {username, password} = this.state
        axios.post("/register", {username, password}).then(
            this.props.history.push("/dashboard")
        )
    }
    handleLogin = () => {
        
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} name="username"/>
                <input onChange={this.handleChange} name="password"/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        );
    }
}

export default connect()(Auth);