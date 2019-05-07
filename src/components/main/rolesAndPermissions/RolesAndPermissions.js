import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './RPStyles.css';
import SecuredRPArea from './RPArea/SecuredRPArea';
import SecuredSetRolesPermissions from './RPArea/breakdown/SecuredSetRolesPermissions';
import SecuredRoleArea from './RPArea/breakdown/roleArea/SecuredRoleArea';
import SecuredNewRole from './RPArea/breakdown/roleArea/breakdown/SecuredNewRole';
import SecuredPermissionArea from './RPArea/breakdown/permissionArea/SecuredPermissionArea';
import SecuredNewPermission from './RPArea/breakdown/permissionArea/breakdown/SecuredNewPermission'
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'
import { connect } from 'react-redux';


class RolesAndPermissions extends Component {

    rightPaneLabel = () => {
        return (
            <label>Roles<br></br>&<br></br>Permissions</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <Route path='/rolesAndPermissions/home' component={SecuredRPArea} />
                        <PropsRoute path='/rolesAndPermissions/set' component={SecuredSetRolesPermissions} />
                        <Route path='/rolesAndPermissions/r/home' component={SecuredRoleArea} />
                        <Route path='/rolesAndPermissions/r/add' component={SecuredNewRole} />
                        <PropsRoute path='/rolesAndPermissions/r/import' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/rolesAndPermissions/r/export' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <Route path='/rolesAndPermissions/p/home' component={SecuredPermissionArea} />
                        <Route path='/rolesAndPermissions/p/add' component={SecuredNewPermission} />
                        <PropsRoute path='/rolesAndPermissions/p/import' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/rolesAndPermissions/p/export' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}



export default RolesAndPermissions
