import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux'

class PopUp extends Component {
    componentDidMount() {
        this.setState({ showOptions: true })
    }
    constructor(props) {
        super(props);

        this.state = {
            showOptions: false,
        };
    }
    updatePG(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updatePrice = this.refs.price.value;
            let updateBBPrice = this.refs.BBPrice.value;
            let updateProductCategory = this.refs.category.value;
            this.props.updatedb(updateName, updatePrice, updateBBPrice, updateProductCategory)
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
                        Edit Price-Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="POST" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Price</label>
                                <input type="text" className="form-control" ref="price" defaultValue={this.props.editprice} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Buying-back-Price</label>
                                <input type="text" className="form-control" ref="BBPrice" defaultValue={this.props.editbbprice} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-PG' htmlFor="">Product-Category</label>
                                <select defaultValue={this.props.editcategory} ref="category" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select a Product-Category--</option>
                                    <option value='electronics'>Electronics</option>
                                    <option value='sports'>Sports</option>
                                    {/* {this.productCategoryOptions()} */}
                                </select>
                            </div>

                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updatePG.bind(this)} >Save</Button>
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
