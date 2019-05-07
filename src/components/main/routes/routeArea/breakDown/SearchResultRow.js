import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeRoute } from '../../../../../actions/routes-actions';
import { connect } from 'react-redux'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalShow: false,
            editId: '',
            editName: '',
            editDescription: '',
            editArea: '',
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
        let id = iconClick.cells[5].innerHTML
        let name = iconClick.cells[1].innerHTML
        let description = iconClick.cells[2].innerHTML
        let area = iconClick.cells[3].innerHTML
        this.setState({
            editId: id,
            editName: name,
            editDescription: description,
            editArea: area,
            modalShow: true
        })

    }
    updatedb = (name, description, area) => {
        let route = { id: this.state.editId, name: name, description: description, area: area }

        var options = {
            method: 'PUT',
            body: JSON.stringify(route),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateRoute', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeProduct(json.data));
                this.setState({
                    editId: '',
                    editName: '',
                    editDescription: '',
                    editArea: '',
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
        document.getElementById('Rtbl').deleteRow(i)

        let dRowValue = iconClik.cells[5].innerHTML
        let route = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(route),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteRoute', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeRoute(json.data));

            })
            .catch((error) => console.log(error))
    }


    render() {

        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        const name = searchResult.name;
        const description = searchResult.description;
        const area = searchResult.area_id;

        return (
            <tr className=''>

                <td></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{area}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>
                    <PopUp

                        editname={this.state.editName}
                        editdescription={this.state.editDescription}
                        editarea={this.state.editArea}
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