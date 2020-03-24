import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../misc/miscStyles.css';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            route: '',
        }
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        fetch('/logout')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // hiding some elements
                document.getElementById('homeLink').style.display = 'none'
                document.getElementById('homeLinkCode').style.display = 'none'
                this.setState({ redirect: true, route: json.route })
                this.props.loggedOut();

            })
            .catch((err) => console.log(err))
    }

    render() {
        let shouldRedirect = "/login" !== window.location.pathname
        if (this.state.redirect && shouldRedirect) {
            return < Redirect to={this.state.route} />
        }

        return (

            <button ref='logoutButton' id='logoutButton' onClick={this.logout} type='button' className='btn btn-link p-0 m-0' style={{ color: '#783f04', fontSize: '17px', fontWeight: '700' }}>Log Out </button>
        )
    }
}

export default Logout