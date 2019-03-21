import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class CPSearchInputLayer extends Component {
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
                    <select value={searchFilter} onChange={this.handleSearchFilterChange} className='PGselect'>
                        <option value="customer_id">Search By Name</option>
                        <option value="price_group_id">Search By Price Group</option>
                    </select>
                </div>
                <div className='col-md-2.5 mb-2  '>
                    <div className="input-group">
                        <input value={searchText} onChange={this.handleSearchTextChange} type="text" className="PGsearch-input" placeholder="Search Customers.." />
                        <div className="input-group-append">
                            <button style={{ border: '2px solid #783f04', borderLeft: 'none', background: '#ddd' }} className="btn " disabled>
                                <FontAwesomeIcon className='PGsearch-button' icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}




export default CPSearchInputLayer