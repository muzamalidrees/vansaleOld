import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const name = searchResult.name;
        const price = searchResult.price;
        const description = searchResult.description;
        const category = searchResult.product_category_id;

        return (
            <tr className=''>
                <td>{index}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{price}</td>
            </tr>
        );
    }
}


export default SearchResultRow