import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';


class FunctionLayer extends Component {

    render() {

        return (

            <div style={{ border: 'none' }} className='row m-0 '>
                <div className='row col-12 m-0 justify-content-center'>

                    <div className='col-md-2.5 mb-2  Ubutton-contaner '>
                        <Link to="/users/add"> <button >Add New User</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  Ubutton-contaner '>
                        <Link to="/users/import"> <button >Import Users</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  Ubutton-contaner '>
                        <Link to="/users/export"> <button >Export Users</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  Ubutton-contaner '>
                        <Link to="/rolesAndPermissions/home"> <button >Roles & Permissions</button> </Link>
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