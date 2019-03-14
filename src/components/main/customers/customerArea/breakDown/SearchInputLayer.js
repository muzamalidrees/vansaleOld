import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class SearchInputLayer extends Component {

    render() {

        return (

            <div style={{ border: '2px solid black' }} className='row m-0 p-0 align-items-start'>

                <div className='col m-0 p-0 '>
                    <select className='select'>
                        <option value="name">Search By Name</option>
                        <option value="area">Search By Area Code</option>
                        <option value="cell">Search By Cell #</option>
                        <option value="email">Search By Email</option>
                        <option value="email">Search By Role</option>
                    </select>
                </div>
                <div   className='col m-0 p-0 '>
                    <div className="input-group">
                        <input type="text" className="form-control" name='search' placeholder="Search Customers.." />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button" >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default SearchInputLayer