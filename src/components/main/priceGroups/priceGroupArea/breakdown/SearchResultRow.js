import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {

        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const name = searchResult.name;
        const price = searchResult.price;
        const buyingBackPrice = searchResult.buying_back_price;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{buyingBackPrice}</td>

            </tr>
        );
    }
}


export default SearchResultRow