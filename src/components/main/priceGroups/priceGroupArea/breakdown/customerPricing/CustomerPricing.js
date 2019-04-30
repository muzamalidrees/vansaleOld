import React, { Component } from 'react';
import { connect } from 'react-redux';
import CPSearchResultsTable from './breakdown/CPSearchResultsTable'
import CPSearchInputLayer from './breakdown/CPSearchInputLayer';
import SetCustomerPrices from './breakdown/SetCustomerPrices';
// import { setCustomerPricing } from '../../../../../../actions/CP-actions';


class CustomerPricing extends Component {
    componentWillMount() {
        fetch('/getAllCustomerPricing')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.setState({ allCustomersPrices: json.data })
                // this.props.dispatch(setCustomerPricing(json.data))
            })
            .catch((error) => console.log(error))
        fetch('/getAllCustomers')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.setState({ customers: json.data, showCustomers: true })
                // this.props.dispatch(setCustomerPricing(json.data))
            })
            .catch((error) => console.log(error))
        fetch('/getAllPriceGroups')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.setState({ priceGroups: json.data, showPriceGroups: true })
                // this.props.dispatch(setCustomerPricing(json.data))
            })
            .catch((error) => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            showCustomers: '',
            customers: '',
            priceGroups: '',
            showPriceGroups: '',
            allCustomersPrices: null,
            showSearchResultsTable: false,
            clickBtnLabel: 'View',
            searchText: '',
            searchFilter: 'customer_id'

        }
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onSearchFilterChange = this.onSearchFilterChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    onSearchTextChange(value) {
        this.setState({ searchText: value })
    }
    onSearchFilterChange(value) {
        this.setState({ searchFilter: value })
    }
    handleClick() {
        this.setState({ showSearchResultsTable: !this.state.showSearchResultsTable })
        if (this.state.clickBtnLabel === 'View') {
            this.setState({ clickBtnLabel: 'Hide' })
            this.refs.clickBtn.style.color = '#274e13'
            this.newPGHdng.style.color = '#783f04'
        }
        else {
            this.setState({ clickBtnLabel: 'View' })
            this.myForm.style.display = '';
            this.refs.clickBtn.style.color = '#783f04'
            this.newPGHdng.style.color = '#274e13'
        }
    }
    showSearchFilter = () => {
        if (this.state.showSearchResultsTable) {
            this.myForm.style.display = 'none';
            return <CPSearchInputLayer
                searchText={this.state.searchText}
                searchFilter={this.state.searchFilter}
                onSearchTextChange={this.onSearchTextChange}
                onSearchFilterChange={this.onSearchFilterChange}
            />;
        }
        else {
            return null;
        }
    }
    viewSearchResultsTable = () => {
        if (this.state.showSearchResultsTable && this.state.showCustomers && this.state.showPriceGroups) {
            return <CPSearchResultsTable
                searchText={this.state.searchText}
                searchFilter={this.state.searchFilter}
                customers={this.state.customers}
                priceGroups={this.state.priceGroups}
                CPSearchResults={this.state.allCustomersPrices}
            />;
        }
        else {
            return null;
        }
    }

    callSetCustomerPrices = () => {
        if (this.state.showCustomers && this.state.showPriceGroups) {
            return <SetCustomerPrices
                myForm={el => (this.myForm = el)}
                newPGHdng={el => (this.newPGHdng = el)}
                customers={this.state.customers}
                priceGroups={this.state.priceGroups}
            />
        }
        else {
            return null;
        }
    }



    render() {


        return (

            <div style={{ border: 'none', textAlign: 'center', marginTop: '1px', marginBottom: '2px' }} className=" col-sm-9 ">
                {this.callSetCustomerPrices()}
                <button style={{ color: '#783f04' }} ref='clickBtn' className='btn btn-link' onClick={this.handleClick}>{this.state.clickBtnLabel} Customer's Prices</button>
                {this.showSearchFilter()}
                {this.viewSearchResultsTable()}
            </div >

        )
    }
}
// const mapStateToProps = (store) => {
//     return {
//         customers: store.customersReducer,
//         priceGroups: store.PGReducer,
//         allCustomersPrices: store.CPReducer
//     }
// }

export default
    // connect(mapStateToProps)
    (CustomerPricing)