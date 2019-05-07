import React, { Component } from 'react';
import Select from 'react-select';
import { addNewRP } from '../../../../../actions/RP-actions';
import { connect } from 'react-redux';




class SetRolesPermissions extends Component {
    _isMounted = false;
    componentWillMount() {
        this._isMounted = true
        fetch('/getAllPermissions',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                // this.props.dispatch(setPermissions(json.data))
                if (this._isMounted) {
                    this.setState({ permissions: json.data, showPermissions: true })
                }
            })
            .catch((error) => console.log(error))
        fetch('/getAllRoles',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                // this.props.dispatch(setRoles(json.data))
                if (this._isMounted) {
                    this.setState({ roles: json.data, showRoles: true })
                }
            })
            .catch((error) => console.log(error))
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedRole: '',
            selectedPermission: '',
            roles: '',
            permissions: ''
        }
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handlePermissionChange = this.handlePermissionChange.bind(this);
    }

    handleRolesPermissions = (event) => {
        event.preventDefault();

        if (this.state.selectedRole === '') {
            this.refs.msgLbl.innerHTML = "please select a Role";
            this.refs.roleSelect.focus();
        }
        else {
            this.refs.msgLbl.innerHTML = "";
            if (this.state.selectedPermission === '') {
                this.refs.msgLbl.innerHTML = "please select a Permission";
                this.refs.permissionSelect.focus();
            }
            else {
                this.refs.msgLbl.innerHTML = "";
                this.saveToServer();
            }
        }
    }
    saveToServer = () => {

        let role = this.state.selectedRole
        let permission = this.state.selectedPermission
        let rolePermission = { role: role, permission: permission }
        var options = {
            method: 'POST',
            body: JSON.stringify(rolePermission),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewRP', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let msg = json.message;
                let rID = json.role_id;
                let pID = json.permission_id;

                this.state.roles.forEach((role) => {
                    if (role.id == rID) {
                        rID = role.name
                        return;
                    }
                })
                this.state.permissions.forEach((permission) => {
                    if (permission.id == pID) {
                        pID = permission.name
                        return;
                    }
                })
                let displaySuccessMessage = 'Role: ' + rID + ', has been assigned Permission: ' + pID;
                let displayExistingMessage = 'Role: ' + rID + ', already has Permission: ' + pID;
                let displayErrorMessage = 'something went wrong';

                if (msg === 'created') {
                    this.refs.msgLbl.innerHTML = displaySuccessMessage
                    this.setState({ selectedRole: '', selectedPermission: '' })
                    this.refs.roleSelect.state.value.label = ''
                    this.refs.permissionSelect.state.value.label = ''
                    this.refs.roleSelect.focus();
                }
                if (msg === 'existing') {
                    this.refs.msgLbl.innerHTML = displayExistingMessage;
                    this.refs.permissionSelect.focus();
                }
                if (msg === 'error') {
                    this.refs.msgLbl.innerHTML = displayErrorMessage;
                }
                // this.refs.msgLbl.innerHTML = json.message
                this.props.dispatch(addNewRP(json.data));
            })
            .catch((error) => console.log(error))
    }
    handleRoleChange(e) {
        this.setState({ selectedRole: e.value })
    }
    handlePermissionChange(e) {
        this.setState({ selectedPermission: e.value })
    }


    render() {

        if (this.state.showRoles) {
            var roleOptions = this.state.roles.map(role => ({ key: role.id, label: role.name, value: role.id }));
        }
        if (this.state.showPermissions) {
            var permissionOptions = this.state.permissions.map(permission => ({ key: permission.id, label: permission.name, value: permission.id }))
        }

        return (
            <div style={{ border: 'none' }} className=" col-sm-9 m-0 p-0 ">

                < h1 style={{ border: 'none' }} ref={this.props.newRPHdng} className='newRPHdng' >Roles' Permissions</h1 >
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleRolesPermissions} method="POST" ref={this.props.myForm} className="form-row m-0 justify-content-center ">
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className='label-RP' htmlFor="">Role</label>
                            <Select ref='roleSelect' options={roleOptions} defaultInputValue={this.state.selectedRole} onChange={this.handleRoleChange} />
                            {/* <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div className="invalid-feedback">
                    Please select a Customer.
                </div> */}
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div className="col-md-6 mb-3">
                            <label className='label-RP' htmlFor="">Permission</label>
                            <Select ref='permissionSelect' options={permissionOptions} defaultInputValue={this.state.selectedPermission} onChange={this.handlePermissionChange} />
                            {/* <div className="valid-feedback">
                    Looks good!
                    </div>
                    <div className="invalid-feedback">
                    Please select a Price Group.
                </div> */}
                        </div>
                    </div>


                    <div style={{ border: 'none' }} className="row col-7 justify-content-center">
                        <label ref='msgLbl' className='label-RP'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="RPRegisterBtn" type="submit">Assign</button><br></br>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}
export default connect()(SetRolesPermissions)


