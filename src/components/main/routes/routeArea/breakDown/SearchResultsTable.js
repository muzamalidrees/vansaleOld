import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {

        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const RSearchResults = this.props.RSearchResults;
        const rows = [];
        RSearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            rows.push(
                <SearchResultRow searchResult={searchResult} key={searchResult.id} />
            );
        });

        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md Rtbl">
                <table id='Rtbl' className='table table-dark table-striped table-bordered table-hover css-serial'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Area</th>
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


