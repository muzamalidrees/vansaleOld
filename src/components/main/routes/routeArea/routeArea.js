import React, { Component } from 'react';
import FunctionLayer from './breakdown/FunctionLayer'
import SearchResultsTable from './breakdown/SearchResultsTable'
import { setRoutes } from '../../../../actions/routes-actions'
import { connect } from 'react-redux'


class RouteArea extends Component {
    componentWillMount() {
        // var options = {
        //     method: 'POST',
        //     body: JSON.stringify({ limit: 10 }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        fetch('/getAllRoutes',
            //  options
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(setRoutes(json.data))
                this.setState({ RSearchResults: this.props.Routes })

            })
            .catch((error) => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            searchLimit: '',
            searchFilter: 'name',
            searchText: '',
            RSearchResults: props.RSearchResults
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
                    RSearchResults={this.state.RSearchResults}
                    searchFilter={this.state.searchFilter}
                    searchText={this.state.searchText}
                />

            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        Routes: store.routesReducer
    }
}

export default connect(mapStateToProps)(RouteArea)