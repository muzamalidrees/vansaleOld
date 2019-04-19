import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import './productArea/productStyles.css'
import SecuredProductArea from './productArea/SecuredProductArea'
import SecuredNewProduct from './productArea/breakDown/SecuredNewProduct'
import SecuredImportExport from '../../importExport/SecuredImportExport'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'


class Products extends Component {

    rightPaneLabel = () => {
        return (
            <label>Your<br></br>Products</label>
        )
    }

    render() {




        return (
            <div className="container-fluid p-0" style={{ border: 'none', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px', padding: '0px' }}>
                <div style={{ border: 'none' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/products/home' component={SecuredProductArea} />
                        <PropsRoute path='/products/add' component={SecuredNewProduct} />
                        <PropsRoute path='/products/import' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/products/export' component={SecuredImportExport} mt='8px' mb='8px' pt='22px' pb='22px' />
                        <PropsRoute path='/' component={NotFound} pt='158px' pb='159px' class={'col-sm-9'} />
                    </Switch>

                    <RightPane label={this.rightPaneLabel()} date={this.props.date} />
                </div>
            </div>

        )
    }
}


export default Products
