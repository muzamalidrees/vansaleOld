import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {
        const customers = this.props.customers;
        const priceGroups = this.props.priceGroups;
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        let cID = searchResult.customer_id;
        let pgID = searchResult.price_group_id;

        customers.forEach((customer) => {
            if (customer['id'] == cID) {
                cID = customer['name']
                return;
            }
        })
        priceGroups.forEach((priceGroup) => {
            if (priceGroup['id'] == pgID) {
                pgID = priceGroup['name']
                return;
            }
        })


        return (
            <tr className=''>
                <td>{index}</td>
                <td>{cID}</td>
                <td>{pgID}</td>
            </tr>
        );
    }
}


export default SearchResultRow