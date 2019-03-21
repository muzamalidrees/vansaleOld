import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {

        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const name = searchResult.name;
        const description = searchResult.description;
        const area = searchResult.area_id;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{area}</td>

            </tr>
        );
    }
}


export default SearchResultRow