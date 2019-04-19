import React, { Component } from 'react';
import RoleArea from './RoleArea';
import { Redirect } from 'react-router';

class SecuredRoleArea extends Component {
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
            return <RoleArea />
        }

    }
}

export default SecuredRoleArea