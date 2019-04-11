import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './routeStyles.css';
import RouteArea from './routeArea/routeArea'
import NewRoute from './routeArea/breakdown/NewRoute'
import ImportExport from '../../importExport/ImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Routes extends Component {
    rightPaneLabel = () => {
        return (
            <label>Routes</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/routes/home' component={RouteArea} />
                        <PropsRoute path='/routes/add' component={NewRoute} />
                        <PropsRoute path='/routes/import' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/routes/export' component={ImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}


export default Routes
