import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropsRoute } from 'react-router-with-props';
import About from './misc/About';
import Contact from './misc/Contact';
import NotFound from './misc/NotFound';
import SecuredHome from './misc/SecuredHome';
import SecuredLogin from './auth/SecuredLogin';
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
import Inventory from './main/inventory/Inventory';
import { AbilityContext } from "../configs/Ability-context";
import defineRulesFor from "../configs/Ability";
import { Ability } from "@casl/ability";


const ability = new Ability();

class Content extends Component {
    state = {
        date: new Date(),
        // value="admin"
    };


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick = () => {
        this.setState({ date: new Date() });
    }
    changeUserState = (x) => {
        var user1;
        switch (x) {
            case '8':
                user1 = 'superAdmin'
                break;
            case '4':
                user1 = 'admin'
                break;
            case '7':
                user1 = 'operator'
                break;
            case '5':
                user1 = 'endUser'
                break;
        }
        const rules = defineRulesFor(user1);
        ability.update(rules);
        // this.setState({
        //     value: user1
        // });
        this.props.callLogoutButton();

    }
    render() {

        return (

            <div style={{}} className="container-fluid">
                <AbilityContext.Provider value={ability}>
                    <Switch>
                        {/* <Route path="/home" render={() => this.state.loggedIn ? <Home /> : <Redirect to='/login' />} /> */}
                        <PropsRoute exact path='/' component={SecuredLogin} changeUserState={this.changeUserState} />
                        <PropsRoute path="/login" component={SecuredLogin} changeUserState={this.changeUserState} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/home" component={SecuredHome} />
                        <PropsRoute path="/inventory" component={Inventory} date={this.state.date} />
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
                </AbilityContext.Provider>
            </div>

        )
    }
}


export default Content