import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {

        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const name = searchResult.name;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{name}</td>

            </tr>
        );
    }
}


export default SearchResultRow