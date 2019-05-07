import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './miscStyles.css';

class Header extends Component {
    _isMounted = false
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            route: '',
        }
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        this._isMounted = true
        fetch('/logout')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.refs.logoutButton.style.display = 'none'
                if (this._isMounted) {
                    if (window.location.pathname !== '/login') {
                        this.setState({ redirect: true, route: json.route })
                    }
                }

            })
            .catch((err) => console.log(err))
    }
    redirect() {
        if (window.location.pathname !== '/login') {
            return < Redirect to={this.state.route} />
        }
        else return null
    }
    componentWillUnmount() {
        this._isMounted = false
        return null
    }
    render() {

        return (
            <div className="container-fluid" >
                <div style={{ paddingTop: '15px' }} className='row m-0 justify-content-around'>
                    <div className='row col-md-5 p-0 m-0'>
                        <div className='col align-self-center'>
                            <h1 className="header-title">Van Sale</h1>
                        </div>
                    </div>
                    {this.state.redirect ? this.redirect() : null}
                    <div className='row col-md-5 m-0'>
                        <div className='col align-self-center  nav'>
                            <Link to="/contact">Contact</Link> <code>|</code>
                            <Link to="/about">About us</Link> <code>|</code>
                            <button ref='logoutButton' id='logoutButton' onClick={this.logout} type='button' className='btn btn-link p-0 m-0' style={{ display: 'none', color: '#783f04', fontSize: '17px', fontWeight: '700' }}>Log Out </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header