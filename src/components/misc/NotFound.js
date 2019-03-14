import React, { Component } from 'react';
import './miscStyles.css';



class NotFound extends Component {

    render() {

        return (

            <div style={{ textAlign: 'center', marginTop:`${this.props.mt}`, marginBottom: `${this.props.mb}` }} className="container">
                <h1 className="header-title">404</h1>
                <h3 style={{ color: '#274e13' }}>Oops! Page not found</h3>
                <p style={{ color: '#783f04' }}><b>Sorry, but the page you are looking for is not found.</b></p>
            </div>

        )
    }
}


export default NotFound