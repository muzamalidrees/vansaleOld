import React, { Component } from 'react';
import FunctionLayer from './breakDown/FunctionLayer'
import SearchResultsTable from './breakDown/SearchResultsTable';
import { setDrivers } from '../../../../actions/driver-actions'
import { connect } from 'react-redux'


class DriverArea extends Component {
    componentWillMount() {
        // var options = {
        //     method: 'POST',
        //     body: JSON.stringify({ limit: 10 }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        fetch('/getAllDrivers',
            //  options
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(setDrivers(json.data))
                this.setState({ DsearchResults: this.props.drivers })

            })
            .catch((error) => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            searchLimit: '',
            searchFilter: 'name',
            searchText: '',
            DsearchResults: props.DsearchResults
        }
        // console.log(props.searchResults)
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchLimitChange = this.handleSearchLimitChange.bind(this);

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
                    DsearchResults={this.state.DsearchResults}
                    searchFilter={this.state.searchFilter}
                    searchText={this.state.searchText}
                />

            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        drivers: store.driversReducer
    }
}

export default connect(mapStateToProps)(DriverArea)