import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewRoute } from '../../../../../actions/routes-actions';



class NewRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedArea: ''
        }
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }


    handleRouteRegister = (event) => {
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
        // alert('hello')
        let name = this.refs.name.value
        let description = this.refs.description.value
        let area = this.state.selectedArea

        let route = { name: name, description: description, area: area }

        var options = {
            method: 'POST',
            body: JSON.stringify(route),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('/addNewRoute', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let message = json.message;
                if (message === 'Route registered successfully') {
                    this.refs.name.value = ''
                    this.refs.description.value = ''
                    this.setState({ selectedArea: '' })
                }
                else {
                    this.refs.name.focus();
                }
                this.props.dispatch(addNewRoute(json.data));
                this.refs.msglabel.innerHTML = message;


            })
            .catch((error) => console.log(error))
    }

    handleAreaChange(e) {
        this.setState({ selectedArea: e.target.value })
    }

    render() {
        return (
            <div style={{ border: 'none', textAlign: 'center', marginTop: '72px', marginBottom: '72px' }} className=" col-sm-9 ">
                <h1 style={{ border: 'none' }} className='newRHdng'>Route Registration</h1>
                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleRouteRegister} method="POST" ref="myForm" className="form-row m-0 justify-content-center " noValidate>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-6 mb-3">
                            <label className='label-R' htmlFor="">Name</label>
                            <input type="text" className="form-control" ref="name" placeholder="e.g. John" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide a Name.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='label-R' htmlFor="">Area</label>
                            <select value={this.state.selectedArea} onChange={this.handleAreaChange} className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value=''>--Select Area--</option>
                                <option value='1'>Area 1</option>
                                <option value='2'>Area 2</option>
                                <option value='3'>Area 3</option>
                                <option value='4'>Area 4</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select an area.
                            </div>
                        </div>

                    </div>
                    <div style={{ border: 'none' }} className="form-row col-8">
                        <div className="col-md-12 mb-3">
                            <label className='label-R' htmlFor="">Description:</label>
                            <textarea type="text" className="form-control" ref="description" placeholder="e.g." required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please provide description of this route.
                            </div>
                        </div>

                    </div>



                    <div style={{ border: 'none' }} className="row col-8 justify-content-center">
                        <label ref='msglabel' className='label-R'></label>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">
                            <button className="RRegisterBtn" type="submit">Register</button>
                        </div>
                    </div>

                </form>

            </div >

        )
    }
}
const mapStateToProps = (store) => {
    return {
        routesReducer: store.routesReducer
    }
}

export default connect(mapStateToProps)(NewRoute)