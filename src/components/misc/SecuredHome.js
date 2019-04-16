import React, { Component } from 'react';
import Home from './Home'
import { Redirect } from 'react-router'

class SecuredHome extends Component {
    state = {
        loggedIn: false,
    }
    constructor() {
        super()
        fetch('/home')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({ loggedIn: json.loggedIn })
            })
            .catch((err => {
                console.log(err);
            }))
    }

    render() {
        if (this.state.loggedIn == false) {
            return <Redirect to='/login' />
        }
        else {
            return <Home />
        }

    }
}

export default SecuredHome