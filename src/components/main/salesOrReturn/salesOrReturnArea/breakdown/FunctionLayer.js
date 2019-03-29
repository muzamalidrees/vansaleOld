import React, { Component } from 'react';



class FunctionLayer extends Component {

    constructor(props) {
        super(props);
        this.discount = React.createRef();
        this.state = {
            trType: '',
            selectedCustomer: '',
            selectedProduct: '',
            selectedRate: '',
            selectedQTy: '',
            selectedDiscount: '',
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
        this.setState({ selectedCustomer: e.target.value })
    }
    handleProductChange(e) {
        this.setState({ selectedProduct: e.target.value })
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

        this.setState({ selecetdDiscount: e.target.value }, function () {
        });

    }
    IDdefaultvalue() {
        return 1125;
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
        let price = this.refs.price.value;
        this.props.handleAddButtonClick(product_id, rate, qty, price);
        this.setState({
            selectedProduct: '',
            selectedQTy: '',
            selectedRate: '',
        })
        this.refs.rate.value = '';
        this.refs.qty.value = '';
        // console.log(this.refs.price.value)
    }
    discountedPrice() {
        var initialPrice = (this.state.selectedRate * this.state.selectedQTy)

        var discount = (this.state.selectedDiscount / 100) * initialPrice
        var discountedPrice = initialPrice - discount
        return discountedPrice;
    }

    render() {

        const customerOptions = this.props.customers.map(customer => { return <option key={customer.id} value={customer.id}>{customer.name}</option> })
        const productOptions = this.props.products.map(product => { return <option key={product.id} value={product.id}>{product.name}</option> })

        return (

            <div style={{ border: '1px solid red' }} className=" col-sm-12 m-0 p-0 ">
                <form style={{ border: '1px solid green' }} onSubmit={this.handleFormSubmit} ref='myForm' method='POST' className='form-row m-0' noValidate>
                    <div style={{ border: '1px solid pink' }} className='form-row col-7 m-0 p-0 justify-content-start'>

                        <div style={{ border: 'none' }} className='col-sm-1.5 m-0  align-self-end'>
                            <select value={this.state.trType} onChange={this.handleTrTypeChange} className=' salesSelect' style={{ width: '85px' }}>
                                <option value="sales">Sales</option>
                                <option value="returns">Returns</option>
                            </select>
                        </div>
                        <div style={{ border: 'none' }} className='col-sm-2.5 m-0 '>
                            <label htmlFor='customerSelect' className=' label-sales'>Customer:</label><br></br>
                            <select id='customerSelect' value={this.state.selectedCustomer} onChange={this.handleCustomerChange} className='salesSelect' style={{ width: '132px' }} required>
                                <option value='' disabled>--Customer--</option>
                                {customerOptions}
                            </select>
                        </div>

                    </div>
                    <br></br>
                    <div style={{ border: '1px solid pink' }} className='form-row m-0 '>

                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>ID:</label><br></br>
                            <input type='text' defaultValue={this.IDdefaultvalue()} className='sales-input' style={{ width: '45px' }} disabled />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>Product:</label><br></br>
                            <select ref='product' value={this.state.selectedProduct} onChange={this.handleProductChange} className='salesSelect' style={{ width: '132px' }} required>
                                <option value='' disabled>--Product--</option>
                                {productOptions}
                            </select>
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>Rate:</label><br></br>
                            <input ref='rate' type='text' defaultValue={this.state.selectedRate} onChange={this.handleRateChange} className='sales-input' style={{ width: '65px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>QTY:</label><br></br>
                            <input ref='qty' type='text' defaultValue={this.state.selectedQTy} onChange={this.handleQTYchange} className='sales-input' style={{ width: '65px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>Discount:</label><br></br>
                            <input ref={this.discount} type='text' defaultValue={this.state.selectedDiscount} onChange={this.handleDiscountChange} className='sales-input' style={{ width: '65px' }} required />
                        </div>

                        <div style={{ border: 'none' }} className='col-sm  m-0'>
                            <label className='label-sales'>Price:</label><br></br>
                            <input type='text' ref="price" value={this.discountedPrice()} className='sales-input' style={{ width: '65px' }} disabled />
                        </div>
                        <div style={{ border: '' }} className='col-sm  m-0 align-self-end'>
                            <button type="submit" className='btn btn-info btn-sm' style={{ width: '100px' }}>Add</button>
                        </div>

                    </div>
                </form>
            </div>

        )
    }
}




export default FunctionLayer