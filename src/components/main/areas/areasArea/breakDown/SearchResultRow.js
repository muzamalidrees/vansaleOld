import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeArea } from '../../../../../actions/area-actions';
import { connect } from 'react-redux'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalShow: false,
            editId: '',
            editName: '',
            editCode: ''
        };
        this.deleteRow = this.deleteRow.bind(this);
        this.updatedb = this.updatedb.bind(this);
    }
    editRow = (e) => {
        var iconClick = e.target.parentNode.parentNode.parentNode.parentNode;
        var svgClick = e.target.parentNode.parentNode.parentNode;
        var buttonClick = e.target.parentNode.parentNode;
        var tdClick = e.target.parentNode;
        var target = e.target

        if (iconClick.rowIndex === undefined) {
            iconClick = svgClick;
        }
        if (iconClick.rowIndex === undefined) {
            iconClick = buttonClick;
        }
        if (iconClick.rowIndex === undefined) {
            iconClick = tdClick;
        }
        if (iconClick.rowIndex === undefined) {
            iconClick = target;
        }
        this.selectedRow = iconClick.rowIndex;
        let id = iconClick.cells[4].innerHTML
        let name = iconClick.cells[1].innerHTML
        let code = iconClick.cells[2].innerHTML

        this.setState({
            editId: id,
            editName: name,
            editCode: code,
            modalShow: true
        })
    }
    updatedb = (name, code) => {
        let area = { id: this.state.editId, name: name, area_code: code }

        var options = {
            method: 'PUT',
            body: JSON.stringify(area),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateArea', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeProduct(json.data));
                // this.props.onUpdate(json.data, this.selectedRow);
                this.setState({
                    editId: '',
                    editName: '',
                    modalShow: false
                })
            })
            .catch((error) => console.log(error))
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
        document.getElementById('Atbl').deleteRow(i)

        let dRowValue = iconClik.cells[4].innerHTML
        let area = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(area),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteArea', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeArea(json.data));

            })
            .catch((error) => console.log(error))
    }
    render() {

        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        const name = searchResult.name;
        const code = searchResult.area_code


        return (
            <tr className=''>

                <td></td>
                <td>{name}</td>
                <td>{code}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>
                    <PopUp

                        editname={this.state.editName}
                        editCode={this.state.editCode}
                        show={this.state.modalShow}
                        updatedb={this.updatedb}
                        onHide={() => { this.setState({ modalShow: false }) }}
                    />
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