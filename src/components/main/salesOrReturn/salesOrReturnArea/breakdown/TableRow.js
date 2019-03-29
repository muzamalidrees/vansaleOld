import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


class TableRow extends Component {
    constructor(...args) {
        super(...args);

        this.state = {

        };
        this.deleteRow = this.deleteRow.bind(this);
    }
    editRow = (e) => {
        e.target.contentEditable = true
        // var iconClick = e.target.parentNode.parentNode.parentNode.parentNode;
        // var svgClick = e.target.parentNode.parentNode.parentNode;
        // var buttonClick = e.target.parentNode.parentNode;
        // var tdClick = e.target.parentNode;
        // var target = e.target

        // if (iconClick.rowIndex === undefined) {
        //     iconClick = svgClick;
        // }
        // if (iconClick.rowIndex === undefined) {
        //     iconClick = buttonClick;
        // }
        // if (iconClick.rowIndex === undefined) {
        //     iconClick = tdClick;
        // }
        // if (iconClick.rowIndex === undefined) {
        //     iconClick = target;
        // }
        // let name = iconClick.cells[1].innerHTML
        // let description = iconClick.cells[2].innerHTML
        // let category = iconClick.cells[3].innerHTML
        // let price = iconClick.cells[4].innerHTML
        // console.log(id + name + price)


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
        document.getElementById('salestbl').deleteRow(i)

    }

    render() {
        // const index = this.props.index;
        const product_id = this.props.product_id;
        const rate = this.props.rate;
        const qty = this.props.qty;
        const price = this.props.price;

        return (
            <tr className=''>
                <td>{'index'}</td>
                <td>{product_id}</td>
                <td>{rate}</td>
                <td>{qty}</td>
                <td>{price}</td>
                <td>
                    <button style={{ marginRight: '10px' }} onClick={this.editRow} type='button' className=" btn mb-1 btn-dark ">
                        <FontAwesomeIcon icon={faEdit} />
                        {/* edit */}
                    </button>

                    <button onClick={this.deleteRow} type='button' className=" btn btn-dark mb-1">
                        <FontAwesomeIcon icon={faTrash} />
                        {/* delete */}
                    </button>
                </td>
                {/* <td style={{ display: 'none' }}>{id}</td> */}
            </tr >
        );
    }
}


export default TableRow