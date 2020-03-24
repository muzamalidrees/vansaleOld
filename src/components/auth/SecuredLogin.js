import React, { Component } from 'react';
import Login from './Login'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


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
    // componentDidMount() {
    //     console.log(this.props.user)

    //     console.log(this.props.user)
    // }

    render() {
        if (this.state.loggedIn == true) {
            return <Redirect to='/home' />
        }
        else {
            return <Login changeUserState={this.props.changeUserState} />
        }

    }
}

const mapStateToProps = (store) => {
    return {
        user: store.loginReducer
    }
}

export default
    connect(mapStateToProps)
        (SecuredLogin)