import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { removeUser } from '../../../../../actions/user-actions';
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
            editUsername: '',
            editPassword: '',
            editRole: ''

        };
        this.deleteRow = this.deleteRow.bind(this);
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
        let id = iconClick.cells[9].innerHTML
        let name = iconClick.cells[1].innerHTML
        let email = iconClick.cells[2].innerHTML
        let cell = iconClick.cells[3].innerHTML
        let address = iconClick.cells[4].innerHTML
        let username = iconClick.cells[5].innerHTML
        let password = iconClick.cells[6].innerHTML
        let role = iconClick.cells[7].innerHTML
        this.setState({
            editId: id,
            editName: name,
            editEmail: email,
            editCell: cell,
            editAddress: address,
            editUsername: username,
            editPassword: password,
            editRole: role,
            modalShow: true
        })

    }
    updatedb = (name, email, cell, address, username, password, role) => {
        let user = { id: this.state.editId, name: name, email: email, cell: cell, address: address, username: username, password: password, role: role }

        var options = {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateUser', options)
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
                    editUsername: '',
                    editPassword: '',
                    editRole: '',
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
        document.getElementById('Utbl').deleteRow(i)

        let dRowValue = iconClik.cells[9].innerHTML
        let user = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteUser', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeUser(json.data));

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
        const username = searchResult.username;
        const password = searchResult.password;
        const role = searchResult.role_id;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{address}</td>
                <td>{username}</td>
                <td>{password}</td>
                <td>{role}</td>
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
                        editusername={this.state.editUsername}
                        editpassword={this.state.editPassword}
                        editrole={this.state.editRole}
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