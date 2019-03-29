import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class RightPane extends Component {

    render() {

        return (

            <div style={{ border: 'none' }} className="row col-sm-3 m-0 p-0">
                <div className="vr col-sm-0.5 rightPanevr" />
                <div className='col-sm-10' style={{ border: 'none', margin: '0px', paddingTop: '20px', color: '#783f04', fontSize: '35px', fontWeight: '700', textAlign: 'center' }}>
                    <FontAwesomeIcon style={{ color: '#274e13', marginTop: '0px', marginBottom: '30px', fontSize: '75px' }} icon={faUsers} />
                    <br></br>
                    {this.props.label}
                    <label style={{ color: '#274e13', marginTop: '30px' }}>{this.props.date.toLocaleString()}</label>

                </div>
            </div >

        )
    }
}


export default RightPane