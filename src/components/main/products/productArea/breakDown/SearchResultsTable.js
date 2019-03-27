import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {


        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const PsearchResults = this.props.PsearchResults;
        const rows = [];
        var index = 0;
        PsearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            index = index + 1;
            rows.push(
                <SearchResultRow index={index} searchResult={searchResult} key={searchResult.id} />
            );
        });

        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md Dtbl">
                <table id='Ptbl' className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
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


