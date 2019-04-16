import React, { Component } from 'react';
import './IEStyles.css';
import XLSX from 'xlsx';
import IEPopUp from './IEPopUp';


class ImportExport extends Component {
    componentWillMount() {
        fetch('/getAllCustomers',
        )
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({ customers: json.data })
            })
            .catch((error) => console.log(error))
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedIEValue: '',
            selectedDataValue: '',
            btnTxt: 'Import/Export',
            selectedFile: '',
            selectedFormat: '',
            customers: '',
            sample: '/sampleCustomers.xlsx',
            modelShow: false,
            createdRecords: '',
            existingRecords: ''
        }
        this.fileChange = this.fileChange.bind(this);
        this.handleIEChange = this.handleIEChange.bind(this);
        this.handleIEDataChange = this.handleIEDataChange.bind(this);
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this.callModel = this.callModel.bind(this);
    }

    handleValidate = (evt) => {

        evt.preventDefault();
        evt.stopPropagation();
        let form = this.refs.IEForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            if (this.state.selectedIEValue === 'Import') {
                this.handleImport();
            }
            else {
                this.handleExport();
            }
        }
    }
    handleExport = () => {
        var data = this.state.customers.map(Object.values);
        data.map(function (a) {
            a.pop();
            a.pop();
            a.pop();
        })
        data.splice(0, 0, ['ID', 'name', 'email', 'cell', 'address', 'area_id', 'route_id'])

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        // console.log(wb);

        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx")
    }
    handleImport = () => {

        let file = this.state.selectedFile;
        var fd = new FormData();
        fd.append('data', file)
        fd.append('importing', this.state.selectedDataValue)
        var options = {
            method: 'POST',
            body: fd
        }
        fetch('/import', options)
            .then((res) => res.json())
            .then((json) => {
                let existingRecords = json.failure;
                let records = json.success.map(Object.values);
                records.map(function (record) {
                    record.pop()
                    record.pop()
                    record.shift()
                })
                console.log(records);
                console.log(existingRecords);

                var createdRecords = records.map(function (record) {
                    return {
                        name: record[0],
                        email: record[1],
                        cell: record[2],
                        address: record[3],
                    };
                });
                this.setState({ createdRecords: createdRecords, existingRecords: existingRecords, modelShow: true })
            })
            .catch((error) => console.log(error))
    }

    fileChange(e) {
        var files = e.target.files, f = files[0];
        this.setState({ selectedFile: f })
    }
    handleFormatChange(e) {
        this.setState({ selectedFormat: e.target.value })
    }
    handleIEChange(e) {
        this.setState({ selectedIEValue: e.target.value, btnTxt: e.target.value === "" ? "Import/Export" : e.target.value })
        if (e.target.value === 'Import') {
            this.refs.chooseFile.style.display = '';
            this.refs.ichooseFile.setAttribute("required", '');
            this.refs.iformat.removeAttribute("required");
            this.refs.format.style.display = 'none';
        }
        else {
            this.refs.format.style.display = '';
            this.refs.iformat.setAttribute("required", '');
            this.refs.ichooseFile.removeAttribute("required");
            this.refs.chooseFile.style.display = 'none';
            this.refs.sample.style.display = 'none';
        }
    }
    handleIEDataChange(e) {
        this.setState({ selectedDataValue: e.target.value })
        this.refs.sample.style.display = '';
    }
    callModel() {
        if (this.state.modelShow) {
            return <IEPopUp
                show={this.state.modelShow}
                onHide={() => { this.setState({ modelShow: false }) }}
                createdRecords={this.state.createdRecords}
                existingRecords={this.state.existingRecords}
            />
        }
    }
    render() {

        return (

            <div className="col-sm-9" style={{ border: 'none', textAlign: 'center', marginTop: `${this.props.mt}`, marginBottom: `${this.props.mb}`, paddingTop: `${this.props.pt}`, paddingBottom: `${this.props.pb}` }}>
                <h1 style={{ border: 'none' }} className='IEHdng'>Import/Export Data</h1>

                <form style={{ border: 'none', textAlign: 'left' }} onSubmit={this.handleValidate} method="POST" ref="IEForm" className=" form-row m-0 justify-content-center " noValidate>
                    <div className=" form-row col-8 justify-content-center">
                        <div className='col-md-6 mb-3'>
                            <label className='IELabel' htmlFor="IESelect">Import/Export</label>
                            <select value={this.state.selectedIEValue} onChange={this.handleIEChange} className='form-control' id='IESelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value='' disabled>--Select--</option>
                                <option value='Import' >Import</option>
                                <option value='Export' >Export</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select at least one option.
                        </div>
                        </div>
                    </div>
                    <div className=" form-row col-8 justify-content-center">
                        <div className='col-md-6 mb-3'>
                            <label className='IELabel' htmlFor="dataSelect">Select data which you want to {this.state.selectedIEValue}</label>
                            <select value={this.state.selectedDataValue} onChange={this.handleIEDataChange} className='form-control select' id='dataSelect' ref='dataSelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value='' disabled>--Select--</option>
                                <option value='AREAS'>Areas</option>
                                <option value='CUSTOMERS'>Customers</option>
                                <option value='DRIVERS'>Drivers</option>
                                <option value='PERMISSIONS'>Permissions</option>
                                <option value='PRODUCTcATEGORIES'>Product-Categories</option>
                                <option value='PRODUCTS'>Products</option>
                                <option value='ROLES'>Roles</option>
                                <option value='ROUTES'>Routes</option>
                                <option value='USERS'>Users</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select at least one option.
                        </div>
                        </div>
                    </div>
                    <div style={{ display: 'none' }} ref='chooseFile' className=" form-row col-8 justify-content-center">
                        <div className='col-md-6 mb-3'>
                            <label className='IELabel' htmlFor="chooseFile">Select file from which you want to {this.state.selectedIEValue} data</label><br></br>
                            <input ref='ichooseFile' type='file' onChange={this.fileChange} id='chooseFile' className='form-control-file chooseFile' style={{ border: '1px solid #783f04', borderRadius: '5px', color: '#783f04' }} accept=".xlsx, .csv" required />
                            <p className='note'>*you can select only excel files.</p>
                            <div className="invalid-feedback">
                                Please choose a file.
                        </div>
                            {/* <button type='button' className='btn btn-light btn-sm' onClick={this.uploadFile}><FontAwesomeIcon icon={faUpload} /></button> */}

                        </div>
                    </div>
                    <div style={{ display: 'none' }} ref='format' className=" form-row col-8 justify-content-center">
                        <div className='col-md-6 mb-3'>
                            <label className='IELabel' htmlFor="IESelect">File Format</label>
                            <select ref='iformat' value={this.state.selectedFormat} onChange={this.handleFormatChange} className='form-control' id='IESelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value='' disabled>--Select--</option>
                                <option value='xl'>Excel</option>
                                <option value='pdf' >PDF</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select at least one option.
                        </div>
                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div style={{ border: 'none' }} className="col-md-5.5 mb-1">

                            <button className="IEBtn" type="submit">{this.state.btnTxt}</button>
                            <br></br>

                            {this.callModel()}
                        </div>
                        <br></br>
                        <div style={{ border: 'none', textAlign: "center" }} className="col-md-7">

                            <a ref='sample' style={{ fontFamily: 'cursive', display: 'none', fontWeight: '500', fontSize: '14px' }} className='IELabel' href={this.state.sample} download>
                                Download Sample File
                            </a>

                        </div>
                    </div>

                </form>
            </div >


        )
    }
}
export default ImportExport