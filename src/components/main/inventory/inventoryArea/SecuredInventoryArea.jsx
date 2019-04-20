import React, { Component } from 'react';
import InventoryArea from './InventoryArea';
import { Redirect } from 'react-router';

class SecuredInventoryArea extends Component {
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
        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        else {
            return <InventoryArea />
        }

    }
}

export default SecuredInventoryArea