import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { removeCustomer } from '../../../../../actions/customer-actions';
import { connect } from 'react-redux'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalShow: false,
            editId: '',
            editName: '',
            editEmail: '',
            editCell: '',
            editAddress: '',
            editArea: '',
            editRoute: '',

        };
    }
    editRow = (e) => {
        // console.log('ok')
        var buttonClick = e.target.parentNode.parentNode;
        var iconClik = e.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(buttonClick)
        // console.log(iconClik)
        if (buttonClick.rowIndex === undefined) {
            buttonClick = iconClik;
            // return;
        }
        let id = buttonClick.cells[8].innerHTML
        let name = buttonClick.cells[1].innerHTML
        let email = buttonClick.cells[2].innerHTML
        let cell = buttonClick.cells[3].innerHTML
        let address = buttonClick.cells[4].innerHTML
        let area = buttonClick.cells[5].innerHTML
        let route = buttonClick.cells[6].innerHTML
        this.setState({
            editId: id,
            editName: name,
            editEmail: email,
            editCell: cell,
            editAddress: address,
            editArea: area,
            editRoute: route,
            modalShow: true
        })

    }
    updatedb = (name, email, cell, address, area, route) => {
        let customer = { id: this.state.editId, name: name, email: email, cell: cell, address: address, area: area, route: route }

        var options = {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateCustomer', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeCustomer(json.data));
                this.setState({
                    editId: '',
                    editName: '',
                    editEmail: '',
                    editCell: '',
                    editAddress: '',
                    editArea: '',
                    editRoute: '',
                    modalShow: false
                    // this.setState({ modalShow: false });
                })
            })
            .catch((error) => console.log(error))
    }
    deleteRow(e) {
        var btnClick = e.target.parentNode.parentNode;
        var iconClick = e.target.parentNode.parentNode.parentNode.parentNode;
        if (btnClick.rowIndex == undefined) {
            btnClick = iconClick;
        }
        var i = btnClick.rowIndex;
        document.getElementById('Ctbl').deleteRow(i)

        let dRowValue = btnClick.cells[8].innerHTML
        let customer = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(customer),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteCustomer', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeCustomer(json.data));

            })
            .catch((error) => console.log(error))
    }

    render() {
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        const name = searchResult.name;
        const email = searchResult.email;
        const cell = searchResult.cell;
        const address = searchResult.address;
        const area = searchResult.area_id;
        const route = searchResult.route_id;

        return (
            <tr className=''>
                <td>{index}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{address}</td>
                <td>{area}</td>
                <td>{route}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faUserEdit} />
                        {/* edit */}
                    </button>
                    <PopUp

                        editname={this.state.editName}
                        editemail={this.state.editEmail}
                        editcell={this.state.editCell}
                        editaddress={this.state.editAddress}
                        editarea={this.state.editArea}
                        editroute={this.state.editRoute}
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

            </tr >
        );
    }
}
const mapStateToProps = (store) => {
    return {
        customers: store.customersReducer
    }
}

export default connect(mapStateToProps)(SearchResultRow)