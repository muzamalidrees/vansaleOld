import React, { Component } from 'react';
import FunctionLayer from './breakDown/FunctionLayer'
import SearchInputLayer from './breakDown/SearchInputLayer';
import SearchResultsTable from './breakDown/SearchResultsTable';


class CustomerArea extends Component {

    render() {

        return (

            <div style={{ border: '2px solid aqua' }} className=" col-sm-9 m-0 p-0 ">

                <FunctionLayer />

                <SearchResultsTable searchResults={this.props.searchResults} />
            </div>

        )
    }
}


export default CustomerArea