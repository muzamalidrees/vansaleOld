import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import About from './misc/About';
import Contact from './misc/Contact';
import Home from './misc/Home';
import NotFound from './misc/NotFound';
import Login from './auth/Login';
import importExport from './importExport/ImportExport';
import Customers from './main/customers/Customers';
import CustomerArea from './main/customers/customerArea/CustomerArea'


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
                    <Route path='/importExport' component={importExport} />
                    <PropsRoute path='/customers' component={Customers} date={this.state.date} />
                    <PropsRoute path='/' component={NotFound} mt='222px' mb='221px' />


                </Switch>
            </div>

        )
    }
}


export default Content