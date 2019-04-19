import React, { Component } from 'react';
import NewPriceGroup from './NewPriceGroup';
import { Redirect } from 'react-router';

class SecuredNewPriceGroup extends Component {
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
        if (this.state.loggedIn == false) {
            return <Redirect to='/login' />
        }
        else {
            return <NewPriceGroup />
        }

    }
}

export default SecuredNewPriceGroup