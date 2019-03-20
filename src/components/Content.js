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
import PriceGroupArea from './main/priceGroups/priceGroupArea/PriceGroupArea';


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

                    <PropsRoute path='/' component={NotFound} pt='186px' pb='185px' class={'sol-sm-12'} />


                </Switch>
            </div>

        )
    }
}


export default Content