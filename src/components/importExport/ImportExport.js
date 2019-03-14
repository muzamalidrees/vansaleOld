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

    handleIEChange = (e) => {
        this.setState({ selectedIEValue: e.target.value, btnTxt: e.target.value === "" ? "Import/Export" : e.target.value })
    }

    render() {
        // var e = this.refs.IESelect;
        // var ievalue = e.options[e.selectedIndex].text;
        // console.log(ievalue);
        // var datavalue = this.refs.dataSelect.value;
        return (
            <div>
                <div className="container " style={{ textAlign: 'center', backgroundColor: '#999999', marginTop: '30px', marginBottom: '30px', paddingTop: '43px', paddingBottom: '43px' }}>
                    <h1 className='IEHdng'>Import/Export Data</h1>

                    <form onSubmit={this.handleValidate} method="POST" ref="IEForm" className=" IEForm " noValidate>
                        <div className=" form-group">
                            <label htmlFor="IESelect">Import/Export</label>
                            <select value={this.state.selectedIEValue} onChange={this.handleIEChange} className='form-control' id='IESelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value='' >--Select--</option>
                                <option value='Import' >Import</option>
                                <option value='Export' >Export</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select at least one option.
                            </div>
                        </div>
                        <div className=" form-group">
                            <label htmlFor="dataSelect">Select data which you want to {this.state.selectedIEValue}</label>
                            <select className='form-control select' id='dataSelect' ref='dataSelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                                <option value='' >--Select--</option>
                                <option value='customers'>Customers</option>
                                <option value='priceGroups'>Price-Groups</option>
                                <option value='products'>Products</option>
                                <option value='productCategories'>Product-Categories</option>
                                <option value='drivers'>Drivers</option>
                                <option value='routes'>Routes</option>
                                <option value='areas'>Areas</option>
                            </select>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please select at least one option.
                            </div>
                        </div>
                        <div className=" form-group">
                            <label htmlFor="chooseFile">Select file from which you want to {this.state.selectedIEValue} data</label><br></br>
                            <input style={{ border: '1px solid #783f04', borderRadius: '5px', color: '#783f04' }} type='file' className='form-control-file chooseFile' id='chooseFile' required/>
                            <p className='note'>*you can only select excel files.</p>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                            <div className="invalid-feedback">
                                Please choose a file.
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-group col-12">

                            <button className="IEBtn" type="submit">{this.state.btnTxt}</button>
                        </div>

                    </form>
                </div >

            </div >
        )
    }
}
export default ImportExport