import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeCP } from '../../../../../../../actions/CP-actions';
import { connect } from 'react-redux'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalShow: false,
            editId: '',
            editCustomer: '',
            editPriceGroup: '',

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
        let id = iconClick.cells[4].innerHTML
        let customer = iconClick.cells[5].innerHTML
        let priceGroup = iconClick.cells[6].innerHTML
        this.setState({
            editId: id,
            editCustomer: customer,
            editPriceGroup: priceGroup,
            modalShow: true
        })

    }
    updatedb = (customer, priceGroup) => {
        let CP = { id: this.state.editId, customer: customer, priceGroup: priceGroup }

        var options = {
            method: 'PUT',
            body: JSON.stringify(CP),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateCP', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeProduct(json.data));
                this.setState({
                    editId: '',
                    editCustomer: '',
                    editPriceGroup: '',
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
        document.getElementById('CPtbl').deleteRow(i)

        let dRowValue = iconClik.cells[4].innerHTML
        let CP = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(CP),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteCP', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeCP(json.data));

            })
            .catch((error) => console.log(error))
    }

    render() {
        const customers = this.props.customers;
        const priceGroups = this.props.priceGroups;
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        var cID = searchResult.customer_id;
        var pgID = searchResult.price_group_id;
        var cName;
        var pgName;
        customers.forEach((customer) => {

            if (customer.id == cID) {
                cName = customer.name
                // console.log(cID);

                return;
            }
        })
        priceGroups.forEach((priceGroup) => {

            if (priceGroup.id == pgID) {
                pgName = priceGroup.name
                return;
            }
        })


        return (
            <tr className=''>
                <td>{index}</td>
                <td>{cName}</td>
                <td>{pgName}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>
                    <PopUp
                        customers={customers}
                        priceGroups={priceGroups}
                        editcustomer={this.state.editCustomer}
                        editpricegroup={this.state.editPriceGroup}
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
                <td style={{ display: 'none' }}>{cID}</td>
                <td style={{ display: 'none' }}>{pgID}</td>
            </tr>
        );
    }
}


export default connect()(SearchResultRow)