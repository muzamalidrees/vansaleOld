import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {


        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const searchResults = this.props.searchResults;
        const rows = [];
        searchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            rows.push(
                <SearchResultRow searchResult={searchResult} key={searchResult.id} />
            );
        });

        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md tbl">
                <table id='Ctbl' className='table table-dark table-striped table-bordered table-hover css-serial'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cell</th>
                            <th>Address</th>
                            <th>Area_ID</th>
                            <th>Route_ID</th>
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


