import React, { Component } from 'react';
import './miscStyles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faDollarSign, faGripHorizontal, faUserTie, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';


class Home extends Component {




    addADiv = (ref, sendTo, iconName, btnLabel, clas) => {

        return (
            <div ref={ref} className="col mb-3 ">
                <Link to={sendTo}>
                    <button className={clas}>
                        <FontAwesomeIcon icon={iconName} /><br />{btnLabel}
                    </button>
                </Link>
            </div>
        )
    }
    render() {

        return (

            <div className="container-fluid " style={{ backgroundColor: '#999999', paddingTop: '100px', paddingBottom: '90px' }}>
                <div className="row justify-content-center homepage">
                    <div className="row col-sm-10 row1 pb-3 ">

                        {this.addADiv('sales', 'salesOrReturn/home', faCashRegister, 'Sales', 'rctngl')}
                        {this.addADiv('customers', 'customers/home', faUsers, 'Customers', 'rctngl')}
                        {this.addADiv('drivers', 'drivers/home', faUserTie, 'Drivers', 'rctngl')}
                        {this.addADiv('inventory', 'inventory', faCubes, 'Inventory', 'rctngl')}
                        {this.addADiv('users', 'users/home', faUsers, 'Users', 'rctngl')}
                        {/* {this.addADiv('returns', 'returns', faUndo, 'Returns', 'rctngl')} */}
                        {this.addADiv('products', 'products/home', faCube, 'Products', 'rctngl')}
                        {/* {this.addADiv('routes', 'routes', faRoute, 'Routes', 'rctngl')} */}
                        {this.addADiv('stats', 'stats', faChartBar, 'Statistics', 'rctngl')}
                        {/* {this.addADiv('roles', 'roles', faUserCircle, 'Roles', 'rctngl')} */}
                        {/* {this.addADiv('priceGroups', 'priceGroups', faDollarSign, 'Price_Groups', 'rctnglWide')} */}
                        {/* {this.addADiv('productCategories', 'productCategories', faGripHorizontal, 'Product_Categories', 'rctnglWider')} */}
                        {this.addADiv('areas', 'areas/home', faChartArea, 'Areas', 'rctngl')}
                        {/* {this.addADiv('misc', 'misc', faTasks, 'Misc', 'rctngl')} */}
                        {/* {this.addADiv('permissions', 'permissions', faCheckDouble, 'Permissions', 'rctngl')} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home