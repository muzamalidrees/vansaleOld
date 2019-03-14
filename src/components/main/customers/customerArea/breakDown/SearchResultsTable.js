import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {
    render() {

        const rows = [];
        // console.log(this.props.searchResults)
        this.props.searchResults.forEach((searchResult) => {


            rows.push(
                <SearchResultRow searchresult={searchResult} key={searchResult.id} />
            );
        });




        return (
            <div className="table-responsive-md">
                <table style={{ overflowY: "hidden" }} className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Price</th>
                            {/* <th><button onClick={this.gjh} className='btn btn-sm btn-primary'>fff</button></th> */}
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div >
        );
    }

}

export default SearchResultsTable


