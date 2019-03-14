import React, { Component } from 'react';
import './loginStyles.css';
// import StructureLogin from './login/StructureLogin';




class Login extends Component {

    validateLogin = (evt) => {  //parameter used to gain event information.


        evt.preventDefault();   //this prohibits page to reload.
        evt.stopPropagation();
        let form = this.refs.loginForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            this.handleLogin();
        }

        // var email = this.refs.email
        // var password = this.refs.password
        // var label = this.refs.loginLabel

        // if (email.value.length === 0) {
        //     label.innerHTML = "Please enter a valid Email";
        //     email.focus();
        // }
        // else {
        //     label.innerHTML = "";
        //     if (password.value.length === 0) {
        //         label.innerHTML = "Please enter Password";
        //         password.focus();
        //     }
        //     else {
        //         label.innerHTML = "";
        //         this.handleLogin();

        //     }
        // }
    }
    handleLogin = () => {

        var options = {
            method: 'POST',
            body: JSON.stringify({ username: this.refs.email.value, password: this.refs.password.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('/login', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                // var message = JSON.stringify(json.message)
                // console.log(json.message)
                var message = json.message;
                if (message == 'incorrect Password') {
                    console.log(message)
                    this.refs.password.innerHTML = "";
                    this.refs.password.focus();
                }
                else {
                    console.log('message')
                }
                this.refs.loginLabel.innerHTML = message;
                this.refs.loginBtn.style.marginTop = '0px';
                this.props.history.push(json.route);
            })
            .catch((json) => console.log(json.error))
    }

    render() {

        return (

            <div className="container" style={{ textAlign: 'center', backgroundColor: '#999999', marginTop: '81px', marginBottom: '81px', paddingTop: '81px', paddingBottom: '81px' }}>
                <form className='loginForm' ref='loginForm' onSubmit={this.validateLogin} method='POST' noValidate>
                    <h1 className='loginHdng'>Sign In</h1>

                    <div style={{ display: 'inline-block' }} className="form-row col-lg-6 m-0 p-0">
                        <div className='col form-group'>
                            <input type="email" className="form-control form-control-lg" ref="email" placeholder="Enter email" required />
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
                            <input type="password" className="form-control form-control-lg" ref="password" placeholder="Password" required />
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
                        <label className="loginLabel" ref='loginLabel' htmlFor="loginBtn"></label>
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