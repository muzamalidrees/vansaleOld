import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInputLayer from './SearchInputLayer';


class FunctionLayer extends Component {

    render() {

        return (

            <div style={{ border: 'none' }} className='row m-0 '>
                <div className='row col-12 m-0 justify-content-center'>

                    <div className='col-md-2.5 mb-2  PGbutton-contaner '>
                        <Link to="/priceGroups/add"> <button ref='addPriceGroup'>Add New PriceGroup</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  PGbutton-contaner '>
                        <Link to="/priceGroups/import"> <button ref='importPG'>Import Price Groups</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  PGbutton-contaner '>
                        <Link to="/priceGroups/export"> <button ref='exportPG'>Export Price Groups</button> </Link>
                    </div>
                    <div className='col-md-2.5 mb-2  PGbutton-contaner '>
                        <Link to="/priceGroups/customerPricing"> <button ref='customerPricing'>Customer Pricing</button> </Link>
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