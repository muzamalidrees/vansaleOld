import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { removeCustomer } from '../../../../../actions/customer-actions';
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    editRow = (e) => {
        console.log('ok')
        // var buttonClick = e.target.parentNode.parentNode;
        // var iconClik = e.target.parentNode.parentNode.parentNode.parentNode;
        // if (buttonClick.rowIndex == undefined) {
        //     buttonClick = iconClik;
        // }
        // buttonClick.contentEditable = true;
        // return 
        //  <PopUp text="ok ha" saveChanges={this.deleteRow} />
        // var i = buttonClick.rowIndex;
        // document.getElementById('Ctbl').contentEditable = true;

        //     let dRowValue = buttonClick.cells[2].innerHTML
        //     let customer = { value: dRowValue }

        //     var options = {
        //         method: 'DELETE',
        //         body: JSON.stringify(customer),
        //         headers: { 'Content-Type': 'application/json' }
        //     }
        //     fetch('/deleteCustomer', options)
        //         .then((res) => res.json())
        //         .then((json) => {
        //             console.log(json)
        //             this.props.dispatch(removeCustomer(json.data));

        //         })
        //         .catch((error) => console.log(error))
    }
    deleteRow(e) {
        var btnClick = e.target.parentNode.parentNode;
        var iconClick = e.target.parentNode.parentNode.parentNode.parentNode;
        if (btnClick.rowIndex == undefined) {
            btnClick = iconClick;
        }
        var i = btnClick.rowIndex;
        document.getElementById('Ctbl').deleteRow(i)

        let dRowValue = btnClick.cells[2].innerHTML
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
                    {/* <button style={{ marginRight: '10px' }} onClick={this.editRow.bind(this)} type='button' className=" btn mb-1 btn-light "><FontAwesomeIcon icon={faUserEdit} /></button> */}
                    {/* <button onClick={this.deleteRow} type='button' className=" btn btn-light mb-1"><FontAwesomeIcon icon={faTrash} /></button> */}
                </td>
                
            </tr>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        customers: store.customersReducer
    }
}

export default connect(mapStateToProps)(SearchResultRow)