import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './salesOrReturnStyles.css'
import SalesOrReturnArea from './salesOrReturnArea/SalesOrReturnArea'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class SalesOrReturn extends Component {

    rightPaneLabel = () => {
        return (
            <label>Sale<br></br>Your<br></br>Products</label>
        )
    }

    render() {


        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/salesOrReturn/home' component={SalesOrReturnArea} />
                        {/* <PropsRoute path='/customers/add' component={NewCustomer} /> */}
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default SalesOrReturn
