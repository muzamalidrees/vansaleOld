import React, { Component } from 'react';
import './IEStyles.css';

import Export from './Export'
import Import from './Import'


class ImportExport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIEValue: '',
            selectedDataValue: '',
            modelShow: false,

        }
        this.handleIEChange = this.handleIEChange.bind(this);
        this.handleIEDataChange = this.handleIEDataChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
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
                this.refs.importComponent.handleImport();
            }
            else {
                this.refs.exportComponent.settingFetchRequest(this.state.selectedDataValue);
            }
        }
    }

    handleIEChange(e) {
        this.setState({ selectedIEValue: e.target.value })
    }
    handleIEDataChange(e) {
        this.setState({ selectedDataValue: e.target.value })
        if (this.state.selectedIEValue === 'Import') {
            this.sample.style.display = '';
            this.refs.importComponent.settingSampleFileAddress(e.target.value);
        }
    }

    makeDataValueEmpty = () => {
        this.setState({ selectedDataValue: '' })
    }
    callImport() {
        if (this.state.selectedIEValue === 'Import') {
            return <Import
                makeDataValueEmpty={this.makeDataValueEmpty}
                data={this.state.selectedDataValue}
                callModel={this.callModel}
                sample={(e) => { this.sample = e }}
                ref='importComponent'
                data={this.state.selectedDataValue}
            />
        }
        else { return null }
    }

    callExport() {
        if (this.state.selectedIEValue === 'Export') {
            return <Export
                makeDataValueEmpty={this.makeDataValueEmpty}
                ref='exportComponent'
            />
        }
        else { return null }
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
                                <option value='INVENTORY'>Inventory</option>
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

                    {this.callImport()}
                    {this.callExport()}

                </form>
            </div >


        )
    }
}
export default ImportExport