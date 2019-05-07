import React, { Component } from 'react';
import { Redirect } from 'react-router'
import './loginStyles.css';

class Login extends Component {
    _isMounted = false
    componentWillUnmount() {
        this._isMounted = false;
        return null
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    validateLogin = (evt) => {


        evt.preventDefault();
        evt.stopPropagation();
        let form = this.refs.loginForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            this.handleLogin();
        }

    }
    handleLogin = () => {
        this._isMounted = true
        var options = {
            method: 'POST',
            body: JSON.stringify({ username: this.refs.email.value, password: this.refs.password.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('/auth', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                let message = json.message;
                if (message === 'incorrect Password') {
                    this.msgLabel.innerHTML = message;
                    this.refs.password.value = "";
                    this.refs.password.focus();
                }
                else if (message === `email doesn't exist`) {
                    this.msgLabel.innerHTML = message;
                    this.refs.email.value = "";
                    this.refs.email.focus();
                }
                else {

                    this.msgLabel.innerHTML = message;
                    this.msgLabel.style.marginTop = '0px';
                    if (this._isMounted) {
                        this.setState({ isLoggedIn: true })
                        // this.props.history.push(json.route);
                    }
                    this.props.changeUserState(json.user.role_id)
                }
            })
            .catch((err) => console.log(err))
    }
    onChangeLabel = () => {
        this.msgLabel.innerHTML = '';
    }
    redirect() {

    }

    render() {
        if (this.state.isLoggedIn) {
            document.getElementById('logoutButton').style.display = '';
            return <Redirect to='/home' />
        }
        else return (

            <div className="container" style={{ textAlign: 'center', backgroundColor: '#999999', marginTop: '81px', marginBottom: '81px', paddingTop: '81px', paddingBottom: '81px' }}>
                <form className='loginForm' ref='loginForm' onSubmit={this.validateLogin} method='POST' noValidate>
                    <h1 className='loginHdng'>Sign In</h1>

                    <div style={{ display: 'inline-block' }} className="form-row col-lg-6 m-0 p-0">
                        <div className='col form-group'>
                            <input type="email" onChange={this.onChangeLabel} className="form-control form-control-lg" ref="email" placeholder="Enter email" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please enter a valid email.
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div style={{ display: 'inline-block' }} className="form-row col-lg-6 m-0 p-0 ">
                        <div className='col form-group'>
                            <input type="password" onChange={this.onChangeLabel} className="form-control form-control-lg" ref="password" placeholder="Password" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please enter password.
                            </div>
                        </div>
                    </div>

                    <br></br>

                    {/* <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        </div> */}
                    <div style={{ display: 'inline-block' }} className="form-row  col-lg-5  ">
                        <label className="loginLabel" ref={el => { this.msgLabel = el }} htmlFor="loginBtn"></label>
                        <button type="submit" id='loginBtn' ref='loginBtn' className="col-sm-12 loginBtn">Sign In</button>
                    </div>

                </form>
            </div>



        )
    }
}
const button = () => {

}

export default Login