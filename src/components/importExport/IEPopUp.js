import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table'

class IEPopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cTable: false,
            fTable: false
        };
    }
    validation(ccRows, fcRows) {
        if (ccRows.length > 0) {
            return (
                <Table striped bordered responsive='sm' responsive='md' responsive='lg' responsive='xl' variant='dark'>
                    <caption style={{ textAlign: 'center', captionSide: 'top', color: '#274e13', fontWeight: '700', }}>Following Data is Successfully Imported.</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cell</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ccRows}
                    </tbody>
                </Table>)
        }
        if (fcRows.length > 0) {
            return <Table striped bordered responsive='lg' variant='dark'>
                <caption style={{ textAlign: 'center', captionSide: 'top', color: "#783f04", fontWeight: '700', }}>Following Data is already Existing.</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cell</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {fcRows}
                </tbody>
            </Table>
        }
    }

    render() {
        const createdRecords = this.props.createdRecords;
        const existingRecords = this.props.existingRecords;
        var ccRows = [];
        var fcRows = [];
        var sr = 1;
        createdRecords.forEach(record => {
            ccRows.push(
                <tr key={sr} >
                    <td>{sr}</td>
                    <td>{record.name}</td>
                    <td>{record.email}</td>
                    <td>{record.cell}</td>
                    <td>{record.address}</td>
                </tr>
            )
            sr++;
        });
        existingRecords.forEach(record => {
            fcRows.push(
                <tr key={sr}>
                    <td>{sr}</td>
                    <td>{record.name}</td>
                    <td>{record.email}</td>
                    <td>{record.cell}</td>
                    <td>{record.address}</td>
                </tr>
            )
            sr++;
        })

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
                </Modal.Header>
                <Modal.Body>
                    {this.validation(ccRows, fcRows)}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} >OK</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default IEPopUp
