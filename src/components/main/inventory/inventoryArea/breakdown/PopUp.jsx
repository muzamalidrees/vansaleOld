import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class PopUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rate: props.editRate,
            qty: props.editQty
        };

    }
    updateInventory(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updateDescription = this.refs.description.value;
            let updateRate = this.state.rate;
            let updateQty = this.state.qty;
            let updatePrice = this.refs.price.value;
            this.props.updatedb(updateName, updateDescription, updateRate, updateQty, updatePrice)
        }
    }
    handleQtyChange = (e) => {
        this.setState({ qty: e.target.value })
    }
    handleRateChange = (e) => {
        this.setState({ rate: e.target.value })
    }
    calculatedPrice = () => {
        var price = this.state.rate * this.state.qty;
        return price;
    }

    render() {

        return (

            <Modal
                // {...this.props}
                show={true}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Inventory Item
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="POST" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-Inventory' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-Inventory' htmlFor="">Description</label>
                                <input type='text' className="form-control" ref="description" defaultValue={this.props.editDescription} required />
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
                                <input type="number" className="form-control" ref="rate" defaultValue={this.state.rate} onChange={this.handleRateChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-Inventory' htmlFor="">Qty</label>
                                <input type="number" className="form-control" ref="qty" defaultValue={this.state.qty} onChange={this.handleQtyChange} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">


                            <div className="col-md-6 mb-3">
                                <label className='label-Inventory' htmlFor="">Price</label>
                                <input type="number" className="form-control" ref="price" value={this.calculatedPrice()} disabled />
                            </div>

                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateInventory.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
// const mapStateToProps = (store) => {
//     return {

//         productCategories: store.PCReducer
//     }
// }


export default
    //  connect(mapStateToProps)
    (PopUp)
