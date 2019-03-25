import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './userStyles.css';
import UserArea from './userArea/UserArea'
import NewUser from './userArea/breakdown/NewUser'
import ImportExport from '../../importExport/ImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Users extends Component {
    rightPaneLabel = () => {
        return (
            <label>Users</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/users/home' component={UserArea} />
                        <PropsRoute path='/users/add' component={NewUser} />
                        <PropsRoute path='/users/import' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/users/export' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}


export default Users
