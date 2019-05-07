import React, { Component } from 'react';
import Home from './Home'
import { Redirect } from 'react-router'

class SecuredHome extends Component {
    _isMounted = false
    state = {

    }
    constructor() {
        super()
        this._isMounted = true
        fetch('/isAuth')

            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                if (this._isMounted) {

                    this.setState({ loggedIn: json.loggedIn })
                }
            })
            .catch((err => {
                console.log(err);
            }))
    }
    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        else {
            return <Home />
        }

    }
}

export default SecuredHome