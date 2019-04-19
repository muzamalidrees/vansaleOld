import React, { Component } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

class IEPopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cTable: false,
            fTable: false
        };
    }
    createdRecordsTable(hdngRow, ccRows) {
        if (ccRows.length > 0) {
            return (
                <Table striped bordered responsive='xl' variant='dark'>
                    <caption style={{ textAlign: 'center', captionSide: 'top', color: '#274e13', fontWeight: '700', }}>Following Data is Successfully Imported.</caption>
                    <thead className='thead-light'>
                        {hdngRow}
                    </thead>
                    <tbody>
                        {ccRows}
                    </tbody>
                </Table>)
        }
        else return null;
    }
    existingRecordsTable(hdngRow, fcRows) {
        if (fcRows.length > 0) {
            return <Table striped bordered responsive='xl' >
                <caption style={{ textAlign: 'center', captionSide: 'top', color: "#783f04", fontWeight: '700', }}>Following Data is already Existing.</caption>
                <thead className='thead-dark'>
                    {hdngRow}
                </thead>
                <tbody>
                    {fcRows}
                </tbody>
            </Table>
        }
        else return null;
    }

    render() {
        const createdRecords = this.props.createdRecords;
        const existingRecords = this.props.existingRecords;
        const selectedDataValue = this.props.selectedDataValue;
        var ccRows = [];
        var fcRows = [];
        var hdngRow = [];
        var sr = 1;
        switch (selectedDataValue) {
            case 'AREAS':
            case 'PERMISSIONS':
            case 'PRODUCTcATEGORIES':
            case 'ROLES':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
                existingRecords.forEach(record => {
                    fcRows.push(
                        <tr key={sr}>
                            <td>{sr}</td>
                            <td>{record.name}</td>
                        </tr>
                    )
                    sr++;
                })
                break;
            case 'CUSTOMERS':
            case 'DRIVERS':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell</th>
                    <th>Address</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                            <td>{record[1]}</td>
                            <td>{record[2]}</td>
                            <td>{record[3]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
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
                break;
            case 'PRODUCTS':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                            <td>{record[1]}</td>
                            <td>{record[2]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
                existingRecords.forEach(record => {
                    fcRows.push(
                        <tr key={sr}>
                            <td>{sr}</td>
                            <td>{record.name}</td>
                            <td>{record.price}</td>
                            <td>{record.description}</td>
                        </tr>
                    )
                    sr++;
                })
                break;
            case 'ROUTES':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                            <td>{record[1]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
                existingRecords.forEach(record => {
                    fcRows.push(
                        <tr key={sr}>
                            <td>{sr}</td>
                            <td>{record.name}</td>
                            <td>{record.description}</td>
                        </tr>
                    )
                    sr++;
                })
                break;
            case 'USERS':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell</th>
                    <th>Address</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                            <td>{record[1]}</td>
                            <td>{record[2]}</td>
                            <td>{record[3]}</td>
                            <td>{record[4]}</td>
                            <td>{record[5]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
                existingRecords.forEach(record => {
                    fcRows.push(
                        <tr key={sr}>
                            <td>{sr}</td>
                            <td>{record.name}</td>
                            <td>{record.email}</td>
                            <td>{record.cell}</td>
                            <td>{record.address}</td>
                            <td>{record.username}</td>
                            <td>{record.password}</td>
                        </tr>
                    )
                    sr++;
                })
                break;
            case 'INVENTORY':
                hdngRow.push(<tr key={sr}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Decsription</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>);
                createdRecords.forEach(record => {
                    ccRows.push(
                        <tr key={sr} >
                            <td>{sr}</td>
                            <td>{record[0]}</td>
                            <td>{record[1]}</td>
                            <td>{record[2]}</td>
                            <td>{record[3]}</td>
                            <td>{record[4]}</td>
                        </tr>
                    )
                    sr++;
                });
                sr = 1;
                existingRecords.forEach(record => {
                    fcRows.push(
                        <tr key={sr}>
                            <td>{sr}</td>
                            <td>{record.name}</td>
                            <td>{record.description}</td>
                            <td>{record.rate}</td>
                            <td>{record.qty}</td>
                            <td>{record.price}</td>
                        </tr>
                    )
                    sr++;
                })
                break;
        }

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
                    {this.createdRecordsTable(hdngRow, ccRows)}
                    {this.existingRecordsTable(hdngRow, fcRows)}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} >OK</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


export default IEPopUp
