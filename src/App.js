import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import './App.css';
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';
import Content from './components/Content';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoggedIn: this.refs.contentLayer.state.is
        }
        // this.showLogout = this.showLogout.bind(this);
    }
    // showLogout = (x) => {
    //     this.setState({ isLoggedIn: x })
    // }

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>

                    <div style={{ backgroundColor: '#999999' }}>
                        <Header
                            ref='headerLayer'
                        // isLoggedIn={this.state.isLoggedIn}
                        />
                        <hr className="hr1" />
                        <Content
                            ref='contentLayer'
                        // showLogout={this.showLogout}
                        />
                        <hr className="hr2" />
                        <Footer />
                    </div>

                </BrowserRouter>
            </Provider>
        );

    }

}

export default App;