import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

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
    updateRoute(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updateDescription = this.refs.description.value;
            let updateArea = this.refs.area.value;
            this.props.updatedb(updateName, updateDescription, updateArea)
        }
    }

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
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="PUT" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-R' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-R' htmlFor="">Description</label>
                                <input type="text" className="form-control" ref="description" defaultValue={this.props.editdescription} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-12 mb-3">
                                <label className='label-R' htmlFor="">Area</label>
                                <select defaultValue={this.props.editarea} ref="area" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select an Area--</option>
                                    <option value='1'>Area 1</option>
                                    <option value='2'>Area 2</option>
                                    {/* {this.productCategoryOptions()} */}
                                </select>
                            </div>

                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateRoute.bind(this)} >Save</Button>
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
