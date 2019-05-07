import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {

        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const PGSearchResults = this.props.PGSearchResults;
        const rows = [];
        PGSearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            rows.push(
                <SearchResultRow searchResult={searchResult} key={searchResult.id} />
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
                <table id='PGtbl' className='table table-dark table-striped table-bordered table-hover css-serial'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Buying_back Price</th>
                            <th>Product_Category_id</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div >
        );
    }

}

export default SearchResultsTable


