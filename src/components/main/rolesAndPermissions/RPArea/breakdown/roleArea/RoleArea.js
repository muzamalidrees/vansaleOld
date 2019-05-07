import React, { Component } from 'react';
import FunctionLayer from './breakdown/FunctionLayer'
import SearchResultsTable from './breakdown/SearchResultsTable'
import { setRoles } from '../../../../../../actions/role-actions'
import { connect } from 'react-redux'


class RoleArea extends Component {
    _isMounted = false;
    componentWillMount() {
        this._isMounted = true
        fetch('/getAllRoles',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.props.dispatch(setRoles(json.data))
                if (this._isMounted) {
                    this.setState({ showTable: true })
                }
            })
            .catch((error) => console.log(error))
    }
    componentWillUnmount() {
        this._isMounted = false
        return null
    }
    constructor(props) {
        super(props);
        this.state = {
            // searchLimit: '',
            searchFilter: 'name',
            searchText: '',
            showTable: false
        }
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        // this.handleSearchLimitChange = this.handleSearchLimitChange.bind(this);

    }
    callTable = () => {
        if (this.state.showTable) {
            return <SearchResultsTable
                roleSearchResults={this.props.roles}
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
    // handleSearchLimitChange(searchLimit) {
    //     this.setState({
    //         searchLimit: searchLimit
    //     });
    // }

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
        roles: store.rolesReducer
    }
}

export default connect(mapStateToProps)(RoleArea)