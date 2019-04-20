import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class PopUp extends Component {
    componentDidMount() {
        this.setState({ showOptions: true })
    }
    constructor(props) {
        super(props);

        this.state = {
            showOptions: false,
        };
    }
    updateArea(e) {
        e.preventDefault();
        let form = this.refs.myForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            let updateName = this.refs.name.value;
            let updateCode = this.refs.aCode.value;
            this.props.updatedb(updateName, updateCode)
        }
    }
    render() {

        return (

            <Modal
                // {...this.props}
                show={this.props.show}
                onHide={this.props.onHide}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Area
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{ border: 'none', textAlign: 'left' }} ref="myForm" method="PUT" className="form-row m-0 justify-content-center " noValidate>
                        <div style={{ border: 'none' }} className="form-row col-8">

                            <div className="col-md-6 mb-3">
                                <label className='label-PC' htmlFor="">Name</label>
                                <input type="text" className="form-control" ref="name" defaultValue={this.props.editname} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className='label-PC' htmlFor="">Area_Code</label>
                                <input type="number" className="form-control" ref="aCode" defaultValue={this.props.editCode} required />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateArea.bind(this)} >Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PopUp
