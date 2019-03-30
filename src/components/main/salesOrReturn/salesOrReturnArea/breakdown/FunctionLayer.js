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
        this.setState({ selectedProduct: e.target.value }, function () {
        });
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
    showCustomerData() {
        const { customers } = this.props;
        const customer = customers.filter((customer) => customer.id == this.state.selectedCustomer).shift()
        // const customerData = 
        if (this.state.showCustomerData) {
            return (<div style={{ border: 'none' }} className='col-sm mb-2 p-0 align-self-end'>
                <dl className='m-0 p-0'>
                    <dt style={{ display: 'inline' }}>Name: </dt><dd>{customer.name}</dd>
                    <dt style={{ display: 'inline' }}>Email: </dt><dd>{customer.email}</dd>
                    <br></br>
                    <dt style={{ display: 'inline' }}>Phone.no: </dt><dd>{customer.cell}</dd>
                    <dt style={{ display: 'inline' }}>Address: </dt><dd>{customer.address}</dd>
                </dl>
            </div>)

        }
    }
    IDdefaultvalue() {
        return 1125;
    }
    discountedPrice() {
        var initialPrice = (this.state.selectedRate * this.state.selectedQTy)

        var discount = (this.state.selectedDiscount / 100) * initialPrice
        // var discount = 0
        var discountedPrice = initialPrice - discount
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
    EditRow(product_id, rate, qty, discount) {
        this.setState({
            selectedProduct: product_id,
            selectedRate: rate,
            selectedQTy: qty,
            selecetdDiscount: discount
        })
    }

    render() {

        const customerOptions = this.props.customers.map(customer => { return <option key={customer.id} value={customer.id}>{customer.name}</option> })
        const productOptions = this.props.products.map(product => { return <option key={product.id} value={product.id}>{product.name}</option> })

        return (

            <div style={{ border: '1px solid red' }} className=" col-sm-12 m-0 p-0 ">
                <form style={{ border: 'none' }} onSubmit={this.handleFormSubmit} ref='myForm' method='POST' className='form-row m-0' noValidate>
                    <div style={{ border: 'none' }} className='form-row col-12 m-0 p-0 justify-content-start'>

                        <div style={{ border: 'none' }} className='col-md-1 mb-2  align-self-end'>
                            <select value={this.state.trType} onChange={this.handleTrTypeChange} className=' salesSelect' style={{ width: '85px' }}>
                                <option value="sales">Sales</option>
                                <option value="returns">Returns</option>
                            </select>
                        </div>
                        <div style={{ border: 'none' }} className='col-md-2.5 mb-2 align-self-end'>
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
                            <input type='text' defaultValue={this.IDdefaultvalue()} className='sales-input' style={{ width: '40px' }} disabled />
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
                            <input ref='rate' type='text' value={this.state.selectedRate} onChange={this.handleRateChange} className='sales-input' style={{ width: '' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>QTY:</label><br></br>
                            <input ref='qty' type='text' value={this.state.selectedQTy} onChange={this.handleQTYchange} className='sales-input' style={{ width: '75px' }} required />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Discount:</label><br></br>
                            <input ref={this.discount} value={this.state.selectedDiscount} onChange={this.handleDiscountChange} type='text' className='sales-input' style={{ width: '75px' }} required />
                        </div>

                        <div style={{ border: 'none' }} className='col-sm  mb-2 p-0'>
                            <label className='label-sales'>Price:</label><br></br>
                            <input type='text' ref="price" value={this.discountedPrice()} className='sales-input' style={{ width: '' }} disabled />
                        </div>
                        <div style={{ border: 'none' }} className='col-sm  mb-2 mt-2 p-0 align-self-end'>
                            <button type="submit" className='btn btn-info btn-sm' style={{ fontWeight: '600', width: '250px', marginBottom: '1px', marginLeft: '5px', marginRight: '5px' }}>Add</button>
                        </div>

                    </div>
                </form>
            </div>

        )
    }
}




export default FunctionLayer