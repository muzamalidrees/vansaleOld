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
        fetch('/isAuth')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                this.setState({ loggedIn: json.loggedIn })
                this.forceUpdate()

            })
            .catch((err => {
                console.log(err);
            }))
        this.state = {
            loggedIn: false
        }
    }
    callLogoutButton = () => {
        this.setState({ loggedIn: true })
    }
    loggedOut = () => {
        this.setState({ loggedIn: false })
        console.log('ok');
        
    }

    render() {
        if (this.state.loggedIn) {
            document.getElementById('homeLink').style.display = ''
            document.getElementById('homeLinkCode').style.display = ''
        }
        return (
            <Provider store={store}>

                <BrowserRouter>

                    <div style={{ backgroundColor: '#999999' }}>
                        <Header
                            ref='headerLayer'
                            loggedIn={this.state.loggedIn}
                            loggedOut={this.loggedOut}
                        />
                        <hr className="hr1" />
                        {/* <Route path='/' component={Content}  /> */}
                        <Content
                            ref='contentLayer'
                            callLogoutButton={this.callLogoutButton}
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