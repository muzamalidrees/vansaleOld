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
                    <select value={searchFilter} onChange={this.handleSearchFilterChange} className='Aselect'>
                        <option value="name">Search By Name</option>
                    </select>
                </div>
                <div className='col-md-2.5 mb-2  '>
                    <div className="input-group">
                        <input value={searchText} onChange={this.handleSearchTextChange} type="text" className="Asearch-input" ref='search' placeholder="Search Areas.." />
                        <div className="input-group-append">
                            <button style={{ border: '2px solid #783f04', borderLeft: 'none', background: '#ddd' }} className="btn " type="button" disabled>
                                <FontAwesomeIcon className='Asearch-button' icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div style={{ display: 'none' }} className='col-md-2.5 mb-2  '>
                    <select value={searchLimit} onChange={this.handleSearchLimitChange} className='PGselect'>
                        <option value="">--Limit--</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>

                    </select>
                </div> */}
            </div>

        )
    }
}




export default (SearchInputLayer)