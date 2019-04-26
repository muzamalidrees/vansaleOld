import React, { Component } from 'react';



class FunctionLayer extends Component {

    constructor(props) {
        super(props);
        this.test = '';
        this.state = {
            trType: 'Sale',
            selectedCustomer: '3',
            selectedProduct: '',
            selectedRate: '',
            selectedQTy: '',
            selectedDiscount: '',
            showCustomerData: false,
        }
        this.handleTrTypeChange = this.handleTrTypeChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleQTYchange = this.handleQTYchange.bind(this);
        this.handleDiscountChange = this.handleDiscountChange.bind(this);
        this.discountedPrice = this.discountedPrice.bind(this);
    }
    handleTrTypeChange(e) {
        this.setState({ trType: e.target.value })
    }
    handleCustomerChange(e) {
        this.setState({ selectedCustomer: e.target.value, showCustomerData: true })
    }
    handleProductChange(e) {
        let pValue = e.target.value;
        this.setState({ selectedProduct: pValue })
        this.setProductRate(pValue)
    }
    handleRateChange(e) {
        this.setState({ selectedRate: e.target.value }, function () {
        });
    }
    handleQTYchange(e) {
        this.setState({ selectedQTy: e.target.value }, function () {
        });
    }
    handleDiscountChange(e) {
        this.setState({ selectedDiscount: e.target.value }, function () {
        });

    }
    showCustomerData() {
        const { customers } = this.props;
        const customer = customers.filter((customer) => customer.id == this.state.selectedCustomer).shift()
        if (this.state.showCustomerData) {
            return (<div style={{ border: 'none' }} className='col-sm-4 mt-2 p-0 justify-content-center' >
                <dl className='m-0 p-0'>
                    <dt style={{ display: 'inline' }}>Name:</dt><dd>{customer.name}</dd>&nbsp;
                    <dt style={{ display: 'inline' }}>Email:</dt><dd>{customer.email}</dd>
                    <br></br>
                    <dt style={{ display: 'inline' }}>Phone.no:</dt><dd>{customer.cell}</dd>&nbsp;
                    <dt style={{ display: 'inline' }}>Address:</dt><dd>{customer.address}</dd>
                </dl>
            </div>)
        }
    }
    setProductRate(pValue) {
        const { products } = this.props;
        const product = products.filter((product) => product.id == pValue).shift()
        this.setState({ selectedQTy: '1', selectedDiscount: '0', selectedRate: product.price })
    }
    IDdefaultvalue() {
        let currentComponent = this;
        fetch('/getLastInvoiceID')
            .then((res) => res.json())
            .then(function (json) {
                // console.log(json)
                var lastInvoiceID = json.data.shift();
                let id = lastInvoiceID.id;
                currentComponent.test = id + 1;
            })
            .catch((error) => console.log(error));
        return this.test;
    }

    discountedPrice() {
        let initialPrice = (this.state.selectedRate * this.state.selectedQTy)
        let discount = this.state.selectedDiscount
        let discountAmount = (discount * initialPrice) / 100
        let discountedPrice = initialPrice - discountAmount
        return discountedPrice;
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
        }
        this.handleAddBtnClick();
    }
    handleAddBtnClick() {
        let product_id = this.state.selectedProduct;
        let rate = this.state.selectedRate;
        let qty = this.state.selectedQTy;
        let discount = this.state.selectedDiscount
        let price = this.refs.price.value;

        this.props.handleAddButtonClick(product_id, rate, qty, discount, price);
        this.setState({
            selectedProduct: '',
            selectedQTy: '',
            selectedRate: '',
            selectedDiscount: '',
        })
    }

    render() {

        const customerOptions = this.props.customers.map(customer => { return <option key={customer.id} value={customer.id}>{customer.name}</option> })
        const productOptions = this.props.products.map(product => { return <option key={product.id} value={product.id}>{product.name}</option> })

        return (

            <div style={{ border: 'none' }} className=" col-sm-12 m-0 p-0 ">
                <form style={{ border: 'none' }} onSubmit={this.handleFormSubmit} ref='myForm' method='POST' className='form-row m-0' >
                    <div style={{ border: 'none' }} className='form-row col-12 m-0 p-0 justify-content-start'>

                        {/* <div style={{ border: '1px solid black' }} className='col-sm m-0 p-0  align-self-end'> */}
                        <select value={this.state.trType} onChange={this.handleTrTypeChange} className=' salesSelect align-self-end' style={{ width: '85px' }}>
                            <option value="Sale">Sales</option>
                            <option value="Return">Returns</option>
                        </select>
                        {/* </div> */}
                        <div style={{ border: 'none' }} className='col-sm-2.5 m-0 p-0 align-self-end'>
                            <label htmlFor='customerSelect' className=' label-sales'>Customer:</label><br></br>
                            <select id='customerSelect' value={this.state.selectedCustomer} onChange={this.handleCustomerChange} className='salesSelect' style={{ width: '132px' }} required>
                                <option value='' disabled>--Customer--</option>
                                {customerOptions}
                            </select>
                        </div>

                        {this.showCustomerData()}

                    </div>
                    <br></br>
                    <div style={{ border: 'none' }} className='form-row col-12 m-0 '>

                        <div style={{ border: 'none' }} className='col-md  mb-2 p-0'>
                            <label className='label-sales'>ID:</label><br></br>
                            <input type='text' ref={this.props.id} value={this.IDdefaultvalue()} className='sales-input' style={{ width: '40px' }} disabled />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Product:</label><br></br>
                            <select ref='product' value={this.state.selectedProduct} onChange={this.handleProductChange} className='salesSelect' style={{ width: '250px' }} required>
                                <option value='' disabled>--Product--</option>
                                {productOptions}
                            </select>
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Rate:</label><br></br>
                            <input ref='rate' type='number' min='1' value={this.state.selectedRate} onChange={this.handleRateChange} className='sales-input' style={{ width: '75px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>QTY:</label><br></br>
                            <input ref='qty' type='number' min='0' value={this.state.selectedQTy} onChange={this.handleQTYchange} className='sales-input' style={{ width: '75px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Discount%:</label><br></br>
                            <input ref='discount' type='number' min='0' value={this.state.selectedDiscount} onChange={this.handleDiscountChange} className='sales-input' style={{ width: '75px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Price:</label><br></br>
                            <input type='number' ref="price" value={this.discountedPrice()} className='sales-input' style={{ width: '75px' }} disabled />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 mt-2 p-0 align-self-end'>
                            <button type="submit" className='btn btn-info btn-sm' style={{ fontWeight: '600', width: '250px', marginBottom: '0px', marginLeft: '5px', marginRight: '5px' }}>Add</button>
                        </div>

                    </div>
                </form>
            </div>

        )
    }
}




export default FunctionLayer