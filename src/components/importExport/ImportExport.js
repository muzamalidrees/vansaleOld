import React, { Component } from 'react';
import './IEStyles.css';
import XLSX from 'xlsx';
import sampleCustomers from './sampleCustomers.xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


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
            sample: '',
        }
        this.fileChange = this.fileChange.bind(this);
        this.handleIEChange = this.handleIEChange.bind(this);
        this.handleIEDataChange = this.handleIEDataChange.bind(this);
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this)
    }

    handleValidate = (evt) => {

        evt.preventDefault();
        evt.stopPropagation();
        let form = this.refs.IEForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            console.log('bk')
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
        console.log('ok');

        var data = this.state.customers.map(Object.values);
        data.map(function (a) {
            a.pop();
            a.pop();
            a.pop();
        })
        data.splice(0, 0, ['ID', 'name', 'email', 'cell', 'address', 'area_id', 'route_id'])
        // console.log(data);

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        console.log(wb);

        /* generate XLSX file and send to client */
        // XLSX.writeFile(wb, "sheetjs.xlsx")

    }
    handleImport = () => {

        let file = this.state.selectedFile;
        var fd = new FormData();
        fd.append('data', file)
        var options = {
            method: 'POST',
            body: fd,
        }
        fetch('/upload', options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let createdCustomers = json.success;
                let existingCustomers = json.failure;
                createdCustomers.reverse();
                console.log(createdCustomers)
                console.log(existingCustomers)
            })
            .catch((error) => console.log(error))
    }

    fileChange(e) {
        var files = e.target.files, f = files[0];
        this.setState({ selectedFile: f })

        // var reader = new FileReader();
        // reader.onload = function (e) {
        //     var data = new Uint8Array(e.target.result);
        //     var workbook = XLSX.read(data, { type: 'array' });
        //     console.log(workbook);
        //     var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        //     var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
        //     console.log(data);
        //     var cols = function make_cols(first_worksheet/*:string*/) {
        //         var o = [];
        //         var range = XLSX.utils.decode_range(first_worksheet);
        //         for (var i = 0; i <= range.e.c; ++i) {
        //             o.push({ name: XLSX.utils.encode_col(i), key: i });
        //         }
        //         return o;
        //     }();
        //     console.log(cols);
        // };
        // reader.readAsArrayBuffer(f);
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
        }
    }
    handleIEDataChange(e) {
        this.setState({ selectedDataValue: e.target.value })
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
                                <option value='customers'>Customers</option>
                                <option value='users'>Users</option>
                                <option value='roles'>Roles</option>
                                <option value='permissions'>Permissions</option>
                                <option value='priceGroups'>Price-Groups</option>
                                <option value='products'>Products</option>
                                <option value='productCategories'>Product-Categories</option>
                                <option value='drivers'>Drivers</option>
                                <option value='routes'>Routes</option>
                                <option value='areas'>Areas</option>
                                <option value='invoices'>Invoices</option>
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
                        <div style={{ border: 'none' }} className="col-md-5.5 mb-3">

                            <button className="IEBtn align-self-center" type="submit">{this.state.btnTxt}</button>
                            <br></br>
                            <a className='' href={this.state.sample} download>
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