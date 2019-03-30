import React, { Component } from 'react';
import { connect } from 'react-redux'
import FunctionLayer from './breakdown/FunctionLayer'
import TableLayer from './breakdown/TableLayer'
import CheckoutLayer from './breakdown/CheckoutLayer'

var customers;
var products;
class SalesOrReturnArea extends Component {
    componentWillMount() {
        fetch('/getAllProducts',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                products = json.data;
                this.setState({
                    showTable: true,
                    // products: json.data
                })

            })
            .catch((error) => console.log(error));

        fetch('/getAllCustomers',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                customers = json.data
                this.setState({
                    showFunctions: true,
                    //   customers: json.data 
                })
            })
            .catch((error) => console.log(error))
    }

    constructor(props) {
        super(props);
        this.state = {
            customers: '',
            products: '',
            showFunctions: false,
            showTable: false,
            showChekout: false
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.EditRow = this.EditRow.bind(this);

    }
    handleAddButtonClick(product_id, rate, qty, price) {
        this.refs.tableLayer.addArrayToTbl(product_id, rate, qty, price);
    }
    callFunctionLayer() {
        if (this.state.showFunctions) {
            return <FunctionLayer
                ref='functionLayer'
                customers={customers}
                products={products}
                handleAddButtonClick={this.handleAddButtonClick}
            />
        }
    }
    EditRow(product_id, rate, qty, discount) {
        this.refs.functionLayer.EditRow(product_id, rate, qty, discount);
    }
    callTableLayer() {
        if (this.state.showTable) {
            return <TableLayer
                EditRow={this.EditRow}
                products={products}
                ref='tableLayer'
            />
        }
    }
    callCheckoutLayer() {
        if (this.state.showChekout) {
            return <CheckoutLayer />
        }
    }
    render() {

        return (

            <div style={{ border: '1px solid yellow' }} className=" col-sm-9 m-0 ">

                {this.callFunctionLayer()}
                {this.callTableLayer()}
                {this.callCheckoutLayer()}

            </div>

        )
    }
}




export default SalesOrReturnArea