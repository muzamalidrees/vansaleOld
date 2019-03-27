import React, { Component } from 'react';
import './IEStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


class ImportExport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIEValue: '',
            selectedDataValue: '',
            btnTxt: 'Import/Export'
        }
        this.handleIEChange = this.handleIEChange.bind(this);
        this.handleIEDataChange = this.handleIEDataChange.bind(this);
    }
    uploadFile = () => {
fetch('')
    }
    handleValidate = (evt) => {

        evt.preventDefault();
        evt.stopPropagation();
        let form = this.refs.IEForm;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        }
        else {
            this.handleImportExport();
        }
    }

    handleImportExport = () => {

    }

    handleIEChange(e) {
        this.setState({ selectedIEValue: e.target.value, btnTxt: e.target.value === "" ? "Import/Export" : e.target.value })
    }
    handleIEDataChange(e) {
        this.setState({ selectedDataValue: e.target.value })
    }

    render() {
        // var e = this.refs.IESelect;
        // var ievalue = e.options[e.selectedIndex].text;
        // console.log(ievalue);
        // var datavalue = this.refs.dataSelect.value;
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
                            </select>
                            <div className="invalid-feedback">
                                Please select at least one option.
                        </div>
                        </div>
                    </div>
                    <div className=" form-row col-8 justify-content-center">
                        <div className='col-md-6 mb-3'>
                            <label className='IELabel' htmlFor="chooseFile">Select file from which you want to {this.state.selectedIEValue} data</label><br></br>
                            <input style={{ border: '1px solid #783f04', borderRadius: '5px', color: '#783f04' }} type='file' className='form-control-file chooseFile' id='chooseFile' required />
                            <p className='note'>*you can select only excel or csv files.</p>
                            <div className="invalid-feedback">
                                Please choose a file.
                        </div>
                            <button type='button' className='btn btn-light btn-sm' onClick={this.uploadFile}><FontAwesomeIcon icon={faUpload} /></button>

                        </div>
                    </div>
                    <div style={{ border: 'none' }} className="form-row col-7 justify-content-center">
                        <div style={{ border: 'none' }} className="col-md-5.5 mb-3">

                            <button className="IEBtn align-self-center" type="submit">{this.state.btnTxt}</button>
                        </div>

                    </div>

                </form>
            </div >


        )
    }
}
export default ImportExport