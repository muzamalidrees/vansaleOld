import React, { Component } from 'react';
import FunctionLayer from './breakdown/FunctionLayer'
import TableLayer from './breakdown/TableLayer'
import CheckoutLayer from './breakdown/CheckoutLayer'

var customers;
var products;
var TotalPrice = 0;
class SalesOrReturnArea extends Component {
    _isMounted = false
    componentWillMount() {
        this._isMounted = true
        fetch('/getAllProducts',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                products = json.data;
                if (this._isMounted) {

                    this.setState({
                        showTable: true,
                        // products: json.data
                    })
                }

            })
            .catch((error) => console.log(error));

        fetch('/getAllCustomers',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                customers = json.data
                if (this._isMounted) {

                    this.setState({
                        showFunctions: true,
                        //   customers: json.data 
                    })
                }
            })
            .catch((error) => console.log(error))
    }
    componentWillUnmount() {
        this._isMounted = false
        return null
    }

    constructor(props) {
        super(props);
        this.state = {
            customers: '',
            products: '',
            showFunctions: false,
            showTable: false,
            showChekout: false,
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.EditRow = this.EditRow.bind(this);
        this.DeleteRow = this.DeleteRow.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);

    }
    
    handleAddButtonClick(product_id, rate, qty, discount, price) {
        this.msgLabel.innerHTML = ""
        TotalPrice = TotalPrice + parseInt(price);
        this.setState({ showChekout: true })
        this.refs.tableLayer.addArrayToTbl(product_id, rate, qty, discount, price);
    }

    callFunctionLayer() {
        if (this.state.showFunctions && this.state.showTable) {
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
        // console.log(TotalPrice);

        TotalPrice = TotalPrice - price;
        // console.log(TotalPrice);

        let x = document.getElementById('salestbl');
        x.deleteRow(i);
        if (x.rows.length === 1) {
            this.setState({ showChekout: false })
        }
    }
    DeleteRow(price, i) {

        TotalPrice = TotalPrice - price;
        // console.log(TotalPrice);

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
        this.setState({ showChekout: false })
        let z = document.getElementById('salestbl');
        const invoice = this.invoice.value;
        const tr = this.refs.functionLayer.state.trType
        const customer_id = this.refs.functionLayer.state.selectedCustomer
        if (tr === 'Sale') {
            for (let index = 1; index < z.rows.length; index++) {
                const productName = z.rows[index].cells[1].innerHTML;
                const productId = z.rows[index].cells[7].innerHTML;
                const rate = z.rows[index].cells[2].innerHTML;
                const qty = z.rows[index].cells[3].innerHTML;
                const discount = z.rows[index].cells[4].innerHTML;
                const price = z.rows[index].cells[5].innerHTML;
                this.saveSalesToServer(customer_id, productId, rate, qty, discount, price, invoice, productName);
            }
            this.saveInvoice(TotalPrice, tr);
            TotalPrice = TotalPrice - TotalPrice;
            for (let index = z.rows.length - 1; index > 0; index--) {
                z.deleteRow(index);
            }
            return;
        }
        if (tr === 'Return') {
            for (let index = 1; index < z.rows.length; index++) {
                const productName = z.rows[index].cells[1].innerHTML;
                const productId = z.rows[index].cells[7].innerHTML;
                const rate = z.rows[index].cells[2].innerHTML;
                const qty = z.rows[index].cells[3].innerHTML;
                const discount = z.rows[index].cells[4].innerHTML;
                const price = z.rows[index].cells[5].innerHTML;

                this.saveReturnsToServer(customer_id, productId, rate, qty, discount, price, invoice, productName);
            }
            this.saveInvoice(TotalPrice, tr);
            TotalPrice = TotalPrice - TotalPrice;
            for (let index = z.rows.length - 1; index > 0; index--) {
                z.deleteRow(index);
            }
            return;
        }
    }
    saveSalesToServer = (customer, product, rate, qty, discount, price, invoice, productName) => {
        let sales = { customer: customer, product: product, rate: rate, qty: qty, discount: discount, price: price, invoice: invoice, productName: productName }

        var options = {
            method: 'POST',
            body: JSON.stringify(sales),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewSale', options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                let message = json.message;
                this.msgLabel.innerHTML = message;
            })
            .catch((error) => console.log(error))

        var options2 = {
            method: 'PUT',
            body: JSON.stringify(sales),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/updateSalesItemQty', options2)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                // let message = json.message;
                // this.refs.msglabel.innerHTML = message;
            })
            .catch((error) => console.log(error))

    }
    saveReturnsToServer = (customer, product, rate, qty, discount, price, invoice, productName) => {
        let returns = { customer: customer, product: product, rate: rate, qty: qty, discount: discount, price: price, invoice: invoice, productName: productName }

        var options = {
            method: 'POST',
            body: JSON.stringify(returns),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewReturn', options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                let message = json.message;
                this.msgLabel.innerHTML = message;
            })
            .catch((error) => console.log(error))

        var options2 = {
            method: 'PUT',
            body: JSON.stringify(returns),
            headers: { 'Content-Type': 'application/json' }
        }

        fetch('/updateReturnsItemQty', options2)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
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
                // console.log(json)
            })
            .catch((error) => console.log(error))
    }
    callCheckoutLayer() {
        if (this.state.showChekout) {
            return <CheckoutLayer
                handleCheckout={this.handleCheckout}
                checkoutBtnTxt={this.refs.functionLayer.state.trType}
            />
        }
    }
    render() {

        return (

            <div style={{ float: 'right', border: 'none' }} className=" col-sm-9 m-0 ">

                {this.callFunctionLayer()}
                {this.callTableLayer()}
                <div style={{ border: 'none' }} className='col-md-5 mt-2 p-0'>
                    <label className="label-sales">Total:</label>
                    <input type='text' value={TotalPrice} className='sales-input' style={{ width: '140px' }} disabled />
                    &nbsp;&nbsp;&nbsp;&nbsp; <label ref={(el) => { this.msgLabel = el }} style={{ color: '#274e13', fontWeight: 'bold' }}></label>
                </div>
                {this.callCheckoutLayer()}

            </div>

        )
    }
}




export default SalesOrReturnArea