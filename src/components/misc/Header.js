    import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './miscStyles.css';
import Logout from '../auth/Logout';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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

                    <div className='row col-md-5 m-0'>
                        <div className='col align-self-center  nav'>
                            <Link style={{ display: 'none' }} id='homeLink' to="/home">Home</Link> <code style={{ display: 'none' }} id='homeLinkCode'>|</code>
                            {/* <Link to="/contact">Contact</Link> <code>|</code> */}
                            {/* <Link to="/about">About us</Link> <code>|</code> */}

                            {/*  calling Logout button  */}
                            {this.props.loggedIn ? <Logout loggedOut={this.props.loggedOut} /> : null}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header