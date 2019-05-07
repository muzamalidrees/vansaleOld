import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {

        var searchText = this.props.searchText;
        var searchFilter = this.props.searchFilter;
        var inventorySearchResults = this.props.inventorySearchResults;
        var rows = [];

        inventorySearchResults.forEach((searchResult) => {

            var value = searchResult[searchFilter]
            if (searchFilter !== 'name') {
                value = value.toString()
            }
            if (value.indexOf(searchText) === -1) {
                return;
            }
            rows.push(
                <SearchResultRow searchResult={searchResult} key={searchResult.id} />
            );
        });

        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md Inventorytbl">
                <table id='Inventorytbl' className='table table-dark table-striped table-bordered table-hover css-serial'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Qty</th>
                            <th>Price</th>
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


