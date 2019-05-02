import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PopUp extends Component {
    _isMounted = false;
    componentWillMount() {
        this._isMounted = true;
        fetch('/getAllAreas',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                if (this._isMounted) {
                    this.setState({ areas: json.data, showAreas: true })
                }
            })
            .catch((error) => console.log(error))
        fetch('/getAllRoutes',
        )
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                if (this._isMounted) {
                    this.setState({ routes: json.data, showRoutes: true })
                }
            })
            .catch((error) => console.log(error))
    }
    componentWillUnmount() {
        this._isMounted = false;
        return null;
    }
    constructor(props) {
        super(props);

        this.state = {
            areas: '',
            routes: '',
            showAreas: false,
            showRoutes: false
        };
    }
    updateDriver(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updateEmail = this.refs.email.value;
            let updateCell = this.refs.cell.value;
            let updateAddress = this.refs.address.value;
            let updateArea = this.refs.area.value;
            let updateRoute = this.refs.route.value;
            this.props.updatedb(updateName, updateEmail, updateCell, updateAddress, updateArea, updateRoute)
        }
    }
    areasOptions = () => {
        if (this.state.showAreas) {
            const areasOptions = this.state.areas.map(area => { return <option value={area.id} key={area.id}>{area.name}</option> })
            return areasOptions;
        }
        else return null;
    }
    routesOptions = () => {
        if (this.state.showRoutes) {
            const routesOptions = this.state.routes.map(route => { return <option value={route.id} key={route.id}>{route.name}</option> })
            return routesOptions;
        }
    }

    render() {

        return (

            <Modal
                // {...this.props}
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Driver
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="PUT" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Email</label>
                                <input type="email" className="form-control" ref="email" defaultValue={this.props.editemail} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Cell</label>
                                <input type="text" className="form-control" ref="cell" defaultValue={this.props.editcell} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Address</label>
                                <input type="text" className="form-control" ref="address" defaultValue={this.props.editaddress} required />
                            </div>

                        </div>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Area</label>
                                <select defaultValue={this.props.editarea} ref="area" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select an Area--</option>
                                    {this.areasOptions()}
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-driver' htmlFor="">Route</label><br></br>
                                <select defaultValue={this.props.editroute} ref="route" className=' form-control ' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                    <option value=''>--Select a Route--</option>
                                    {this.routesOptions()}
                                </select>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateDriver.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default PopUp
