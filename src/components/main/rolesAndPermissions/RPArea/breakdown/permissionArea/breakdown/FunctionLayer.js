import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';


class FunctionLayer extends Component {

    render() {

        return (

            <div style={{ border: 'none' }} className='row m-0 '>
                <div className='row col-12 m-0 justify-content-center'>

                    <div className='col-md-2.5 mb-2  RPbutton-contaner '>
                        <Link to="/rolesAndPermissions/p/add"> <button >Add New Permission</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  RPbutton-contaner '>
                        <Link to="/rolesAndPermissions/p/import"> <button >Import Permissions</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  RPbutton-contaner '>
                        <Link to="/rolesAndPermissions/p/export"> <button >Export Permissions</button> </Link>
                    </div>
                </div>
                <SearchInputLayer
                    // searchLimit={this.props.searchLimit}
                    searchFilter={this.props.searchFilter}
                    searchText={this.props.searchText}
                    onSearchFilterChange={this.props.onSearchFilterChange}
                    onSearchTextChange={this.props.onSearchTextChange}
                // onSearchLimitChange={this.props.onSearchLimitChange}
                />


            </div>


        )
    }
}


export default FunctionLayer