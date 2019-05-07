import React, { Component } from 'react';
import CustomerArea from './CustomerArea';
import { Redirect } from 'react-router';

class SecuredCustomerArea extends Component {
    componentWillUnmount() {
        this._isMounted = false;
    }
    _isMounted = false;

    state = {
        user: '',
        call: false
    }
    constructor() {
        super()
        this._isMounted = true;
        fetch('/isAuth')

            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                if (this._isMounted) {
                    this.setState({ loggedIn: json.loggedIn, user: json.user, call: true })
                }
            })
            .catch((err => {
                console.log(err);
            }))
    }


    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        else if (this.state.call) {
            // console.log(this.state.user);
            return <CustomerArea
                user={this.state.user} />
        }
        else return null

    }
}

export default SecuredCustomerArea