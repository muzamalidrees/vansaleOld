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
        this.showLogout = this.showLogout.bind(this)
    }

    logout = () => {
        fetch('/logout')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // console.log(this.props)
                this.logOutBtn.style.display = 'none'
                this.logOutBtnCode.style.display = 'none'
                this.setState({ redirect: true, route: json.route })
                // console.log(this.props.history)
                // this.props.history.push(json.route)
            })
            .catch((err) => console.log(err))
    }
    showLogout=()=> {
        this.logOutBtn.style.display = ''
        this.logOutBtnCode.style.display = ''
    }
    callLogOut = () => {
        if (this.state.redirect) {
            return < Redirect to={this.state.route} />
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
                            {/* <Link to="/home">Home</Link> <code>|</code> */}
                            <Link to="/contact">Contact</Link> <code>|</code>
                            <Link to="/about">About us</Link> <code>|</code>
                            {this.callLogOut()}
                            <button onClick={this.logout} ref={e => this.logOutBtn = e} type='button' className='btn btn-link p-0 m-0' style={{ display: 'none', color: '#783f04', fontSize: '17px', fontWeight: '700' }}>LogOut</button> <code style={{display:'none'}} ref={e => this.logOutBtnCode = e}>|</code>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Header