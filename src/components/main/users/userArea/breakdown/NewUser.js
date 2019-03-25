import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../../../../../actions/user-actions';



class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRole: ''
        }
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }


    handleUserRegister = (event) => {
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
        let name = this.refs.name.value
        let email = this.refs.email.value
        let cell = this.refs.cell.value
        let address = this.refs.address.value
        let username = this.refs.username.value
        let password = this.refs.password.value
        let role = this.state.selectedRole

        let user = { name: name, email: email, cell: cell, address: address, username: username, password: password, role: role }

        var options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewUser', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (json.success) {
                    this.refs.name.value = ''
                    this.refs.email.value = ''
                    this.refs.cell.value = ''
                    this.refs.address.value = ''
                    this.refs.username.value = ''
                    this.refs.password.value = ''
                    this.setState({ selectedRole: '' })
                }
                else {
                    this.refs.email.focus();
                }
                this.props.dispatch(addNewUser(json.data));
                
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }

    handleRoleChange(e) {
        this.setState({ selectedRole: e.target.value })
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newUHdng'>User Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleUserRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>

                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. John" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Email</label>
                            <input type="email" className="form-control" ref="email" placeholder="e.g. abc@abc.com" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid email
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Phone no.</label>
                            <input type="text" className="form-control" ref="cell" placeholder="e.g. +923011234567" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a cell no..
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Address</label>
                            <input type="text" className="form-control" ref="address" placeholder="e.g. Lahore" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide an address
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Username</label>
                            <input type="text" className="form-control" ref="username" placeholder="e.g. john123" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid username
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-U' htmlFor="">Password</label>
                            <input type="text" className="form-control" ref="password" placeholder="e.g. Your Wish" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a password
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-12 mb-3">
                            <label className='label-U' htmlFor="">Role</label>
                            <select value={this.state.selectedRole} onChange={this.handleRoleChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select Role--</option>
                                <option value='1'>Role 1</option>
                                <option value='2'>Role 2</option>
                                <option value='3'>Area 3</option>
                                <option value='4'>Area 4</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select an area
                            </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-U'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="URegisterBtn" type="submit">Register</button>
                        </div>
                    </div>
                </form >

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {
        users: store.usersReducer
    }
}

export default connect(mapStateToProps)(NewUser)