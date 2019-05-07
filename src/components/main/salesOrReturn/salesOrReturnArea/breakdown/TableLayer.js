import React, { Component } from 'react';
import TableRow from './TableRow';
import '../../salesOrReturnStyles.css'


class TableLayer extends Component {
    index = 0;
    constructor(props) {
        super(props);

        this.state = {
            Rows: [],
        }
        this.addArrayToTbl = this.addArrayToTbl.bind(this);
    }

    addArrayToTbl = (product_id, rate, qty, discount, price) => {
        this.index++;
        var row = [];
        row.push(
            <TableRow
                products={this.props.products}
                product_id={product_id}
                rate={rate}
                qty={qty}
                discount={discount}
                price={price}
                EditRow={this.props.EditRow}
                DeleteRow={this.props.DeleteRow}
                key={product_id}
                index={this.index}
            />
        );
        this.setState(state => {
            var Rows = [...state.Rows, row]
            return {
                Rows
            };
        });

    }

    render() {



        return (
            <div style={{ overflowY: "auto", display: 'block', padding: '9px', textAlign: 'center' }} ref='tbl' className="table-responsive-md salestbl">
                <table id='salestbl' className='table table-light table-striped table-bordered table-hover css-serial'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Sr.</th>
                            <th>Product</th>
                            <th>Rate</th>
                            <th>QTY</th>
                            <th>Discount %</th>
                            <th>Price</th>
                            <th>Edit/Remove</th>

                        </tr>
                    </thead>
                    <tbody>{this.state.Rows}</tbody>
                </table>

            </div >
        );
    }

}

export default TableLayer