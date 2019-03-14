import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './miscStyles.css';

class Header extends Component {

    render() {

        return (

            <div className="container-fluid" >
                <div style={{ paddingTop: '30px' }} className='row m-0 justify-content-around'>
                    <div  className='row col-md-5 p-0 m-0'>
                        <div  className='col align-self-center'>
                            <h1 className="header-title">Van Sale</h1>
                        </div>
                    </div>
                    <div  className='row col-md-5 m-0'>
                        <div  className='col align-self-center  nav'>
                            <Link to="/home">Home</Link> <code>|</code>
                            <Link to="/contact">Contact</Link> <code>|</code>
                            <Link to="/about">About us</Link> <code>|</code>
                            <Link to="/logout">logout </Link> <code>|</code>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header