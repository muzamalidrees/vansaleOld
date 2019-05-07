import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeInventory } from '../../../../../actions/inventory-actions';
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
            editRate: '',
            editQty: '',
            // editPrice: '',
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
        let id = iconClick.cells[7].innerHTML
        let name = iconClick.cells[1].innerHTML
        let description = iconClick.cells[2].innerHTML
        let rate = iconClick.cells[3].innerHTML
        let qty = iconClick.cells[4].innerHTML
        // let price = iconClick.cells[5].innerHTML

        this.setState({
            editId: id,
            editName: name,
            editDescription: description,
            editRate: rate,
            editQty: qty,
            // editPrice: price,
            modalShow: true
        })

    }
    updatedb = (name, description, rate, qty, price) => {
        let item = { id: this.state.editId, name: name, description: description, rate: rate, qty: qty, price: price, }

        var options = {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateInventory', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeProduct(json.data));
                this.setState({
                    editId: '',
                    editName: '',
                    editDescription: '',
                    editRate: '',
                    editQty: '',
                    editPrice: '',
                    modalShow: false
                    // this.setState({ modalShow: false });
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
        document.getElementById('Inventorytbl').deleteRow(i)

        let dRowValue = iconClik.cells[7].innerHTML
        let item = { id: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteInventory', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeInventory(json.data));

            })
            .catch((error) => console.log(error))
    }
    callPopUp = () => {
        if (this.state.modalShow) {
            return <PopUp
                editname={this.state.editName}
                editDescription={this.state.editDescription}
                editRate={this.state.editRate}
                editQty={this.state.editQty}
                // editprice={this.state.editPrice}
                // show={this.state.modalShow}
                updatedb={this.updatedb}
                onHide={() => { this.setState({ modalShow: false }) }}
            />
        }
        else {
            return null
        }
    }


    render() {

        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        const name = searchResult.name;
        const description = searchResult.description;
        const rate = searchResult.rate;
        const qty = searchResult.qty;
        const price = searchResult.price;

        return (
            <tr className=''>

                <td>{index}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{rate}</td>
                <td>{qty}</td>
                <td>{price}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>
                    {this.callPopUp()}
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