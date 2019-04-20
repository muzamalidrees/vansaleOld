import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { removeProduct } from '../../../../../actions/product-actions';
import { connect } from 'react-redux'
import PopUp from './PopUp';


class SearchResultRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalShow: false,
            editId: '',
            editName: '',
            editPrice: '',
            editDescription: '',
            editCategory: '',

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
        let id = iconClick.cells[6].innerHTML
        let name = iconClick.cells[1].innerHTML
        let description = iconClick.cells[2].innerHTML
        let category = iconClick.cells[3].innerHTML
        let price = iconClick.cells[4].innerHTML
        // console.log(id + name + price)
        this.setState({
            editId: id,
            editName: name,
            editPrice: price,
            editDescription: description,
            editCategory: category,
            modalShow: true
        })

    }
    updatedb = (name, price, description, category) => {
        let product = { id: this.state.editId, name: name, price: price, description: description, category: category }

        var options = {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateProduct', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(removeProduct(json.data));
                this.setState({
                    editId: '',
                    editName: '',
                    editPrice: '',
                    editDescription: '',
                    editCategory: '',
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
        document.getElementById('Ptbl').deleteRow(i)

        let dRowValue = iconClik.cells[6].innerHTML
        let product = { value: dRowValue }

        var options = {
            method: 'DELETE',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/deleteProduct', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(removeProduct(json.data));

            })
            .catch((error) => console.log(error))
    }

    render() {
        const index = this.props.index;
        const searchResult = this.props.searchResult;
        const id = searchResult.id;
        const name = searchResult.name;
        const price = searchResult.price;
        const description = searchResult.description;
        const category = searchResult.product_category_id;

        return (
            <tr className=''>
                <td>{index}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-light ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>
                    <PopUp

                        editname={this.state.editName}
                        editprice={this.state.editPrice}
                        editdescription={this.state.editDescription}
                        editcategory={this.state.editCategory}
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


export default connect()(SearchResultRow)