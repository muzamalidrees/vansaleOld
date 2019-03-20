import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class FunctionLayer extends Component {

    render() {

        return (

            <div style={{ border: 'none' }} className='row m-0 '>
                <div className='row col-12 m-0 justify-content-center'>

                    <div className='col-md-2.5 mb-2  button-contaner '>
                        <Link to="/customers/add"> <button ref='addCustomer'>Add New Customer</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  button-contaner '>
                        <Link to="/customers/import"> <button ref='importCustomer'>Import Customers</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  button-contaner '>
                        <Link to="/customers/export"> <button ref='exportCustomer'>Export Customers</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  button-contaner '>
                        <Link to="/priceGroups/home"> <button ref='priceGroups'>Price Groups</button> </Link>
                    </div>
                </div>
                <SearchInputLayer
                    searchLimit={this.props.searchLimit}
                    searchFilter={this.props.searchFilter}
                    searchText={this.props.searchText}
                    onSearchFilterChange={this.props.onSearchFilterChange}
                    onSearchTextChange={this.props.onSearchTextChange}
                    onSearchLimitChange={this.props.onSearchLimitChange}
                />


            </div>


        )
    }
}


export default FunctionLayer