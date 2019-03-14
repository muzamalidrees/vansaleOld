import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import CustomerArea from './customerArea/CustomerArea'
import './customerArea/customerStyles.css'
import RightPane from '../RightPane'
import NotFound from '../../misc/NotFound'

import { setUsers } from '../../../actions/user-actions'



class Customers extends Component {
    // componentDidMount() {
    //     console.log(this.props.users);
    // }
    getCustomersData = () => {

        fetch('/getAllUsers')
            .then((res) => res.json())
            .then((json) => {
                // console.log(json.data)
                const users = json.data;
                console.log(users)
                this.props.dispatch(setUsers(users))

            })
            .catch((error) => console.log(error))
    }

    render() {
      const searchResults = [ {id: 6, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore"},
       {id: 7, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore", },
       {id: 8, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore", },
       {id: 9, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore", },
       {id: 10, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore", },
       {id: 11, name: "abc", email: "abc@abc.com", cell: "03041234567", address: "lahore", }]
        // const searchResults = this.props.users;
        // console.log(searchResults);
        return (
            <div className="container-fluid " style={{ border: '2px solid green', backgroundColor: '#999999', marginTop: '70px', marginBottom: '0px' }}>
                <div style={{ border: '2px solid pink' }} className='row m-0 p-0'>
                    <Switch>
                        <PropsRoute path='/customers/home' component={CustomerArea} searchResults={searchResults} />
                        <PropsRoute path='/' component={NotFound} mt='154px' mb='155px' />
                    </Switch>

                    <RightPane date={this.props.date} />

                </div>
            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.usersReducer
    }
}

export default connect(mapStateToProps)(Customers)
