import React, { Component } from 'react';
import FunctionLayer from './breakDown/FunctionLayer'
import SearchResultsTable from './breakDown/SearchResultsTable'
import { setProductCategories } from '../../../../actions/PC-actions'
import { connect } from 'react-redux'


class PCArea extends Component {
    componentWillMount() {
        fetch('/getAllProductCategories',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(setProductCategories(json.data))
                this.setState({ showTable: true })

            })
            .catch((error) => console.log(error))
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
                PCSearchResults={this.props.productCategories}
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
        productCategories: store.PCReducer
    }
}

export default connect(mapStateToProps)(PCArea)