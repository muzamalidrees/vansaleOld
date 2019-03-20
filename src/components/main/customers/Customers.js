import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import './customerArea/customerStyles.css'
import CustomerArea from './customerArea/CustomerArea'
import NewCustomer from './customerArea/breakDown/NewCustomer'
import ImportExport from '../../importExport/ImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Customers extends Component {

    rightPaneLabel = () => {
        return (
            <label>Your<br></br>Customers</label>
        )
    }

    render() {

        const searchResults = [
            { id: '', name: "", email: "", cell: "", address: "", role: '' }
        ]


        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/customers/home' component={CustomerArea} searchResults={searchResults} />
                        <PropsRoute path='/customers/add' component={NewCustomer} />
                        <PropsRoute path='/customers/import' component={ImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/customers/export' component={ImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default (Customers)
