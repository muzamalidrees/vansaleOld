import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        var ASearchResults = this.props.ASearchResults;
        this.rows = [];
        var index = 0;
        ASearchResults.forEach((searchResult) => {
            if (searchResult[searchFilter].indexOf(searchText) === -1) {
                return;
            }
            index = index + 1;
            this.rows.push(
                <SearchResultRow sr={index} onUpdate={this.onUpdate} searchResult={searchResult} key={searchResult.id} />
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
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md Atbl">
                <table id='Atbl' className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Name</th>
                            <th>Area_Code</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>{this.rows}</tbody>
                </table>
            </div >
        );
    }

}

export default SearchResultsTable


