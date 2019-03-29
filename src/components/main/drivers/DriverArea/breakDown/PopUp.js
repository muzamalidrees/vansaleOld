import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    updateDriver(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updateEmail = this.refs.email.value;
            let updateCell = this.refs.cell.value;
            let updateAddress = this.refs.address.value;
            let updateArea = this.refs.area.value;
            let updateRoute = this.refs.route.value;
            this.props.updatedb(updateName, updateEmail, updateCell, updateAddress, updateArea, updateRoute)
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
                        Edit Driver
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="PUT" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Email</label>
                                <input type="email" className="form-control" ref="email" defaultValue={this.props.editemail} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Cell</label>
                                <input type="text" className="form-control" ref="cell" defaultValue={this.props.editcell} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Address</label>
                                <input type="text" className="form-control" ref="address" defaultValue={this.props.editaddress} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Area</label>
                                <select defaultValue={this.props.editarea} ref="area" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select an Area--</option>
                                    <option value='1'>Area 1</option>
                                    <option value='2'>Area 2</option>
                                    <option value='3'>Area 3</option>
                                    <option value='4'>Area 4</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Route</label><br></br>
                                <select defaultValue={this.props.editroute} ref="route" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select a Route--</option>
                                    <option value='1'>Route 1</option>
                                    <option value='2'>Route 2</option>
                                    <option value='3'>Route 3</option>
                                    <option value='4'>Route 4</option>
                                </select>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateDriver.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default PopUp
