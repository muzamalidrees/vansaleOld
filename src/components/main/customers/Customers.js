import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './customerArea/customerStyles.css'
import SecuredCustomerArea from './customerArea/SecuredCustomerArea'
import SecuredNewCustomer from './customerArea/breakDown/SecuredNewCustomer'
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Customers extends Component {

    rightPaneLabel = () => {
        return (
            <label>Your<br></br>Customers</label>
        )
    }

    render() {


        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/customers/home' component={SecuredCustomerArea} />
                        <PropsRoute path='/customers/add' component={SecuredNewCustomer} />
                        <PropsRoute path='/customers/import' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/customers/export' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default (Customers)
