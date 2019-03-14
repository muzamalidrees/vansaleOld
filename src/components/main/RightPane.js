import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class RightPane extends Component {

    render() {

        return (

            <div  style={{ border: '2px solid red' }} className="row col-sm-3 m-0  ">
                <div className="vr col-sm-0.5 rightPanevr" />
                <div className='col-sm-10 icon-contaner' style={{}}>
                    <FontAwesomeIcon className='icon-customer' icon={faUsers} />
                    <br></br>
                    <label>Your<br></br> Customers</label><br></br>
                    <label style={{ color: '#274e13', marginTop: '50px' }}>{this.props.date.toLocaleString()}</label>

                </div>
            </div>

        )
    }
}


export default RightPane