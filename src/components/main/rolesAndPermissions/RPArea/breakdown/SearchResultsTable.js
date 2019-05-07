import React, { Component } from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultsTable extends Component {

    render() {

        const searchText = this.props.searchText;
        const searchFilter = this.props.searchFilter;
        const RPSearchResults = this.props.RPSearchResults;
        const rows = [];
        var index = 0;
        console.log(RPSearchResults)
        console.log(searchFilter)
        console.log(searchText)
        // RPSearchResults.forEach((searchResult) => {
        //     if (searchResult[searchFilter].indexOf(searchText) === -1) {
        //         return;
        //     }
        //     index = index + 1;
        //     rows.push(
        //         <SearchResultRow index={index} searchResult={searchResult} key={searchResult.id} />
        //     );
        // });


        for (var i = 0; i < RPSearchResults.length; i++) {
            // if (RPSearchResults[i][searchFilter].indexOf(searchText) === -1) {
            //     return;
            // }
            let searchResult = RPSearchResults[i];
            index = index + 1;
            rows.push(
                <SearchResultRow index={index} searchResult={searchResult} key={searchResult.id} />
            );
        }


        return (
            <div style={{ overflowY: "auto", display: 'block' }} ref='tbl' className="table-responsive-md RPtbl">
                <table className='table table-dark table-striped table-bordered table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Sr.</th>
                            <th>Role</th>
                            <th>Permissions</th>
                            
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div >
        );
    }

}

export default SearchResultsTable


