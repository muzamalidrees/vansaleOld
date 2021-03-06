import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './PGStyles.css';
import SecuredPriceGroupArea from './priceGroupArea/SecuredPriceGroupArea'
import SecuredNewPriceGroup from './priceGroupArea/breakdown/SecuredNewPriceGroup'
import SecuredCustomerPricing from './priceGroupArea/breakdown/customerPricing/SecuredCustomerPricing'
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class PriceGroups extends Component {
    rightPaneLabel = () => {
        return (
            <label>Price Groups</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/priceGroups/home' component={SecuredPriceGroupArea} />
                        <PropsRoute path='/priceGroups/add' component={SecuredNewPriceGroup} />
                        <PropsRoute path='/priceGroups/customerPricing' component={SecuredCustomerPricing} />
                        <PropsRoute path='/priceGroups/import' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/priceGroups/export' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}


export default (PriceGroups)
