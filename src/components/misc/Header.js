import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './miscStyles.css';

class Header extends Component {

    logout = () => {
        fetch('/logout')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // console.log(this.props)
                // this.refs.log.style.display = 'none';
                // console.log(this.props.history)
                // this.props.history.push(json.route)
            })
            .catch((err) => console.log(err))
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
                            {/* <Link to="/home">Home</Link> <code>|</code> */}
                            <Link to="/contact">Contact</Link> <code>|</code>
                            <Link to="/about">About us</Link> <code>|</code>
                            <Link ref='log' onClick={this.logout.bind(this)} to="">logout </Link> <code>|</code>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header