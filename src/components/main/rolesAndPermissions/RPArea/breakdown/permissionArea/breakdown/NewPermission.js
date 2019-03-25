import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPermission } from '../../../../../../../actions/permission-actions';



class NewPermission extends Component {
    constructor(props) {
        super(props);

    }


    handlePermissionRegister = (event) => {
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

        let permission = { name: name }

        var options = {
            method: 'POST',
            body: JSON.stringify(permission),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewPermission', options)
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
                this.props.dispatch(addNewPermission(json.data));
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newRPHdng'>Permission Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handlePermissionRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div style={{ border: 'none' }} className="col-md-6 mb-3">
                            <label className='label-RP' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. admin" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div style={{ border: 'none' }} className="col-md-6 mb-3 align-self-end">

                            <button style={{ padding: '0px', width: "180px" }} className="RPRegisterBtn " type="submit">Register</button>
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
        permissions: store.permissionsReducer
    }
}

export default connect(mapStateToProps)(NewPermission)