import React, { Component } from 'react';
import CPSearchResultRow from './CPSearchResultRow';

class CustomerPrices extends Component {


    render() {

        var searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const customers = this.props.customers;
        const priceGroups = this.props.priceGroups;
        const CPSearchResults = this.props.CPSearchResults;
        const rows = [];
        var index = 0;
        if (searchFilter === 'customer_id' && searchText !== '') {
            var text = '';
            customers.forEach((customer) => {
                if (customer["name"].indexOf(searchText) === -1) {
                    return;
                }
                text = customer.id
            })
        }
        else if (searchFilter === 'price_group_id' && searchText !== '') {
            var text = '';
            priceGroups.forEach((priceGroup) => {
                if (priceGroup["name"].indexOf(searchText) === -1) {
                    return;
                }
                text = priceGroup.id
            })
        }
        else {
            text = searchText;
        }
        // console.log(ok)

        // if (searchFilter === 'price_group_id') {
        // }
        CPSearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(text) === -1) {
                return;
            }
            index = index + 1;
            rows.push(
                <CPSearchResultRow customers={customers} priceGroups={priceGroups} index={index} searchResult={searchResult} key={searchResult.id} />
            );
        });

        // function search( ) {
        //     for (var i = 0; i < searchResults.length; i++) {
        //         if (searchResults[i][filterSearch].indexOf(textSerach) === -1) {
        //             return;
        //         }
        //     }
        // }

        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md PGtbl">
                <table className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Customer</th>
                            <th>Price-Group</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div >
        );
    }

}

export default CustomerPrices


