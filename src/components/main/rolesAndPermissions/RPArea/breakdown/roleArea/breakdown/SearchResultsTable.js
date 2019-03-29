import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {

        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const roleSearchResults = this.props.roleSearchResults;
        const rows = [];
        var index = 0;
        roleSearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            index = index + 1;
            rows.push(
                <SearchResultRow index={index} searchResult={searchResult} key={searchResult.id} />
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
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md RPtbl">
                <table id='roletbl' className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
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


