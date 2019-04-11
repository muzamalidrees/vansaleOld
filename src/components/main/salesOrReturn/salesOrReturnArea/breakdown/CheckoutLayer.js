import React, { Component } from 'react';



class CheckoutLayer extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSaleSubmit = this.handleSaleSubmit.bind(this);

    }
    handleSaleSubmit(event) {
        event.preventDefault();
        this.props.handleCheckout();
    }
    render() {

        return (

            <div style={{ border: '2px solid red' }} className=" col-sm-12 m-0 p-0">
                <form style={{ border: 'none' }} onSubmit={this.handleSaleSubmit} method='POST' className='form-row m-0'>
                    <div style={{ border: 'none' }} className='form-row col-12 m-0 p-0 justify-content-end'>


                        <div style={{ border: '1px solid blue' }} className="custom-control custom-checkbox col-md-2 ml-5 mt-1">
                            <input type="checkbox" className="custom-control-input ml-5" value="" id="defaultCheck1" />
                            <label className="custom-control-label mr-5" htmlFor="defaultCheck1">
                                Print Invoice ?
                        </label>
                        </div>
                        <div style={{ border: 'none' }} className='col-md-3 mr-3 p-0 '>
                            <button type="submit" className='btn btn-info btn-sm' style={{ fontWeight: '700', width: '250px', marginRight: '5px' }}>{this.props.checkoutBtnTxt}</button>
                        </div>

                    </div>

                </form>

            </div>

        )
    }
}



export default CheckoutLayer