import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './areaStyles.css';
import SecuredAreasArea from './areasArea/SecuredAreasArea';
import SecuredNewArea from './areasArea/breakDown/SecuredNewArea';
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Areas extends Component {
    rightPaneLabel = () => {
        return (
            <label>Areas</label>
        )
    }

    render() {

        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '72px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/areas/home' component={SecuredAreasArea} />
                        <PropsRoute path='/areas/add' component={SecuredNewArea} />
                        <PropsRoute path='/areas/import' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/areas/export' component={SecuredImportExport} mt='7px' mb='7px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} class={'col-sm-9'} pt='158px' pb='157px' />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>
        )
    }
}


export default Areas
