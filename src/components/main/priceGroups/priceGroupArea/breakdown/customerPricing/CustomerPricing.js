import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCustomerPricing } from '../../../../../../actions/PG-actions';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { isNull } from 'util';


class CustomerPricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomer: '',
            selectedPriceGroup: '',
            customers: '',
            priceGroups: ''
        }
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceGroupChange = this.handlePriceGroupChange.bind(this);
    }
    componentWillMount() {
        const customers = this.props.customers
        const priceGroups = this.props.priceGroups

        this.setState({ customers: customers, priceGroups: priceGroups })
    }


    handleCustomerPricing = (event) => {
        event.preventDefault();

        if (this.state.selectedCustomer == '') {
            this.refs.msgLbl.innerHTML = "please select customer";
            this.refs.customerSelect.focus();
        }
        else {
            this.refs.msgLbl.innerHTML = "";
            if (this.state.selectedPriceGroup == '') {
                this.refs.msgLbl.innerHTML = "please select priceGroup";
                this.refs.priceGroupSelect.focus();
            }
            else {
                this.refs.msgLbl.innerHTML = "";
                this.saveToServer();
            }
        }
    }
    saveToServer = () => {

        let cstmr = this.state.selectedCustomer
        let prcgrp = this.state.selectedPriceGroup

        let customerPriceGroup = { customer: cstmr, priceGroup: prcgrp }

        var options = {
            method: 'POST',
            body: JSON.stringify(customerPriceGroup),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/customerPricing', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let msg = json.msg;
                let cID = json.customerID;
                let pgID = json.priceGroupID;

                this.state.customers.forEach((customer) => {
                    if (customer['id'] == cID) {
                        cID = customer['name']
                        return;
                    }
                })
                this.state.priceGroups.forEach((priceGroup) => {
                    if (priceGroup['id'] == pgID) {
                        pgID = priceGroup['name']
                        return;
                    }
                })

                let displaySuccessMessage = 'customer: ' + cID + ', has been assigned Price-Group: ' + pgID;
                let displayExistingMessage = 'customer: ' + cID + ', already has Price-Group: ' + pgID;
                let displayErrorMessage = 'something went wrong';

                if (msg == 'created') {
                    this.refs.msgLbl.innerHTML = displaySuccessMessage;
                    this.setState({ selectedCustomer: '', selectedPriceGroup: '' })
                    this.refs.customerSelect.state.value.label = ''
                    this.refs.priceGroupSelect.state.value.label = ''
                    this.refs.customerSelect.focus();
                }
                if (msg == 'existing') {
                    this.refs.msgLbl.innerHTML = displayExistingMessage;
                    this.refs.priceGroupSelect.focus();
                }
                if (msg == 'error') {
                    this.refs.msgLbl.innerHTML = displayErrorMessage;
                }
                this.props.dispatch(setCustomerPricing(json.data));

            })
            .catch((error) => console.log(error))
    }

    handleCustomerChange(e) {
        this.setState({ selectedCustomer: e.value })
        console.log('state changed')
    }
    handlePriceGroupChange(e) {
        this.setState({ selectedPriceGroup: e.value })
        console.log('state changed')
    }

    render() {

        const customerOptions = this.state.customers.map(customer => ({ key: customer.id, label: customer.name, value: customer.id }));
        const priceGroupOptions = this.state.priceGroups.map(priceGroup => ({ key: priceGroup.id, label: priceGroup.name, value: priceGroup.id }))

        return (

            <div style={{ border: 'none', textAlign: 'center', marginTop: '71px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newPGHdng'>Customer Pricing</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleCustomerPricing} method="POST" ref="myForm" className="form-row m-0 justify-content-center ">
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Customer</label>
                            <Select ref='customerSelect' options={customerOptions} defaultInputValue={this.state.selectedCustomer} onChange={this.handleCustomerChange} />
                            {/* <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select a Customer.
                            </div> */}
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Price Group</label>
                            <Select ref='priceGroupSelect' options={priceGroupOptions} defaultInputValue={this.state.selectedPriceGroup} onChange={this.handlePriceGroupChange} />
                            {/* <select value={this.state.selectedPriceGroup} onChange={this.handlePriceGroupChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                            </select> */}
                            {/* <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select a Price Group.
                            </div> */}
                        </div>
                    </div>


                    <div style={{ border: 'none' }} className="row col-7 justify-content-center">
                        <label ref='msgLbl' className='label-PG'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="PGRegisterBtn" type="submit">Submit</button>
                        </div>
                    </div>

                </form>

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {
        customers: store.customersReducer,
        priceGroups: store.PGReducer

    }
}

export default connect(mapStateToProps)(CustomerPricing)