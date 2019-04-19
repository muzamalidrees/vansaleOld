import React, { Component } from 'react';
import './IEStyles.css'
import XLSX from 'xlsx';


class Export extends Component {
    // componentWillMount() {
    //     fetch('/getAllCustomers',
    //     )
    //         .then((res) => res.json())
    //         .then((json) => {
    //             console.log(json)
    //             this.setState({ customers: json.data })
    //         })
    //         .catch((error) => console.log(error))
    // }
    constructor(props) {
        super(props);
        this.state = {
            selectedFormat: ''
        }
        this.handleFormatChange = this.handleFormatChange.bind(this);
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

    handleFormatChange(e) {
        this.setState({ selectedFormat: e.target.value })
    }

    render() {

        return (

            <div style={{ display: '' }} ref='format' className=" form-row col-8 justify-content-center">
                <div className='col-md-6 mb-3'>
                    <label className='IELabel' htmlFor="IESelect">File Format</label>
                    <select ref='iformat' value={this.state.selectedFormat} onChange={this.handleFormatChange} className='form-control' id='IESelect' style={{ padding: '6px', color: '#783f04', textAlign: 'center', fontSize: '17px', fontWeight: '600', border: '1px solid #783f04', borderRadius: '5px' }} required>
                        <option value='' disabled>--Select--</option>
                        <option value='xl'>Excel</option>
                        {/* <option value='pdf' >PDF</option> */}
                    </select>
                    <div className="invalid-feedback">
                        Please select at least one option.
                        </div>
                </div>
            </div>

        )
    }
}
export default Export