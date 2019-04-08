import React, { Component } from 'react';
import FunctionLayer from './breakdown/FunctionLayer'
import TableLayer from './breakdown/TableLayer'
import CheckoutLayer from './breakdown/CheckoutLayer'

var customers;
var products;
var TotalPrice = 0;
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
            showChekout: true,
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.EditRow = this.EditRow.bind(this);
        this.DeleteRow = this.DeleteRow.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);

    }
    handleAddButtonClick(product_id, rate, qty, discount, price) {
        TotalPrice = TotalPrice + parseInt(price);
        this.setState({ showChekout: true })
        this.refs.tableLayer.addArrayToTbl(product_id, rate, qty, discount, price);
    }
    callFunctionLayer() {
        if (this.state.showFunctions) {
            return <FunctionLayer
                ref='functionLayer'
                customers={customers}
                products={products}
                handleAddButtonClick={this.handleAddButtonClick}
                id={el => (this.invoice = el)}
            />
        }
    }
    EditRow(product_id, rate, qty, discount, price, i) {
        this.refs.functionLayer.setState({
            selectedProduct: product_id,
            selectedRate: rate,
            selectedQTy: qty,
            selectedDiscount: discount,
        })
        TotalPrice = TotalPrice - price;
        let x = document.getElementById('salestbl');
        x.deleteRow(i);
        if (x.rows.length === 1) {
            this.setState({ showChekout: false })
        }
    }
    DeleteRow(price, i) {
        TotalPrice = TotalPrice - price;
        let y = document.getElementById('salestbl');
        y.deleteRow(i);
        if (y.rows.length === 1) {
            this.setState({ showChekout: false })
        }
    }
    callTableLayer() {
        if (this.state.showTable) {
            return <TableLayer
                EditRow={this.EditRow}
                DeleteRow={this.DeleteRow}
                products={products}
                ref='tableLayer'
            // salesTable={el => (this.salesTable = el)}
            />
        }
    }
    handleCheckout() {
        let z = document.getElementById('salestbl');
        const invoice = this.invoice.value;
        const tr = this.refs.functionLayer.state.trType
        const customer_id = this.refs.functionLayer.state.selectedCustomer
        if (tr === 'sales') {
            for (let index = 1; index < z.rows.length; index++) {
                const productId = z.rows[index].cells[7].innerHTML;
                const rate = z.rows[index].cells[2].innerHTML;
                const qty = z.rows[index].cells[3].innerHTML;
                const discount = z.rows[index].cells[4].innerHTML;
                const price = z.rows[index].cells[5].innerHTML;

                this.saveSalesToServer(customer_id, productId, rate, qty, discount, price, invoice, TotalPrice, tr);
            }
            this.saveInvoice(TotalPrice, tr);
            for (let index = z.rows.length - 1; index > 0; index--) {
                z.deleteRow(index);
            }
            return;
        }
        if (tr === 'returns') {
            for (let index = 1; index < z.rows.length; index++) {
                const productId = z.rows[index].cells[7].innerHTML;
                const rate = z.rows[index].cells[2].innerHTML;
                const qty = z.rows[index].cells[3].innerHTML;
                const discount = z.rows[index].cells[4].innerHTML;
                const price = z.rows[index].cells[5].innerHTML;

                this.saveReturnsToServer(customer_id, productId, rate, qty, discount, price, invoice, TotalPrice, tr);
            }
            this.saveInvoice(TotalPrice, tr);
            for (let index = z.rows.length - 1; index > 0; index--) {
                z.deleteRow(index);
            }
            return;
        }
    }
    saveSalesToServer = (customer, product, rate, qty, discount, price, invoice, TotalPrice, tr) => {
        // alert('hello')
        let sales = { customer: customer, product: product, rate: rate, qty: qty, discount: discount, price: price, invoice: invoice }

        var options = {
            method: 'POST',
            body: JSON.stringify(sales),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewSale', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // let message = json.message;
                // this.refs.msglabel.innerHTML = message;
            })
            .catch((error) => console.log(error))

    }
    saveReturnsToServer = (customer, product, rate, qty, discount, price, invoice, TotalPrice, tr) => {
        // alert('hello')
        let returns = { customer: customer, product: product, rate: rate, qty: qty, discount: discount, price: price, invoice: invoice }

        var options = {
            method: 'POST',
            body: JSON.stringify(returns),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewReturn', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // let message = json.message;
                // this.refs.msglabel.innerHTML = message;
            })
            .catch((error) => console.log(error))

    }
    saveInvoice(TotalPrice, tr) {
        let invoice = { total: TotalPrice, type: tr }
        var options = {
            method: 'POST',
            body: JSON.stringify(invoice),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewInvoice', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // let message = json.message;
                // this.refs.msglabel.innerHTML = message;
            })
            .catch((error) => console.log(error))
    }
    callCheckoutLayer() {
        if (this.state.showChekout) {
            return <CheckoutLayer
                handleCheckout={this.handleCheckout}
            />
        }
    }
    render() {

        return (

            <div style={{ float: 'right', border: '1px solid yellow' }} className=" col-sm-12 m-0 ">

                {this.callFunctionLayer()}
                {this.callTableLayer()}
                <div style={{ border: '1px solid red' }} className='col-md-5 m-0 p-0'>
                    <label className="label-sales">Total:</label>
                    <input type='text' value={TotalPrice} className='sales-input' style={{ width: '140px' }} disabled />

                </div>
                {this.callCheckoutLayer()}

            </div>

        )
    }
}




export default SalesOrReturnArea