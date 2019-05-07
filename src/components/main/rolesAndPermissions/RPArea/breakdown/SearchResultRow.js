import React, { Component } from 'react';


class SearchResultRow extends Component {

    render() {

        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const role = searchResult.role_id;
        const permission = searchResult.permission_id;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{role}</td>
                <td>{permission}</td>

            </tr>
        );
    }
}


export default SearchResultRow