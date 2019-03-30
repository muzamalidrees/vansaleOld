import React, { Component } from 'react';
import TableRow from './TableRow';



class TableLayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: []
        }
        this.addArrayToTbl = this.addArrayToTbl.bind(this);
    }

    addArrayToTbl = (product_id, rate, qty, price) => {
        const products = this.props.products;
        var row = [];
        var Product_id;
        products.forEach(product => {

            if (product_id == product.id) {
                Product_id = product.name
                return;
            }
        })
        row.push(
            <TableRow products={products} product_id={Product_id} rate={rate} qty={qty} price={price} EditRow={this.props.EditRow} key={product_id} />
        );
        this.setState(state => {
            const rows = [...state.rows, row]
            return {
                rows
            };
        });
    }

    render() {



        return (
            <div style={{ overflowY: "auto", display: 'block', padding: '9px', textAlign: 'center' }} ref='tbl' className="table-responsive-md salestbl">
                <table id='salestbl' className='table table-light table-striped table-bordered table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Sr.</th>
                            <th>Product</th>
                            <th>Rate</th>
                            <th>QTY</th>
                            <th>Discount</th>
                            <th>Price</th>
                            <th>Edit/Remove</th>

                        </tr>
                    </thead>
                    <tbody>{this.state.rows}</tbody>
                </table>
            </div >
        );
    }

}

export default TableLayer