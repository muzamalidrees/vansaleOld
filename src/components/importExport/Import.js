import React, { Component } from 'react';
import './IEStyles.css';
import IEPopUp from './IEPopUp';


class Import extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: '',
            sample: '',
            createdRecords: [],
            existingRecords: []
        }
        this.fileChange = this.fileChange.bind(this);
        this.settingSampleFileAddress = this.settingSampleFileAddress.bind(this)
        this.callModel = this.callModel.bind(this);
    }

    handleImport = () => {

        let file = this.state.selectedFile;
        var fd = new FormData();
        fd.append('data', file)
        fd.append('importing', this.props.data)
        var options = {
            method: 'POST',
            body: fd
        }
        fetch('/import', options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                let message = json.message;
                this.msgLabel.innerHTML = message
                this.msgLabel.style.display = ''
                let existingRecords = json.failure;
                if (message === '') {
                    let records = json.success.map(Object.values);
                    records.map(function (record) {
                        record.pop()
                        record.pop()
                        record.shift()
                    })
                    this.setState({ createdRecords: records, existingRecords: existingRecords, modelShow: true })
                }
                //***** */array of array to array of objects*/**********//

                // var createdRecords = records.map(function (record) {
                //     return {
                //         name: record[0],
                //         email: record[1],
                //         cell: record[2],
                //         address: record[3],
                //     };
                // });
            })
            .catch((error) => console.log(error))
    }

    settingSampleFileAddress = (data) => {
        switch (data) {
            case 'AREAS':
                this.setState({ sample: '/sampleAreas.xlsx' })
                break;
            case 'CUSTOMERS':
                this.setState({ sample: '/sampleCustomers.xlsx' })
                break;
            case 'DRIVERS':
                this.setState({ sample: '/sampleDrivers.xlsx' })
                break;
            case 'INVENTORY':
                this.setState({ sample: '/sampleInventory.xlsx' })
                break;
            case 'PERMISSIONS':
                this.setState({ sample: '/samplePermissions.xlsx' })
                break;
            case 'PRODUCTcATEGORIES':
                this.setState({ sample: '/sampleProductCategories.xlsx' })
                break;
            case 'PRODUCTS':
                this.setState({ sample: '/sampleProducts.xlsx' })
                break;
            case 'ROLES':
                this.setState({ sample: '/sampleRoles.xlsx' })
                break;
            case 'ROUTES':
                this.setState({ sample: '/sampleRoutes.xlsx' })
                break;
            case 'USERS':
                this.setState({ sample: '/sampleUsers.xlsx' })
                break;
            default:
                break;
        }
    }

    fileChange(e) {
        var files = e.target.files, f = files[0];
        this.setState({ selectedFile: f })
    }

    onHide = () => {
        this.setState({ modelShow: false, selectedFile: '' })
        this.props.makeDataValueEmpty();
        this.refs.ichooseFile.value = '';
    }

    callModel() {
        if (this.state.modelShow) {
            return <IEPopUp
                show={this.state.modelShow}
                onHide={this.onHide}
                createdRecords={this.state.createdRecords}
                existingRecords={this.state.existingRecords}
                selectedDataValue={this.props.data}
            />
        }
    }


    render() {


        return (

            <div style={{ border: 'none' }} className=" form-row col-8 m-0 p-0 justify-content-center">
                <div style={{ border: 'none' }} className=" form-row col-12 m-0 p-0 justify-content-center">
                    <div style={{ border: 'none' }} className='col-md-6 mb-2'>

                        <label className='IELabel' htmlFor="chooseFile">Select file from which you want to {this.state.selectedIEValue} data</label><br></br>
                        <input ref='ichooseFile' type='file' onChange={this.fileChange} id='chooseFile' className='form-control-file chooseFile' style={{ border: '1px solid #783f04', borderRadius: '5px', color: '#783f04' }} accept=".xlsx, .csv" required />
                        <p className='note'>*you can select only excel files.</p>
                        <div className="invalid-feedback">
                            Please choose a file.
                    </div>
                        {/* <button type='button' className='btn btn-light btn-sm' onClick={this.uploadFile}><FontAwesomeIcon icon={faUpload} /></button> */}

                    </div>
                </div >
                <div style={{ border: 'none' }} className=" form-row col-12 m-0 p-0 justify-content-center">

                    <div style={{ border: 'none' }} className="col-md-5.5 mb-1">

                        <button className="IEBtn" type="submit">Import</button>
                        <br></br>
                        {this.callModel()}

                    </div>
                    <br></br>
                    <div style={{ border: 'none', textAlign: "center" }} className="col-md-8">

                        <a ref={this.props.sample} style={{ color: 'blue', fontFamily: 'cursive', display: 'none', fontWeight: '500', fontSize: '14px' }} href={this.state.sample} download>
                            Download Sample File
                        </a>
                        <label style={{ display: 'none' }} ref={el => this.msgLabel = el} className='IELabel'></label>


                    </div>
                </div>
            </div >

        )
    }
}
export default Import