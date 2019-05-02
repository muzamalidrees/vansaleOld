import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewInventory } from '../../../../../actions/inventory-actions'



class NewInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: '',
            qty: ''
        }
        this.calculatedPrice = this.calculatedPrice.bind(this);
    }

    handleInventoryRegister = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            this.saveToServer();
        }
    }
    saveToServer = () => {
        // alert('hello')
        let name = this.refs.name.value
        let description = this.refs.description.value
        let rate = this.state.rate
        let qty = this.state.qty
        let price = this.refs.price.value

        let inventoryItem = { name: name, description: description, rate: rate, qty: qty, price: price, }

        var options = {
            method: 'POST',
            body: JSON.stringify(inventoryItem),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewInventory', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                // if (message === 'inventory registered successfully') {
                this.refs.name.value = ''
                this.refs.description.value = ''
                this.setState({ rate: '', qty: '' })
                // }
                // else {
                // this.refs.name.focus();
                // }
                this.props.dispatch(addNewInventory(json.data));
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }
    handleRateChange = (e) => {
        this.setState({ rate: e.target.value })
    }
    handleQtyChange = (e) => {
        this.setState({ qty: e.target.value })
    }
    calculatedPrice = () => {
        var price = this.state.rate * this.state.qty
        return price;
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newInventoryHdng'>Inventory Items Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleInventoryRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-Inventory' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. Bat" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-Inventory' htmlFor="">Description</label>
                            <input type='text' className="form-control" ref="description" placeholder="e.g. Manufactured by Nokia" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Description
                            </div>
                        </div>


                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-Inventory' htmlFor="">Rate</label>
                            <input type="number" min='1' className="form-control" value={this.state.rate} onChange={this.handleRateChange} ref="rate" placeholder="e.g. 1000" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Rate can't be a -ve value
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-Inventory' htmlFor="">Qty.</label>
                            <input type="number" min='1' className="form-control" value={this.state.qty} onChange={this.handleQtyChange} ref="qty" placeholder="e.g. 125" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Qty can't be a -ve value
                            </div>
                        </div>

                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">

                        <div className="col-md-6 mb-3">
                            <label className='label-Inventory' htmlFor="">Price</label>
                            <input type="number" className="form-control" ref="price" value={this.calculatedPrice()} disabled />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid Price.
                            </div>
                        </div>

                    </div>

                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-Inventory'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="InventoryRegisterBtn" type="submit">Register</button><br></br>
                        </div>
                    </div>

                </form>

            </div >

        )
    }
}

export default connect()(NewInventory)