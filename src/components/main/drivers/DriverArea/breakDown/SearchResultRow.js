import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const name = searchResult.name;
        const email = searchResult.email;
        const cell = searchResult.cell;
        const address = searchResult.address;
        const area = searchResult.area_id;
        const route = searchResult.route_id;

        return (
            <tr className=''>
                <td>{index}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{address}</td>
                <td>{area}</td>
                <td>{route}</td>
            </tr>
        );
    }
}


export default SearchResultRow