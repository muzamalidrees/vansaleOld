import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../../../../actions/product-actions';
import { setInventory } from '../../../../../actions/inventory-actions';
import { setProductCategories } from '../../../../../actions/PC-actions';


class NewProduct extends Component {

    componentWillMount() {
        fetch('/getAllInventory',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.props.dispatch(setInventory(json.data))
                this.setState({ showProducts: true })
            })
            .catch((error) => console.log(error))
        fetch('/getAllProductCategories',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.props.dispatch(setProductCategories(json.data))
                this.setState({ showCategories: true })

            })
            .catch((error) => console.log(error))
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            selectedProduct: '',
            showCategories: false,
            showProducts: false,
            showCostPrice: false
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
    }


    handleProductRegister = (event) => {
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
        let name = this.state.selectedProduct
        let price = this.price
        let description = this.refs.description
        let category = this.state.selectedCategory

        let product = { name: name, price: price.value, description: description.value, category: category }

        var options = {
            method: 'POST',
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewProduct', options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                let message = json.message;
                if (message == 'product registered successfully') {
                    this.price.value = ''
                    this.refs.description.value = ''
                    this.setState({ selectedCategory: '', selectedProduct: '' })
                }
                else {
                    this.refs.name.focus();
                }
                this.props.dispatch(addNewProduct(json.data));
                this.refs.msgLabel.innerHTML = message;

            })
            .catch((error) => console.log(error))
    }

    productCategoryOptions = () => {
        if (this.state.showCategories) {
            return (
                this.props.productCategories.map(category => { return <option key={category.id} value={category.id}>{category.name}</option> })
            )
        }
        else {
            return null;
        }
    }
    handleCategoryChange(e) {
        this.setState({ selectedCategory: e.target.value })
    }

    handleProductChange(e) {
        this.setState({ selectedProduct: e.target.value, showCostPrice: true })
    }
    showCostPrice() {

        let { inventory } = this.props;
        let item = inventory.filter((item) => item.name === this.state.selectedProduct).shift()

        if (this.state.showCostPrice && item !== undefined) {
            return <label style={{ color: '#274e13', fontWeight: 'normal' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Cost Price:{item.rate})</label>
        }
    }


    render() {
        if (this.state.showProducts) {
            var productOptions = this.props.inventory.map(item => { return <option key={item.id} value={item.name}>{item.name}</option> })
        }

        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '30px', marginBottom: '30px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newProductHdng'>Product Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleProductRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-9 mb-3">
                            <label className='label-product' htmlFor="">Name</label>
                            {/* <input type="text" className="form-control" ref="name" placeholder="e.g. John" required /> */}
                            <select ref='name' value={this.state.selectedProduct} onChange={this.handleProductChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select a Product--</option>
                                {productOptions}
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">

                        <div className="col-md-9 mb-3">
                            <label className='label-product' htmlFor="">Price</label>
                            {this.showCostPrice()}
                            <input type="number" min='0' className="form-control" ref={(el) => { this.price = el }} placeholder="e.g. 1000" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid Price.
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">

                        <div className="col-md-9 mb-3">
                            <label className='label-product' htmlFor="">Description</label>
                            <textarea className="form-control" ref="description" placeholder="e.g. Nokia" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Description
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">

                        <div className="col-md-9 mb-3">
                            <label className='label-product' htmlFor="">Category</label>
                            <select value={this.state.selectedCategory} onChange={this.handleCategoryChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select a Category--</option>
                                {this.productCategoryOptions()}
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select a Category.
                            </div>
                        </div>

                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <label ref='msgLabel' className='label-product'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="productRegisterBtn" type="submit">Add</button>
                        </div>
                    </div>

                </form>

            </div >


        )
    }
}
const mapStateToProps = (store) => {
    return {
        inventory: store.inventoryReducer,
        productCategories: store.PCReducer
    }
}

export default connect(mapStateToProps)(NewProduct)