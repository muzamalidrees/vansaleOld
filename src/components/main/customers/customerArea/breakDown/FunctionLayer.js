import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';



class FunctionLayer extends Component {
    // componentDidMount() {
    //     let role_id = parseInt(this.props.user.role_id)

    //     if (role_id === 2) {
    //         this.addCustomer.style.display = ''
    //     }
    //     else {
    //         this.addCustomer.style.display = 'none'
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (

            <div style={{ border: 'none' }} className='row m-0 '>
                <div className='row col-12 m-0 justify-content-center'>
                    <div ref={(el) => { this.addCustomer = el }} className='col-md-2.5 mb-2  button-contaner '>
                        <Link to="/customers/add"> <button >Add New Customer</button> </Link>
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