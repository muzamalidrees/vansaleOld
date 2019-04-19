import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './driverArea/driverStyles.css'
import SecuredDriverArea from './driverArea/SecuredDriverArea'
import SecuredNewDriver from './driverArea/breakDown/SecuredNewDriver'
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Drivers extends Component {

    rightPaneLabel = () => {
        return (
            <label>Your<br></br>Drivers</label>
        )
    }

    render() {




        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/drivers/home' component={SecuredDriverArea} />
                        <PropsRoute path='/drivers/add' component={SecuredNewDriver} />
                        <PropsRoute path='/drivers/import' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/drivers/export' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default Drivers
