import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeRP } from '../../../../../actions/RP-actions';
import { connect } from 'react-redux'


class SearchResultRow extends Component {
    constructor() {
        super();
        this.deleteRow = this.deleteRow.bind(this);

    }

    deleteRow(e) {
        var iconClik = e.target.parentNode.parentNode.parentNode.parentNode;
        var svgClik = e.target.parentNode.parentNode.parentNode;
        var buttonClik = e.target.parentNode.parentNode;
        var tdClik = e.target.parentNode;
        var targt = e.target

        if (iconClik.rowIndex === undefined) {
            iconClik = svgClik;
        }
        if (iconClik.rowIndex === undefined) {
            iconClik = buttonClik;
        }
        if (iconClik.rowIndex === undefined) {
            iconClik = tdClik;
        }
        if (iconClik.rowIndex === undefined) {
            iconClik = targt;
        }
        var i = iconClik.rowIndex;
        document.getElementById('RPtbl').deleteRow(i)

        let dRowValue = iconClik.cells[4].innerHTML
        let RP = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(RP),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteRP', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeRP(json.data));

            })
            .catch((error) => console.log(error))
    }

    render() {

        const searchResult = this.props.searchResult;
        const role = searchResult.role_id;
        const permission = searchResult.permission_id;
        const id = searchResult.id;

        return (
            <tr className=''>

                <td></td>
                <td>{role}</td>
                <td>{permission}</td>
                <td>
                    <button onClick={this.deleteRow} type='button' className=" btn btn-light mb-1">
                        <FontAwesomeIcon icon={faTrash} />
                        {/* delete */}
                    </button>
                </td>
                <td style={{ display: 'none' }}>{id}</td>


            </tr>
        );
    }
}

export default connect()(SearchResultRow)