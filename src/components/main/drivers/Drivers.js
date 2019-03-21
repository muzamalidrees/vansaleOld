import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import './driverArea/driverStyles.css'
import DriverArea from './driverArea/DriverArea'
import NewDriver from './driverArea/breakDown/NewDriver'
import ImportExport from '../../importExport/ImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Drivers extends Component {

    rightPaneLabel = () => {
        return (
            <label>Your<br></br>Drivers</label>
        )
    }

    render() {

        const DsearchResults = [
            { id: '2', name: "sd", email: "", cell: "45", address: "dsdd", area_id: "", route_id: "" }
        ]


        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/drivers/home' component={DriverArea} DsearchResults={DsearchResults} />
                        <PropsRoute path='/drivers/add' component={NewDriver} />
                        <PropsRoute path='/drivers/import' component={ImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/drivers/export' component={ImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default Drivers
