import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCustomer } from '../../../../../actions/customer-actions';



class NewCustomer extends Component {
    _isMounted = false;
    componentWillMount() {
        this._isMounted = true;
        fetch('/getAllAreas',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                if (this._isMounted) {
                    this.setState({ areas: json.data, showAreas: true })
                }
            })
            .catch((error) => console.log(error))
        fetch('/getAllRoutes',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                if (this._isMounted) {
                    this.setState({ routes: json.data, showRoutes: true })
                }

            })
            .catch((error) => console.log(error))
    }
    componentWillUnmount() {
        this._isMounted = false;
        return null;
    }
    constructor(props) {
        super(props);
        this.state = {
            areas: '',
            routes: '',
            showAreas: false,
            showRoutes: false,
            selectedRouteValue: '',
            selectedAreaValue: ''
        }
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }


    handleCustomerRegister = (event) => {
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
        let name = this.refs.name
        let email = this.refs.email
        let cell = this.refs.cell
        let address = this.refs.address
        let area = this.state.selectedAreaValue
        let route = this.state.selectedRouteValue

        let customer = { name: name.value, email: email.value, cell: cell.value, address: address.value, area: area, route: route }

        var options = {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewCustomer', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (message === 'customer registered successfully') {
                    this.refs.name.value = ''
                    this.refs.email.value = ''
                    this.refs.cell.value = ''
                    this.refs.address.value = ''
                    this.setState({ selectedRouteValue: '', selectedAreaValue: '' })
                }
                else {
                    this.refs.email.focus();
                }
                this.props.dispatch(addNewCustomer(json.data));
                this.refs.msgLabel.innerHTML = message;

            })
            .catch((error) => console.log(error))
    }

    handleRouteChange(e) {
        this.setState({ selectedRouteValue: e.target.value })

    }
    handleAreaChange(e) {
        this.setState({ selectedAreaValue: e.target.value })
    }
    areasOptions = () => {
        if (this.state.showAreas) {
            const areasOptions = this.state.areas.map(area => { return <option value={area.id} key={area.id}>{area.name}</option> })
            return areasOptions;
        }
        else return null;
    }
    routesOptions = () => {
        if (this.state.showRoutes) {
            const routesOptions = this.state.routes.map(route => { return <option value={route.id} key={route.id}>{route.name}</option> })
            return routesOptions;
        }
    }
    render() {

        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '30px', marginBottom: '30px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newCustomerHdng'>Customer Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleCustomerRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" pattern="[0-9a-zA-Z]+" placeholder="e.g. John" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Only letters and numbers allowed.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Email</label>
                            <input type="email" className="form-control" ref="email" placeholder="e.g. abc@abc.com" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid Email.
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">

                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Cell</label>
                            <input type="number" className="form-control" ref="cell" placeholder="e.g. +923011234567" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a cell no..
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Address</label>
                            <input type="text" className="form-control" ref="address" placeholder="e.g. London" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide your Address.
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">

                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Area</label>
                            <select value={this.state.selectedAreaValue} onChange={this.handleAreaChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select an Area--</option>
                                {this.areasOptions()}
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select an area.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-customer' htmlFor="">Route</label><br></br>
                            <select value={this.state.selectedRouteValue} onChange={this.handleRouteChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select a Route--</option>
                                {this.routesOptions()}
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select a route.
                            </div>
                        </div>

                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8 justify-content-center">
                        <label ref='msgLabel' className='label-customer'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="customerRegisterBtn" type="submit">Register</button>
                        </div>
                    </div>

                </form>

            </div >


        )
    }
}


export default connect()(NewCustomer)