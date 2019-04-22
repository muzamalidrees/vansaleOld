import React, { Component } from 'react';
import CustomerArea from './CustomerArea';
import { Redirect } from 'react-router';

class SecuredCustomerArea extends Component {
    state = {
        user: '',
        call: false
    }
    constructor() {
        super()
        fetch('/isAuth')

            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                this.setState({ loggedIn: json.loggedIn, user: json.user, call: true })

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