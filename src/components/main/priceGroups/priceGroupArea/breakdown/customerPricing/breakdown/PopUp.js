import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class PopUp extends Component {

    updateCP(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateCustomer = this.refs.customer.value;
            let updatePriceGroup = this.refs.priceGroup.value;
            this.props.updatedb(updateCustomer, updatePriceGroup)
        }
    }
    // productCategoryOptions = () => {
    //     if (this.state.showOptions) {
    //         return (

    //             this.props.productCategoryOptions.map(category => { return <option key={category.id} value={category.name}>{category.name}</option> })
    //         )
    //     }
    //     else {
    //         return null;
    //     }
    // }

    render() {
        const customerOptions = this.props.customers.map(customer => { return <option key={customer.id} value={customer.id}>{customer.name}</option> });
        const priceGroupOptions = this.props.priceGroups.map(priceGroup => { return <option key={priceGroup.id} value={priceGroup.id}>{priceGroup.name}</option> });

        return (

            <Modal
                // {...this.props}
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Customer-Pricing
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="POST" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">

                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Customer</label>
                                <select defaultValue={this.props.editcustomer} ref="customer" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select a Customer--</option>
                                    {customerOptions}
                                </select>
                            </div>


                        </div>
                        <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">


                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Price-Group</label>
                                <select defaultValue={this.props.editpricegroup} ref="priceGroup" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select a Price-Group--</option>
                                    {priceGroupOptions}
                                </select>
                            </div>

                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateCP.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}



export default PopUp
