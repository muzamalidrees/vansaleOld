import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './RPStyles.css';
import RPArea from './RPArea/RPArea';
import SetRolesPermissions from './RPArea/breakdown/SetRolesPermissions';
import RoleArea from './RPArea/breakdown/roleArea/RoleArea';
import NewRole from './RPArea/breakdown/roleArea/breakdown/NewRole';
import PermissionArea from './RPArea/breakdown/permissionArea/PermissionArea';
import NewPermission from './RPArea/breakdown/permissionArea/breakdown/NewPermission'
import ImportExport from '../../importExport/ImportExport'
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
                        <Route path='/rolesAndPermissions/home' component={RPArea} />
                        <PropsRoute path='/rolesAndPermissions/set' component={SetRolesPermissions} roles={this.props.roles} permissions={this.props.permissions} />
                        <Route path='/rolesAndPermissions/r/home' component={RoleArea} />
                        <Route path='/rolesAndPermissions/r/add' component={NewRole} />
                        <PropsRoute path='/rolesAndPermissions/r/import' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/rolesAndPermissions/r/export' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <Route path='/rolesAndPermissions/p/home' component={PermissionArea} />
                        <Route path='/rolesAndPermissions/p/add' component={NewPermission} />
                        <PropsRoute path='/rolesAndPermissions/p/import' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/rolesAndPermissions/p/export' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        roles: store.rolesReducer,
        permissions: store.permissionsReducer
    }
}

export default connect(mapStateToProps)(RolesAndPermissions)
