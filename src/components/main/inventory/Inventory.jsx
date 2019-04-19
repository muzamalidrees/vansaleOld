import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './inventoryStyles.css';
import SecuredInventoryArea from './inventoryArea/SecuredInventoryArea'
import SecuredNewInventory from './inventoryArea/breakdown/SecuredNewInventory'
import SecuredImportExport from '../../importExport/SecuredImportExport';
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Inventory extends Component {
    rightPaneLabel = () => {
        return (
            <label>Your Inventory</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/inventory/home' component={SecuredInventoryArea} />
                        <PropsRoute path='/inventory/add' component={SecuredNewInventory} />
                        <PropsRoute path='/inventory/import' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/inventory/export' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}


export default Inventory
