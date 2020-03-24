import React, { Component } from 'react';
import './IEStyles.css'
import XLSX from 'xlsx';


class Export extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFormat: '',
            dataToExport: '',
            exportFileName: ''
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }

    handleExport = () => {
        var data = this.state.dataToExport.map(Object.values);
        console.log(data);

        data.map(function (a) {
            a.pop();
            a.pop();
            a.pop();
        })
        data.splice(0, 0, ['ID', 'name', 'email', 'cell', 'address', 'area_id', 'route_id'])

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'sheetJS');
        // console.log(wb);

        /* generate XLSX file and send to client */
        var fileName = this.state.exportFileName + '.xlsx'
        XLSX.writeFile(wb, fileName)
        this.setState({ selectedFormat: '' })
        this.props.makeDataValueEmpty();
    }

    handleFormatChange(e) {
        this.setState({ selectedFormat: e.target.value })
    }

    settingFetchRequest = (data) => {
        this.setState({ exportFileName: data });
        // console.log(data);

        // let options = {
        //     method: 'GET',
        //     body: data
        // }
        // fetch('/getExportFile' + data
        // )
        //     .then((res) => {
        //         console.log(res);

        //         return res.json()
        //     })
        //     .then((json) => {
        //         console.log(json)

        //     })
        //     .catch((error) => console.log(error))

        var promises = []
        switch (data) {

            case 'AREAS':
                promises.push(
                    fetch('/getAllAreas',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'CUSTOMERS':
                promises.push(
                    fetch('/getAllCustomers',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'DRIVERS':
                promises.push(
                    fetch('/getAllDrivers',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'INVENTORY':
                promises.push(
                    fetch('/getAllInventory',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'PERMISSIONS':
                promises.push(
                    fetch('/getAllPermissions',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'PRODUCTcATEGORIES':
                promises.push(
                    fetch('/getAllProductCategories',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'PRODUCTS':
                promises.push(
                    fetch('/getAllProducts',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'ROLES':
                promises.push(
                    fetch('/getAllRoles',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'ROUTES':
                promises.push(
                    fetch('/getAllRoutes',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            case 'USERS':
                promises.push(
                    fetch('/getAllUsers',
                    )
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            this.setState({ dataToExport: json.data })
                        })
                        .catch((error) => console.log(error))
                )
                break;

            default:
                break;

        }
        Promise.all(promises)
            .then(() => {
                this.handleExport();
            })
    }

    render() {

        return (

            <div className=" form-row col-8 justify-content-center">
                <div className='col-md-6 mb-3'>
                    <label className='IELabel' htmlFor="IESelect">File Format</label>
                    <select ref='format' value={this.state.selectedFormat} onChange={this.handleFormatChange} className='form-control' id='IESelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                        <option value='' disabled>--Select--</option>
                        <option value='xl'>Excel</option>
                        {/* <option value='pdf' >PDF</option> */}
                    </select>
                    <div className="invalid-feedback">
                        Please select at least one option.
                        </div>
                </div>
                <div style={{ border: 'none' }} className="col-md-5.5 mb-1">

                    <button className="IEBtn" type="submit">Export</button>
                    <br></br>

                </div>
            </div>

        )
    }
}
export default Export