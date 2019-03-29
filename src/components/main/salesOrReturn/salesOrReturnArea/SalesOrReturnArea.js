import React, { Component } from 'react';
import { connect } from 'react-redux'
import FunctionLayer from './breakdown/FunctionLayer'
import TableLayer from './breakdown/TableLayer'
import CheckoutLayer from './breakdown/CheckoutLayer'


class SalesOrReturnArea extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);

    }
    handleAddButtonClick(product_id, rate, qty, price) {
        this.refs.tableLayer.addArrayToTbl(product_id, rate, qty, price);
    }
    render() {

        return (

            <div style={{ border: '1px solid yellow' }} className=" col-sm-9 m-0 ">
                <FunctionLayer
                    customers={this.props.customers}
                    products={this.props.products}
                    handleAddButtonClick={this.handleAddButtonClick}
                />
                <TableLayer
                    products={this.props.products}
                    ref='tableLayer'
                />
                <CheckoutLayer />
            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        customers: store.customersReducer,
        products: store.productsReducer
    }
}


export default connect(mapStateToProps)(SalesOrReturnArea)