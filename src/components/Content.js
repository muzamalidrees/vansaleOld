import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import About from './misc/About';
import Contact from './misc/Contact';
import Home from './misc/Home';
import NotFound from './misc/NotFound';
import Login from './auth/Login';
import Customers from './main/customers/Customers';
import PriceGroups from './main/priceGroups/PriceGroups';
import Drivers from './main/drivers/Drivers';
import Routes from './main/routes/Routes';
import Products from './main/products/Products';
import ProductCategories from './main/productCategories/ProductCategories';
import Areas from './main/areas/Areas'
import Users from './main/users/Users'
import RolesAndPermissions from './main/rolesAndPermissions/RolesAndPermissions'
import SalesOrReturn from './main/salesOrReturn/SalesOrReturn';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick = () => {
        this.setState({ date: new Date() });
    }

    render() {

        return (

            <div style={{}} className="container-fluid">
                <Switch>

                    <Route exact path='/' component={Login} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/home" component={Home} />
                    <PropsRoute path='/customers' component={Customers} date={this.state.date} />
                    <PropsRoute path='/priceGroups' component={PriceGroups} date={this.state.date} />
                    <PropsRoute path='/drivers' component={Drivers} date={this.state.date} />
                    <PropsRoute path='/routes' component={Routes} date={this.state.date} />
                    <PropsRoute path='/products' component={Products} date={this.state.date} />
                    <PropsRoute path='/productCategories' component={ProductCategories} date={this.state.date} />
                    <PropsRoute path='/areas' component={Areas} date={this.state.date} />
                    <PropsRoute path='/users' component={Users} date={this.state.date} />
                    <PropsRoute path='/rolesAndPermissions' component={RolesAndPermissions} date={this.state.date} />
                    <PropsRoute path='/salesOrReturn' component={SalesOrReturn} date={this.state.date} />
                    <PropsRoute path='/' component={NotFound} pt='186px' pb='185px' class={'sol-sm-12'} />

                </Switch>
            </div>

        )
    }
}


export default Content