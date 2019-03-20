import React, { Component } from 'react';
import FunctionLayer from './breakDown/FunctionLayer'
import SearchResultsTable from './breakDown/SearchResultsTable';
import { setCustomers } from '../../../../actions/customer-actions'
import { connect } from 'react-redux'


class CustomerArea extends Component {
    componentWillMount() {
        // var options = {
        //     method: 'POST',
        //     body: JSON.stringify({ limit: 10 }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        fetch('/getAllCustomers',
            //  options
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(setCustomers(json.data))
                this.setState({ searchResults: this.props.customers })

            })
            .catch((error) => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            searchLimit: '',
            searchFilter: 'name',
            searchText: '',
            searchResults: props.searchResults
        }
        // console.log(props.searchResults)
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchLimitChange = this.handleSearchLimitChange.bind(this);

    }
    getCustomersData = () => {

    }





    handleSearchFilterChange(searchFilter) {
        this.setState({
            searchFilter: searchFilter
        });
    }

    handleSearchTextChange(searchText) {
        this.setState({
            searchText: searchText
        })
    }
    handleSearchLimitChange(searchLimit) {
        this.setState({
            searchLimit: searchLimit
        });
    }

    render() {


        return (

            <div style={{ border: 'none' }} className=" col-sm-9 m-0 p-0 ">
                <FunctionLayer
                    searchLimit={this.state.searchLimit}
                    searchFilter={this.state.searchFilter}
                    searchText={this.state.searchText}
                    onSearchFilterChange={this.handleSearchFilterChange}
                    onSearchTextChange={this.handleSearchTextChange}
                    onSearchLimitChange={this.handleSearchLimitChange}
                />
                <SearchResultsTable
                    searchResults={this.state.searchResults}
                    searchFilter={this.state.searchFilter}
                    searchText={this.state.searchText}
                />

            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        customers: store.customersReducer
    }
}

export default connect(mapStateToProps)(CustomerArea)