import React, { Component } from 'react';
import Login from './Login'
import { Redirect } from 'react-router'

class SecuredLogin extends Component {
    state = {

    }
    constructor() {
        super()
        fetch('/isAuth')

            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                this.setState({ loggedIn: json.loggedIn })
            })
            .catch((err => {
                console.log(err);
            }))
    }

    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to='/home' />
        }
        else {
            return <Login />
        }

    }
}

export default SecuredLogin