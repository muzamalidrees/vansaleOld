import React, { Component } from 'react';
import FunctionLayer from './breakDown/FunctionLayer'
import SearchResultsTable from './breakDown/SearchResultsTable';
import { setDrivers } from '../../../../actions/driver-actions'
import { connect } from 'react-redux'


class DriverArea extends Component {
    _isMounted = false;
    componentWillMount() {
        this._isMounted = true
        fetch('/getAllDrivers',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.props.dispatch(setDrivers(json.data))
                if (this._isMounted) {

                    this.setState({ showTable: true })
                }

            })
            .catch((error) => console.log(error))
    }
    componentWillUnmount() {
        this._isMounted = false
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            searchLimit: '',
            searchFilter: 'name',
            searchText: '',
            showTable: false
        }
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchLimitChange = this.handleSearchLimitChange.bind(this);

    }
    callTable = () => {
        if (this.state.showTable) {
            return <SearchResultsTable
                DsearchResults={this.props.drivers}
                searchFilter={this.state.searchFilter}
                searchText={this.state.searchText}
            />
        }
        else {
            return null;
        }

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
                {this.callTable()}
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