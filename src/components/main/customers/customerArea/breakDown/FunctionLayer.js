import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class FunctionLayer extends Component {

    render() {

        return (

            <div style={{ border: '1px solid red' }} className='row p-0 m-0'>
                <div style={{ border: '1px solid black' }} className='row m-0 p-0'>

                    <div className='col m-0 p-0 button-contaner '>
                        <Link to="/customers/addCustomer"> <button ref='addCustomer'>Add New Customer</button> </Link>
                    </div>
                    <div className='col m-0 p-0 button-contaner '>
                        <Link to="/customers/import"> <button ref='importCustomer'>Import Customers</button> </Link>
                    </div>
                    <div className='col m-0 p-0 button-contaner '>
                        <Link to="/customers/export"> <button ref='exportCustomer'>Export Customers</button> </Link>
                    </div>
                    <div className='col m-0 p-0 button-contaner '>
                        <Link to="/customers/pricegroups"> <button ref='priceGroups'>Price Groups</button> </Link>
                    </div>
                </div>

                <SearchInputLayer />

            </div>


        )
    }
}


export default FunctionLayer