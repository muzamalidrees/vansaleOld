import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewRole } from '../../../../../../../actions/role-actions';



class NewRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleRoleRegister = (event) => {
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

        let role = { name: name }

        var options = {
            method: 'POST',
            body: JSON.stringify(role),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewRole', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (json.success) {
                    this.refs.name.value = ''
                }
                else {
                    this.refs.name.focus();
                }
                this.props.dispatch(addNewRole(json.data));
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newRPHdng'>Role Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handlePGRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-RP' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. admin" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3 align-self-end">
                            <button style={{ padding: '0px', width: '180px' }} className="RPRegisterBtn" type="submit">Register</button>
                        </div>
                    </div>

                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-RP'></label>
                    </div>

                </form>

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {
        rolesReducer: store.rolesReducer
    }
}

export default connect(mapStateToProps)(NewRole)