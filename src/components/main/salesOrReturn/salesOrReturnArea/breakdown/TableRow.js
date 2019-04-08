import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


class TableRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {

        };
    }
    editRow = (e) => {
        let iconClick = e.target.parentNode.parentNode.parentNode.parentNode;
        let svgClick = e.target.parentNode.parentNode.parentNode;
        let buttonClick = e.target.parentNode.parentNode;
        let tdClick = e.target.parentNode;
        let target = e.target

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

        // iconClick.contentEditable = true;
        const products = this.props.products;
        let productName = iconClick.cells[1].innerHTML
        let product_id;

        products.forEach(product => {
            if (productName == product.name) {
                product_id = product.id;
                return;
            }
        });

        let rate = iconClick.cells[2].innerHTML
        let qty = iconClick.cells[3].innerHTML
        let discount = iconClick.cells[4].innerHTML
        let price = iconClick.cells[5].innerHTML
        let i = iconClick.rowIndex;


        this.props.EditRow(product_id, rate, qty, discount, price, i);
        // document.getElementById('salestbl').deleteRow(i)

    }

    deleteRowfn(e) {
        let iconClik = e.target.parentNode.parentNode.parentNode.parentNode;
        let svgClik = e.target.parentNode.parentNode.parentNode;
        let buttonClik = e.target.parentNode.parentNode;
        let tdClik = e.target.parentNode;
        let targt = e.target

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
        let i = iconClik.rowIndex;
        let price = iconClik.cells[5].innerHTML

        this.props.DeleteRow(price, i);
        // document.getElementById('salestbl').deleteRow(i)

    }

    render() {
        // const index = this.props.index;
        const product_id = this.props.product_id;
        var productName;
        const products = this.props.products;
        products.forEach(product => {
            if (product_id == product.id) {
                productName = product.name
                return;
            }
        })
        const rate = this.props.rate;
        const qty = this.props.qty;
        const discount = this.props.discount;
        const price = this.props.price;

        return (
            <tr className=''>
                <td>{'index'}</td>
                <td>{productName}</td>
                <td>{rate}</td>
                <td>{qty}</td>
                <td>{discount}</td>
                <td>{price}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow.bind(this)} type='button' className=" btn mb-1 btn-dark ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>

                    <button onClick={this.deleteRowfn.bind(this)} type='button' className=" btn btn-dark mb-1">
                        <FontAwesomeIcon icon={faTrash} />
                        {/* delete */}
                    </button>
                </td>
                <td style={{ display: 'none' }}>{product_id}</td>
            </tr >
        );
    }
}


export default TableRow