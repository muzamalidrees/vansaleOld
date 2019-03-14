import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {
        const searchResult = this.props.searchresult;
        const name = searchResult.name ;

        return (
            <tr className=''>
                <td>{name}</td>
                <td>{searchResult.id}</td>
                <td>{name}</td>
                <td>{searchResult.id}</td>
                <td>{name}</td>
                <td>{searchResult.id}</td>
            </tr>
        );
    }
}


export default SearchResultRow