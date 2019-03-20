import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPriceGroup } from '../../../../../actions/PG-actions';



class NewPriceGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryValue: ''
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }


    handlePGRegister = (event) => {
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
        let category = this.state.selectedCategoryValue
        let price = this.refs.price.value
        let BBPrice = this.refs.BBPrice.value

        let priceGroup = { name: name, category: category, price: price, BBPrice: BBPrice }

        var options = {
            method: 'POST',
            body: JSON.stringify(priceGroup),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewPriceGroup', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (message == 'price group registered successfully') {
                    this.refs.name.value = ''
                    this.refs.price.value = ''
                    this.refs.BBPrice.value = ''
                    this.setState({ selectedCategoryValue: '' })
                }
                else {
                    this.refs.name.focus();
                }
                this.props.dispatch(addNewPriceGroup(json.data));
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }

    handleCategoryChange(e) {
        this.setState({ selectedCategoryValue: e.target.value })
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newPGHdng'>Price Group Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handlePGRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. John" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Product Category</label>
                            <select value={this.state.selectedCategoyrValue} onChange={this.handleCategoryChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select Product Category--</option>
                                <option value='1'>Area 1</option>
                                <option value='2'>Area 2</option>
                                <option value='3'>Area 3</option>
                                <option value='4'>Area 4</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select an area.
                            </div>
                        </div>

                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Price</label>
                            <input type="text" className="form-control" ref="price" placeholder="e.g. 1000" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid Price.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-PG' htmlFor="">Byuing_back Price</label>
                            <input type="text" className="form-control" ref="BBPrice" placeholder="e.g. 950" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a cell no..
                            </div>
                        </div>

                    </div>



                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-PG'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="PGRegisterBtn" type="submit">Register</button>
                        </div>
                    </div>

                </form>

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {
        PGReducer: store.PGReducer
    }
}

export default connect(mapStateToProps)(NewPriceGroup)