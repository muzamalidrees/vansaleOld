import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../../../../actions/product-actions';
import { setProductCategories } from '../../../../../actions/PC-actions';



class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryValue: '',
            productCategoryOptions: '',
            showOptions: false
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
    componentWillMount() {
        fetch('/getAllProductCategories',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.props.dispatch(setProductCategories(json.data))
                this.setState({ productCategoryOptions: json.data, showOptions: true })

            })
            .catch((error) => console.log(error))
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
        let name = this.refs.name
        let price = this.refs.price
        let description = this.refs.description
        let category = this.state.selectedCategoryValue

        let driver = { name: name.value, price: price.value, description: description.value, category: category }

        var options = {
            method: 'POST',
            body: JSON.stringify(driver),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewProduct', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (message == 'product registered successfully') {
                    this.refs.name.value = ''
                    this.refs.price.value = ''
                    this.refs.description.value = ''
                    this.setState({ selectedCategoryValue: '' })
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
        if (this.state.showOptions) {
            return (

                this.state.productCategoryOptions.map(category => { return <option key={category.id} value={category.name}>{category.name}</option> })
            )
        }
        else {
            return null;
        }
    }
    handleCategoryChange(e) {
        this.setState({ selectedCategoryValue: e.target.value })
    }
    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '30px', marginBottom: '30px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newProductHdng'>Product Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleProductRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-9 mb-3">
                            <label className='label-product' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. John" required />
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
                            <input type="text" className="form-control" ref="price" placeholder="e.g. 1000" required />
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
                            <select value={this.state.selectedCategoryValue} onChange={this.handleCategoryChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
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
        productsReducer: store.productsReducer
    }
}

export default connect(mapStateToProps)(NewProduct)