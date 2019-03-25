import React, { Component } from 'react';
import { addNewArea } from '../../../../../actions/area-actions';



class NewArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleAreaRegister = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            this.saveToServer();
        }
    }
    saveToServer = () => {
        let name = this.refs.name.value
        let areaCode = this.refs.areaCode.value


        let area = {
            name: name,
            areaCode: areaCode
        }

        var options = {
            method: 'POST',
            body: JSON.stringify(area),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewArea', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (json.success) {
                    this.refs.name.value = '';
                    this.refs.areaCode.value = '';
                }
                else {
                    this.refs.name.focus();
                }
                this.refs.msglabel.innerHTML = message;
                this.props.dispatch(addNewArea(json.data));


            })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newAHdng'>Area Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleAreaRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-6 justify-content-center">
                        <div className="col-md-10 mb-3">
                            <label className='label-A' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. Electronics" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-10 mb-3">
                            <label className='label-A' htmlFor="">Area Code</label>
                            <input type="text" className="form-control" ref="areaCode" placeholder="e.g. 34000" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide an Area Code.
                            </div>
                        </div>


                    </div>

                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-A'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="ARegisterBtn" type="submit">Register</button>
                        </div>
                    </div>

                </form>

            </div >

        )
    }
}


export default NewArea