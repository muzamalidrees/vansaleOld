import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    updateUser(e) {
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
            let updateUsername = this.refs.username.value;
            let updatePassword = this.refs.password.value;
            let updateRole = this.refs.role.value;
            this.props.updatedb(updateName, updateEmail, updateCell, updateAddress, updateUsername, updatePassword, updateRole)
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
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="POST" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Email</label>
                                <input type="email" className="form-control" ref="email" defaultValue={this.props.editemail} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Phone no.</label>
                                <input type="text" className="form-control" ref="cell" defaultValue={this.props.editcell} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Address</label>
                                <input type="text" className="form-control" ref="address" defaultValue={this.props.editaddress} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Username</label>
                                <input type="text" className="form-control" defaultValue={this.props.editusername} ref="username" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-U' htmlFor="">Password</label>
                                <input type="text" className="form-control" defaultValue={this.props.editpassword} ref="password" required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-12 mb-3">
                                <label className='label-U' htmlFor="">Role</label>
                                <select ref='role' defaultValue={this.props.editrole} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select Role--</option>
                                    <option value='1'>Role 1</option>
                                    <option value='2'>Role 2</option>
                                    <option value='3'>Area 3</option>
                                    <option value='4'>Area 4</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateUser.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default PopUp
