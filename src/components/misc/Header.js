import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './miscStyles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            route: '',
        }
        this.logout = this.logout.bind(this)
        // this.showLogout = this.showLogout.bind(this)
    }

    logout = () => {
        fetch('/logout')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // console.log(this.props)
                // this.logOutBtn.style.display = 'none'
                // this.logOutBtnCode.style.display = 'none'
                this.setState({ redirect: true, route: json.route })
                document.getElementById('logoutButton').innerHTML = 'Sign Up'
                // console.log(this.props.history)
                // this.props.history.push(json.route)
            })
            .catch((err) => console.log(err))
    }
    // showLogout = (x) => {
    // this.setState({ showLogout: x })
    // if (x) {

    //     this.logOutBtn.style.display = ''
    //     this.logOutBtnCode.style.display = ''
    // }
    // else {
    //     this.logOutBtn.style.display = 'none'
    //     this.logOutBtnCode.style.display = 'none'
    // }
    // }

    render() {

        return (

            <div className="container-fluid" >
                <div style={{ paddingTop: '15px' }} className='row m-0 justify-content-around'>
                    <div className='row col-md-5 p-0 m-0'>
                        <div className='col align-self-center'>
                            <h1 className="header-title">Van Sale</h1>
                            {this.state.redirect ? < Redirect to={this.state.route} /> : null}
                        </div>
                    </div>
                    <div className='row col-md-5 m-0'>
                        <div className='col align-self-center  nav'>
                            <Link to="/contact">Contact</Link> <code>|</code>
                            <Link to="/about">About us</Link> <code>|</code>
                            <button id='logoutButton' onClick={this.logout} ref={e => this.logOutBtn = e} type='button' className='btn btn-link p-0 m-0' style={{ display: '', color: '#783f04', fontSize: '17px', fontWeight: '700' }}></button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header