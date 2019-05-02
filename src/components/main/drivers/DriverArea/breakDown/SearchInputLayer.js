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
        // let value = this.refs.search.value;
        this.props.onSearchTextChange(e.target.value);
    }
    // handleSearchLimitChange = (e) => {
    //     this.props.onSearchLimitChange(e.target.value);
    // }

    render() {
        const searchFilter = this.props.searchFilter;
        const searchText = this.props.searchText;
        // const searchLimit = this.props.searchLimit;
        return (

            <div className='row col-12 m-0 justify-content-center'>

                <div className='col-md-2.5 mb-2  '>
                    <select value={searchFilter} onChange={this.handleSearchFilterChange} className='Dselect'>
                        <option value="name">Search By Name</option>
                        <option value="address">Search By Address</option>
                        <option value="cell">Search By Cell #</option>
                        <option value="email">Search By Email</option>
                        {/* <option value="route_id">Search By Route</option> */}
                    </select>
                </div>
                <div className='col-md-2.5 mb-2  '>
                    <div className="input-group">
                        <input value={searchText} onChange={this.handleSearchTextChange} type="text" className="Dsearch-input" ref='search' placeholder="Search Drivers.." />
                        <div className="input-group-append">
                            <button style={{ border: '2px solid #783f04', borderLeft: 'none', background: '#ddd' }} className="btn " type="button" disabled>
                                <FontAwesomeIcon className='Dsearch-button' icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div style={{ display: 'none' }} className='col-md-2.5 mb-2  '>
                    <select value={searchLimit} onChange={this.handleSearchLimitChange} className='Dselect'>
                        <option value="" disabled>--Limit--</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="250">250</option>
                    </select>
                </div> */}
            </div>

        )
    }
}




export default (SearchInputLayer)