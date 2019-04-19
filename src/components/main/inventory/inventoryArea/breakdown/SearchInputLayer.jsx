import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class SearchInputLayer extends Component {
    constructor(props) {
        super(props);
        this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }
    handleSearchFilterChange = (e) => {
        this.props.onSearchFilterChange(e.target.value);
    }

    handleSearchTextChange = (e) => {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        const searchFilter = this.props.searchFilter;
        const searchText = this.props.searchText;
        return (

            <div className='row col-12 m-0 justify-content-center'>

                <div className='col-md-2.5 mb-2  '>
                    <select value={searchFilter} onChange={this.handleSearchFilterChange} className='Inventoryselect'>
                        <option value="name">Search By Name</option>
                        <option value="rate">Search By Rate</option>
                        <option value="qty">Search By Qty</option>
                    </select>
                </div>
                <div className='col-md-2.5 mb-2  '>
                    <div className="input-group">
                        <input value={searchText} onChange={this.handleSearchTextChange} type="text" className="Inventorysearch-input" ref='search' placeholder="Search Customers.." />
                        <div className="input-group-append">
                            <button style={{ border: '2px solid #783f04', borderLeft: 'none', background: '#ddd' }} className="btn " type="button" disabled>
                                <FontAwesomeIcon className='Inventorysearch-button' icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}




export default SearchInputLayer